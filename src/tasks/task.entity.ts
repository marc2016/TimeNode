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
  id: string

  @Column()
  name: string

  @Column()
  note: string

  @ManyToOne(type => User)
  user: User
}
