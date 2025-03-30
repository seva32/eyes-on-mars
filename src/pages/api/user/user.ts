import { NextApiRequest, NextApiResponse } from 'next'
import bcrypt from 'bcryptjs'
import prisma from '../../../lib/prisma'
import { auth } from '../../../utils/auth'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const session = await auth(req, res)

  if (req.method !== 'POST' && (!session || !session.user?.email)) {
    return res.status(401).json({ message: 'Unauthorized' })
  }

  const email = session?.user?.email

  switch (req.method) {
    case 'GET': {
      if (!email || typeof email !== 'string') {
        return res.status(400).json({ message: 'Email is required' })
      }

      const user = await prisma.user.findUnique({ where: { email } })
      if (!user) {
        return res.status(404).json({ message: 'User not found' })
      }
      return res.status(200).json(user)
    }

    case 'PATCH': {
      const { username, password } = req.body

      const existingUser = await prisma.user.findUnique({ where: { email } })
      if (!existingUser) {
        return res.status(404).json({ message: 'User not found' })
      }

      const updateData = { username: '', password: '' }
      if (username) updateData.username = username
      if (password) updateData.password = await bcrypt.hash(password, 10)

      try {
        const updatedUser = await prisma.user.update({
          where: { email },
          data: updateData,
        })
        return res
          .status(200)
          .json({ message: 'User updated', user: updatedUser })
      } catch {
        return res
          .status(500)
          .json({ message: 'Internal Server Error: update' })
      }
    }

    case 'PUT': {
      const { username, password } = req.body

      if (!email || typeof email !== 'string' || !username || !password) {
        return res
          .status(400)
          .json({ message: 'Email, username, and password are required' })
      }

      const hashedPassword = await bcrypt.hash(password, 10)

      try {
        const updatedUser = await prisma.user.upsert({
          where: { email },
          update: { username, password: hashedPassword },
          create: { username, email, password: hashedPassword },
        })
        return res
          .status(200)
          .json({ message: 'User upserted', user: updatedUser })
      } catch {
        return res
          .status(500)
          .json({ message: 'Internal Server Error: upsert' })
      }
    }

    case 'DELETE': {
      if (!email || typeof email !== 'string') {
        return res.status(400).json({ message: 'Email is required' })
      }

      try {
        await prisma.user.delete({ where: { email } })
        return res.status(200).json({ message: 'User deleted' })
      } catch {
        return res
          .status(500)
          .json({ message: 'Internal Server Error: delete' })
      }
    }

    default:
      return res.status(405).json({ message: 'Method not allowed' })
  }
}
