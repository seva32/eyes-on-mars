import 'next-auth'

declare module 'next-auth' {
  interface Session {
    oauthProvider?: string
    oauthId?: string
  }
}
