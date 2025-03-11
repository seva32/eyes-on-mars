import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm'
import { Profile } from './Profile'

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id!: number

  @Column({ unique: true })
  username!: string

  @Column({ unique: true, nullable: true })
  email!: string

  @Column({ nullable: true })
  password!: string // Will be null for OAuth users

  @Column({ nullable: true })
  oauthProvider?: string // e.g., 'google', 'github'

  @Column({ nullable: true })
  oauthId?: string // Store OAuth provider ID

  @CreateDateColumn()
  createdAt?: Date

  @UpdateDateColumn()
  updatedAt?: Date

  @OneToOne(() => Profile, (profile) => profile.user, { cascade: true })
  @JoinColumn()
  profile?: Profile
}
