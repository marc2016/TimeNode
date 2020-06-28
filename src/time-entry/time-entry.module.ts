import { Module } from '@nestjs/common';
import { TimeEntryService } from './time-entry.service';
import { TimeEntryController } from './time-entry.controller';

@Module({
  providers: [TimeEntryService],
  controllers: [TimeEntryController]
})
export class TimeEntryModule {}
