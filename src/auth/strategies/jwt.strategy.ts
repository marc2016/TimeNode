import { PassportStrategy } from '@nestjs/passport'
import { ExtractJwt, Strategy } from 'passport-jwt'
import { Injectable, HttpException, HttpStatus } from '@nestjs/common'
import { AuthService } from '../auth.service'
import { ConfigService } from '@nestjs/config'
import { JwtContent } from '../domain/JwtContent'

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private configService: ConfigService,
    private readonly authService: AuthService
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: configService.get<string>('JWT_SECRET')
    })
  }

  async validate(jwtConten: JwtContent): Promise<any> {
    const user = await this.authService.validateUserJwt(jwtConten)
    if (!user) {
      throw new HttpException('Invalid token', HttpStatus.UNAUTHORIZED)
    }
    return user
  }
}
