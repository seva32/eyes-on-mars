export interface IUser {
  id: number
  username: string
  email?: string
  password?: string
  oauthProvider?: string
  oauthId?: string
  createdAt?: Date
  updatedAt?: Date
}
