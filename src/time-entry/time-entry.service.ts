import { Injectable } from '@nestjs/common'
import { TimeEntry } from './time-entry.entity'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

@Injectable()
export class TimeEntryService {
  constructor(
    @InjectRepository(TimeEntry)
    private timeEntryRepository: Repository<TimeEntry>
  ) {}

  async findAllByTask(taskId: string) {
    const timeEntries = await this.timeEntryRepository.find({
      relations: ['task'],
      where: { task: { id: taskId } }
    })
    return timeEntries
  }

  async findAllByDate(date: Date) {
    const timeEntries = await this.timeEntryRepository.find({
      relations: ['task'],
      where: { date: date }
    })
    return timeEntries
  }
}
