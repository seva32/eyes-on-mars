import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from 'typeorm'
import { IUser } from './IUser'
import { IProfile } from './IProfile'

@Entity({ name: 'profile' })
export class Profile implements IProfile {
  @PrimaryGeneratedColumn()
  id!: number

  @Column({ nullable: true })
  avatarUrl?: string

  @Column({ nullable: true })
  bio?: string

  @OneToOne('User', 'profile')
  user!: IUser
}
