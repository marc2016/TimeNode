import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BeforeInsert,
  OneToOne,
  JoinColumn
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

  @OneToOne(type => User)
  @JoinColumn()
  user: User
}
