import { NextApiRequest, NextApiResponse } from 'next'
import bcrypt from 'bcryptjs'
import { AppDataSource } from '@/config/ormconfig'
import { User } from '@/entities/User'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'POST') {
    const { username, password, email } = req.body

    if (!username || !password) {
      return res
        .status(400)
        .json({ message: 'Username and password are required' })
    }

    const existingUser = await AppDataSource.getRepository(User).findOne({
      where: { username },
    })
    if (existingUser) {
      return res.status(400).json({ message: 'Username already exists' })
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const user = new User()
    user.username = username
    user.password = hashedPassword
    user.email = email

    await AppDataSource.getRepository(User).save(user)

    return res.status(201).json({ message: 'User registered successfully' })
  }

  res.status(405).json({ message: 'Method not allowed' })
}
