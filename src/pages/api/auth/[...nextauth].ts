import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import Credentials from 'next-auth/providers/credentials'

export default NextAuth({
  providers: [
    Credentials({
      id: 'credentials',
      type: 'credentials',
      credentials: {
        email: {},
        username: {},
        password: {},
      },
      authorize: async (credentials) => {
        const res = await fetch('/api/auth-app/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            email: credentials?.email,
            password: credentials?.password,
            username: credentials?.username,
          }),
        })

        if (res.ok) {
          return await res.json()
        } else {
          return null
        }
      },
    }),
    GoogleProvider({
      id: 'google',
      name: 'Google',
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!,
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET!,
      profile(profile) {
        return {
          id: profile.id as string,
          name: profile.name as string,
          email: profile.email as string,
          image: profile.picture as string,
        }
      },
    }),
  ],
  pages: {
    signIn: '/auth/login',
    signOut: '/auth/logout',
    error: '/auth/error',
  },
  callbacks: {
    async jwt({ token, account, user }) {
      if (account) {
        token.oauthProvider = account.provider
        token.oauthId = account.id
      }
      if (user) {
        token.user = user
      }
      return token
    },
    async session({ session, token, user }) {
      if (token) {
        session.oauthProvider = token.oauthProvider as string
        session.oauthId = token.oauthId as string
        session.user = user
      }
      return session
    },
    async signIn({ user, account, profile, email, credentials }) {
      console.log(
        'Sign in callback',
        user,
        account,
        profile,
        email,
        credentials,
      )
      return true
    },
    async redirect({ url, baseUrl }) {
      console.log('redirect callback', url, baseUrl)
      return baseUrl
    },
  },
  session: {
    strategy: 'jwt',
  },
  jwt: {
    maxAge: 30 * 24 * 60 * 60,
  },
  events: {
    async signIn(message) {
      console.log('signin event', message)
    },
    async signOut(message) {
      console.log('signout event', message)
    },
    async createUser(message) {
      console.log('createuser event', message)
    },
    async updateUser(message) {
      console.log('updateuser event', message)
    },
    async linkAccount(message) {
      console.log('linkaccount event', message)
    },
    async session(message) {
      console.log('session event', message)
    },
  },
  debug: true,
  secret: process.env.NEXTAUTH_SECRET,
})
