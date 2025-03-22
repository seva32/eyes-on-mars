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

const randomId = () => Math.random().toString(36).substring(2, 7)

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
      const urlPattern =
        /^(https?:\/\/)?([\w-]+(\.[\w-]+)+)(:\d+)?(\/[\w-./?%&=]*)?$/i

      if (!urlPattern.test(url)) {
        return baseUrl
      }

      try {
        const urlObj = new URL(url)
        const provider = urlObj.searchParams.get('provider')

        if (provider === 'google' && url.includes('/auth/error')) {
          return `${baseUrl}/auth/signin`
        }

        return url.startsWith(baseUrl) ? url : baseUrl
      } catch (error) {
        console.error('Unexpected error processing URL:', url, error)
        return baseUrl
      }
    },
    async signIn({ user, account }) {
      if (account.provider === 'google') {
        let existingUser = await prisma.user.findUnique({
          where: { email: user.email },
          include: { accounts: true },
        })

        if (existingUser) {
          const accountExists = existingUser.accounts.some(
            (acc) => acc.provider === 'google',
          )

          if (!accountExists) {
            await prisma.account.create({
              data: {
                userId: existingUser.id,
                provider: 'google',
                providerAccountId: account.providerAccountId,
              },
            })
          }
          if (user.image) {
            await prisma.profile.update({
              where: { userId: existingUser.id },
              data: { avatarUrl: user.image },
            })
          }
        } else {
          // If user doesn't exist, create it
          const generatedUsername = user.name
            ? user.name.replace(/\s+/g, '').toLowerCase() + randomId()
            : 'user' + randomId()

          existingUser = await prisma.user.create({
            data: {
              email: user.email,
              username: generatedUsername,
              accounts: {
                create: {
                  provider: 'google',
                  providerAccountId: account.providerAccountId,
                },
              },
              profile: {
                create: {
                  avatarUrl: user.image,
                },
              },
            },
            include: {
              accounts: true,
              profile: true,
            },
          })
        }

        user.id = existingUser.id.toString()
      }

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
