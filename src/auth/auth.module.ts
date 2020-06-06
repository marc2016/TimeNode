import { Module } from '@nestjs/common'
import { AuthService } from './auth.service'
import { AuthController } from './auth.controller'
import { UsersModule } from 'src/users/users.module'
import { PassportModule } from '@nestjs/passport'
import { LocalStrategy } from './strategies/local.strategy'
import { ConfigModule } from '@nestjs/config'
import { JwtModule } from '@nestjs/jwt'

@Module({
  imports: [ConfigModule, UsersModule, PassportModule],
  providers: [AuthService, LocalStrategy],
  controllers: [AuthController]
})
export class AuthModule {}
