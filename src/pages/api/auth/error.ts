import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse,
) {
  const errorUrl = `${process.env.NEXTAUTH_URL}/auth/error`
  console.log('Error Redirect URL:', errorUrl)
  res.redirect(errorUrl)
}
