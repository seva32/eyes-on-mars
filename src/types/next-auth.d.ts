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

declare module 'next-auth/jwt' {
  interface JWT {
    oauthProvider?: string
    oauthId?: string
    user?: {
      id: string
      email: string
      username: string
      accessToken?: string
    }
  }
}
