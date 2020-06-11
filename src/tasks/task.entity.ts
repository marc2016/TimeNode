import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BeforeInsert,
  OneToOne,
  JoinColumn,
  ManyToOne,
  JoinTable
} from 'typeorm'
import { User } from 'src/users/user.entity'

@Entity()
export class Task {
  @PrimaryGeneratedColumn('uuid')
  id: number

  @Column()
  name: string

  @Column()
  note: string

  @ManyToOne(type => User)
  user: User
}
