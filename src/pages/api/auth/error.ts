import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse,
) {
  const errorUrl = `${process.env.NEXTAUTH_URL}/auth/error`
  res.redirect(errorUrl)
}
