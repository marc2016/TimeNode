import { Controller, Get, UseGuards, Req } from '@nestjs/common'
import { TasksService } from './tasks.service'
import { Task } from './task.entity'
import { AuthGuard } from '@nestjs/passport'
import { User } from 'src/users/user.entity'

@Controller('tasks')
export class TasksController {
  constructor(private taskService: TasksService) {}

  @Get()
  @UseGuards(AuthGuard('jwt'))
  async findAll(@Req() req: any): Promise<Task[]> {
    const user = req.user as User
    return this.taskService.findAllByUser(user.id)
  }
}
