import { Injectable } from '@nestjs/common'

@Injectable()
export class TimeEntryService {
  async findAllByTask(taskId: string) {
    // const tasks = await this.tasksRepository.find({
    //   relations: ['user'],
    //   where: { user: { id: userId } }
    // })
    // return tasks
  }
}
