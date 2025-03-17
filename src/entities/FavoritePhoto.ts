import type { IUser } from './interfaces/IUser'
import type { IFavoritePhoto } from './interfaces/IFavoritePhoto'

export class FavoritePhoto implements IFavoritePhoto {
  id!: number
  photoUrl!: string
  rover?: string
  camera?: string
  sol?: number
  user!: IUser
}
