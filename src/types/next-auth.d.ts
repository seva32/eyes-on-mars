import 'next-auth'

declare module 'next-auth' {
  interface Session {
    oauthProvider?: string
    oauthId?: string
    accessToken?: string
    user?: {
      id?: string
      name?: string
      email?: string
      image?: string
    }
  }
}
