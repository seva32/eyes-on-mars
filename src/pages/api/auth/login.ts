import { NextApiRequest, NextApiResponse } from 'next'
import bcrypt from 'bcryptjs'
import { AppDataSource } from '../../../config/ormconfig'
import { User } from '../../../entities/User'
import { generateToken } from '../../../utils/jwt'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'POST') {
    const { username, password, email } = req.body

    if (!username || !password || !email) {
      return res
        .status(400)
        .json({ message: 'Username, password and email are required' })
    }

    const user = await AppDataSource.getRepository(User).findOne({
      where: { username },
    })
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' })
    }

    const isPasswordValid = await bcrypt.compare(password, user.password)
    if (!isPasswordValid) {
      return res.status(400).json({ message: 'Invalid credentials to login' })
    }

    const token = generateToken(user.id)

    return res.status(200).json({ token })
  }

  res.status(405).json({ message: 'Method not allowed' })
}
