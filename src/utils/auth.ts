import type {
  GetServerSidePropsContext,
  NextApiRequest,
  NextApiResponse,
} from 'next'
import type { NextAuthOptions } from 'next-auth'
import { getServerSession } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import Credentials from 'next-auth/providers/credentials'
import { PrismaAdapter } from '@auth/prisma-adapter'
import prisma from '../lib/prisma'

export const nextAuthConfig = {
  adapter: PrismaAdapter(prisma),
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
        const res = await fetch(
          `${process.env.NEXTAUTH_URL}/api/auth-app/signin`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              email: credentials?.email,
              password: credentials?.password,
              username: credentials?.username,
            }),
          },
        )

        if (res.ok) {
          const user = await res.json()
          return { ...user, accessToken: res.headers.get('Authorization') }
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
      authorization: {
        params: {
          prompt: 'consent',
          access_type: 'offline',
          response_type: 'code',
          scope: 'openid email profile',
        },
      },
      profile(profile) {
        return {
          id: profile.sub as string,
          name: profile.name as string,
          email: profile.email as string,
          image: profile.picture as string,
        }
      },
      style: { logo: '/google.svg', bg: '#fff', text: '#000' },
    }),
  ],
  pages: {
    signIn: '/auth/signin',
    signOut: '/auth/signout',
    error: '/auth/error',
  },
  callbacks: {
    async jwt({ token, account, user }) {
      console.log('jwt callback >>>>>>>>>>>>>>>> ', token, account, user)
      if (account) {
        token.oauthProvider = account.provider
        token.oauthId = account.userId
      }
      if (user) {
        token.user = user as {
          id: string
          email: string
          username: string
          accessToken?: string
        }
      }
      return token
    },
    async session({ session, token }) {
      if (token?.ouathProvider && token?.oauthId) {
        session.oauthProvider = token.oauthProvider as string
        session.oauthId = token.oauthId as string
      }
      if (token?.user) {
        session.user = {
          email: token.user.email,
          name: token.user.username,
          id: token.user.id,
        }
      }
      if (token?.user.accessToken) {
        session.accessToken = token.user.accessToken
      }
      return session
    },
    async redirect({ url, baseUrl }) {
      const urlRegex = /^(https?|chrome):\/\/[^\s$.?#].[^\s]*$/gm
      if (urlRegex.test(url)) {
        const urlObj = new URL(url)
        const provider = urlObj.searchParams.get('provider')
        if (provider === 'google') {
          if (url.includes('/auth/error')) {
            return `${baseUrl}/auth/signin`
          }
        }
      }
      return url.startsWith(baseUrl) ? url : baseUrl
    },
    async signIn(all) {
      console.log('Sign in callback', all)
      return true
    },
  },
  session: {
    strategy: 'jwt',
  },
  jwt: {
    maxAge: 30 * 24 * 60 * 60,
  },
  events: {
    // async signIn(message) {
    //   console.log('signin event', message)
    // },
    // async signOut(message) {
    //   console.log('signout event', message)
    // },
    // async createUser(message) {
    //   console.log('createuser event', message)
    // },
    // async updateUser(message) {
    //   console.log('updateuser event', message)
    // },
    // async linkAccount(message) {
    //   console.log('linkaccount event', message)
    // },
    // async session(message) {
    //   console.log('session event', message)
    // },
  },
  debug: true,
  secret: process.env.NEXTAUTH_SECRET,
} satisfies NextAuthOptions

// for server contexts
export function auth(
  ...args:
    | [GetServerSidePropsContext['req'], GetServerSidePropsContext['res']]
    | [NextApiRequest, NextApiResponse]
    | []
) {
  return getServerSession(...args, nextAuthConfig)
}
