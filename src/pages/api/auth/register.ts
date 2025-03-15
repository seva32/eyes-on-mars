import { NextApiRequest, NextApiResponse } from 'next'
import bcrypt from 'bcryptjs'
import { initializeDataSource } from '../../../config/data-source'
import { User } from '../../../entities/User'

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

    const AppDataSource = await initializeDataSource()

    const existingUser = await AppDataSource.getRepository(User).findOne({
      where: [{ username: username || email }, { email }],
    })
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' })
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const user = new User()
    user.username = username || email
    user.password = hashedPassword
    user.email = email

    await AppDataSource.getRepository(User).save(user)

    return res.status(201).json({ message: 'User registered successfully' })
  }

  res.status(405).json({ message: 'Method not allowed' })
}
