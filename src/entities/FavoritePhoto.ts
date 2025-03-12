import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm'
import { User } from './User'

@Entity()
export class FavoritePhoto {
  @PrimaryGeneratedColumn()
  id!: number

  @Column()
  photoUrl!: string

  @Column()
  rover?: string

  @Column()
  camera?: string

  @Column()
  sol?: number

  @ManyToOne(() => User, (user) => user.favoritePhotos)
  user!: User
}
