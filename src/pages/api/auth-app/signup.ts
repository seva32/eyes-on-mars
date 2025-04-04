import { NextApiRequest, NextApiResponse } from 'next'
import bcrypt from 'bcryptjs'
import prisma from '../../../lib/prisma'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'POST') {
    const { username, password, email } = req.body

    if (!email || !password) {
      return res
        .status(400)
        .json({ message: 'Email and password are required' })
    }

    const existingUser = await prisma.user.findUnique({
      where: { email },
    })
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' })
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    try {
      const newUser = await prisma.user.create({
        data: {
          username: username || email,
          email,
          password: hashedPassword,
          profile: {
            create: {
              name: username || email.split('@')[0],
            },
          },
        },
      })

      return res
        .status(201)
        .json({ message: 'User registered successfully', user: newUser })
    } catch {
      return res
        .status(500)
        .json({ message: 'Internal Server Error: register' })
    }
  }

  res.status(405).json({ message: 'Method not allowed' })
}
