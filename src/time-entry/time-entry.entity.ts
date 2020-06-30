import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm'
import { Task } from 'src/tasks/task.entity'
import { User } from 'src/users/user.entity'

@Entity()
export class TimeEntry {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  date: Date

  @Column()
  duration: number

  @ManyToOne(type => Task)
  task: Task

  @ManyToOne(type => User)
  user: User
}
