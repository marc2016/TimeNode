import { PrimaryGeneratedColumn, Column } from 'typeorm'

export class Timer {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  description: string

  @Column()
  note: string

  @Column()
  duration: number

  @Column()
  date: Date

  @Column()
  start: Date

  // @Column(type => User)
  // user: User

  // @Column(type => Project)
  // project: Project
}
