import { Module } from '@nestjs/common'
import { TimeEntryService } from './time-entry.service'
import { TimeEntryController } from './time-entry.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { TimeEntry } from './time-entry.entity'
import { UsersModule } from 'src/users/users.module'

@Module({
  imports: [TypeOrmModule.forFeature([TimeEntry]), UsersModule],
  providers: [TimeEntryService],
  controllers: [TimeEntryController]
})
export class TimeEntryModule {}
