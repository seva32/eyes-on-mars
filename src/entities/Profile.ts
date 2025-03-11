import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from 'typeorm'
import { User } from './User'

@Entity()
export class Profile {
  @PrimaryGeneratedColumn()
  id!: number

  @Column({ nullable: true })
  avatarUrl?: string

  @Column({ nullable: true })
  bio?: string

  @OneToOne(() => User, (user) => user.profile)
  user!: User
}
