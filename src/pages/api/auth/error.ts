import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  console.log('Error handler >>>>>>>>>>>>>>>>')

  // Extract query parameters
  const { error, provider } = req.query

  // Check if the error was caused by the Google provider
  if (provider === 'google') {
    console.log('Error caused by Google provider:', error)

    // Handle specific error types
    if (error === 'OAuthCallbackError') {
      // User canceled the authentication process
      const signInUrl = `${process.env.NEXTAUTH_URL}/auth/signin`
      return res.redirect(signInUrl)
    } else if (error === 'OAuthSignin') {
      // Login failed due to invalid credentials
      const signInUrl = `${process.env.NEXTAUTH_URL}/auth/signin?error=invalid_credentials`
      return res.redirect(signInUrl)
    }
  }

  // Default error redirection
  const errorUrl = `${process.env.NEXTAUTH_URL}/auth/error`
  res.redirect(errorUrl)
}
