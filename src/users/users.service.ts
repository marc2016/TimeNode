import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { User } from './user.entity'
import { Repository } from 'typeorm'

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>
  ) {}

  findAll(): Promise<User[]> {
    return this.usersRepository.find()
  }

  findOneByUsername(username: string): Promise<User> {
    return this.usersRepository.findOne({ where: { username: username } })
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id)
  }
}
