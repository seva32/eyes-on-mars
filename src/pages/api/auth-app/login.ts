import { NextApiRequest, NextApiResponse } from 'next'
import bcrypt from 'bcryptjs'
import prisma from '../../../lib/prisma'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'POST') {
    const { username, password, email } = req.body

    if (!password || !email) {
      return res
        .status(400)
        .json({ message: 'Username, password and email are required' })
    }

    const user = await prisma.user.findFirst({
      where: {
        OR: [{ email }, { username }],
      },
    })

    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' })
    }

    const isPasswordValid = await bcrypt.compare(password, user?.password)
    if (!isPasswordValid) {
      return res.status(400).json({ message: 'Invalid credentials to login' })
    }

    return res.status(200).json(user)
  }

  res.status(405).json({ message: 'Method not allowed' })
}
