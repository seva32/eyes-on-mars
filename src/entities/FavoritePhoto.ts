import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm'
import { IUser } from './IUser'
import { IFavoritePhoto } from './IFavoritePhoto'

@Entity({ name: 'favorite_photo' })
export class FavoritePhoto implements IFavoritePhoto {
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

  @ManyToOne('User', 'favoritePhotos')
  user!: IUser
}
