import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async jwt({ token, account }) {
      if (account) {
        token.oauthProvider = account.provider
        token.oauthId = account.id
      }
      return token
    },
    async session({ session, token }) {
      if (token) {
        session.oauthProvider = token.oauthProvider as string
        session.oauthId = token.oauthId as string
      }
      return session
    },
  },
})
