import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm'
import { IProfile } from './IProfile'
import { IFavoritePhoto } from './IFavoritePhoto'
import { IUser } from './IUser'

@Entity({ name: 'user' })
export class User implements IUser {
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

  @OneToOne('Profile', 'userId')
  @JoinColumn()
  profile?: IProfile

  @OneToMany('FavoritePhoto', 'user')
  favoritePhotos?: IFavoritePhoto[]
}
