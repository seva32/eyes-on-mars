import type { IProfile } from './interfaces/IProfile'
import type { IFavoritePhoto } from './interfaces/IFavoritePhoto'
import type { IUser } from './interfaces/IUser'

export class User implements IUser {
  id!: number
  username!: string
  email!: string
  password!: string
  oauthProvider?: string // e.g., 'google', 'github'
  oauthId?: string // Store OAuth provider ID
  createdAt?: Date
  updatedAt?: Date
  profile?: IProfile
  favoritePhotos?: IFavoritePhoto[]
}
