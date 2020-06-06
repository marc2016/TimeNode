import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ConfigModule } from '@nestjs/config'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { TimersModule } from './timers/timers.module'
import { UsersModule } from './users/users.module'
import { AuthModule } from './auth/auth.module'
import { TasksModule } from './tasks/tasks.module'

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(),
    TimersModule,
    UsersModule,
    AuthModule,
    TasksModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
