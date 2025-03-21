import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (
    req.headers.referer === 'https://accounts.google.com/' &&
    req.url === '/api/auth/error?error=Callback'
  ) {
    const signInUrl = `${process.env.NEXTAUTH_URL}/auth/signin?error=invalid_credentials`
    return res.redirect(signInUrl)
  }

  const errorUrl = `${process.env.NEXTAUTH_URL}/auth/error`
  res.redirect(errorUrl)
}
