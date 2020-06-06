import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Task } from './task.entity'
import { Repository } from 'typeorm'

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private tasksRepository: Repository<Task>
  ) {}

  async findAllByUser(userId: string) {
    const tasks = await this.tasksRepository.find({
      relations: ['user'],
      where: { user: { id: userId } }
    })

    return tasks
  }
}
