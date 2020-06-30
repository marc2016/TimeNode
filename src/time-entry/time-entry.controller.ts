import { Controller, Get, UseGuards, Req, Query } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'
import { TimeEntry } from './time-entry.entity'
import { User } from 'src/users/user.entity'
import { TimeEntryService } from './time-entry.service'

@Controller('time-entry')
export class TimeEntryController {
  constructor(private timeEntryService: TimeEntryService) {}

  @Get()
  @UseGuards(AuthGuard('jwt'))
  async findAll(
    @Req() req: any,
    @Query('date') date: Date
  ): Promise<TimeEntry[]> {
    const user = req.user as User
    return this.timeEntryService.findAllByDate(user.id, date)
  }
}
