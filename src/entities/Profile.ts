import type { IUser } from './interfaces/IUser'
import type { IProfile } from './interfaces/IProfile'

export class Profile implements IProfile {
  id!: number
  avatarUrl?: string
  bio?: string
  user!: IUser
  name?: string
}
