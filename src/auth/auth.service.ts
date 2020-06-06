import * as jwt from 'jsonwebtoken'
import { Injectable } from '@nestjs/common'
import { UsersService } from 'src/users/users.service'
import { User } from 'src/users/user.entity'
import { ConfigService } from '@nestjs/config'
import { LoginDto } from './domain/LoginDto'
import { Token } from './domain/Token'

@Injectable()
export class AuthService {
  constructor(
    private configService: ConfigService,
    private usersService: UsersService
  ) {}

  createToken(user: User): Token {
    const expiresIn = this.configService.get<string>('JWT_EXPIRES_IN')
    const secret = this.configService.get<string>('JWT_SECRET')

    const accessToken = jwt.sign(
      {
        id: user.id,
        email: user.username,
        firstname: user.firstName,
        lastname: user.lastName
      },
      secret,
      { expiresIn }
    )
    return {
      expiresIn,
      accessToken
    }
  }

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOneByUsername(username)
    if (user && user.password === pass) {
      const { password, ...result } = user
      return result
    }
    return null
  }

  async login(loginDto: LoginDto): Promise<Token> {
    const user = await this.usersService.findOneByUsername(loginDto.username)
    const token = this.createToken(user)
    return token
  }
}
