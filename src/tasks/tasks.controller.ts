import {
  Controller,
  Get,
  UseGuards,
  Req,
  Post,
  Body,
  Res
} from '@nestjs/common'
import { TasksService } from './tasks.service'
import { Task } from './task.entity'
import { AuthGuard } from '@nestjs/passport'
import { User } from 'src/users/user.entity'
import { TaskDto } from './domain/TaskDto'

@Controller('tasks')
export class TasksController {
  constructor(private taskService: TasksService) {}

  @Get()
  @UseGuards(AuthGuard('jwt'))
  async findAll(@Req() req: any): Promise<Task[]> {
    const user = req.user as User
    return this.taskService.findAllByUser(user.id)
  }

  @Post()
  @UseGuards(AuthGuard('jwt'))
  async create(
    @Req() req: any,
    @Res() response,
    @Body() task: TaskDto
  ): Promise<Task> {
    const user = req.user as User
    return this.taskService.create(task, user.id)
  }
}
