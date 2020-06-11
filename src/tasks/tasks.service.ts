import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Task } from './task.entity'
import { Repository } from 'typeorm'
import { TaskDto } from './domain/TaskDto'
import { UsersService } from 'src/users/users.service'

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private tasksRepository: Repository<Task>,
    private userService: UsersService
  ) {}

  async findAllByUser(userId: string) {
    const tasks = await this.tasksRepository.find({
      relations: ['user'],
      where: { user: { id: userId } }
    })

    return tasks
  }

  async create(task: TaskDto, userId: string): Promise<Task> {
    const user = await this.userService.findOneById(userId)
    const result = this.tasksRepository.insert({
      name: task.name,
      note: task.note,
      user: user
    })
    return null
  }
}
