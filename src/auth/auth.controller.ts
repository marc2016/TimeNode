import {
  Controller,
  Post,
  Response,
  UseGuards,
  Body,
  HttpStatus
} from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'
import { response } from 'express'
import { LoginDto } from './domain/LoginDto'
import { AuthService } from './auth.service'
import { UsersService } from 'src/users/users.service'

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly usersService: UsersService
  ) {}

  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Response() response, @Body() loginDto: LoginDto) {
    const user = await this.usersService.findOneByUsername(loginDto.username)
    if (!user) {
      response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        message: 'User Not Found'
      })
    } else {
      const token = this.authService.createToken(user)
      return response.status(HttpStatus.OK).json(token)
    }
  }
}
