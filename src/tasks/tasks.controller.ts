import { Controller, Get } from '@nestjs/common'
import { TasksService } from './tasks.service'
import { Task } from './task.entity'

@Controller('tasks')
export class TasksController {
  constructor(private taskService: TasksService) {}

  @Get()
  async findAll(): Promise<Task[]> {
    return this.taskService.findAllByUser(userId)
  }
}
