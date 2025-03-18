import { NextApiResponse } from 'next'
import { getToken, JWT } from 'next-auth/jwt'
import prisma from '../../../lib/prisma'

const handler = async (req: AuthenticatedRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    const token: JWT & { user?: { id: number } } = await getToken({ req })
    if (!token) {
      return res.status(401).json({ message: 'Unauthorized' })
    }

    const userId = token.user?.id || parseInt(token.sub, 10)

    if (!userId) {
      return res.status(400).json({ message: 'Invalid user data' })
    }

    const profile = await prisma.user.findUnique({
      where: { id: userId },
      include: { profile: true, favorite_photo: true },
    })

    if (!profile) {
      return res.status(404).json({ message: 'Profile not found' })
    }

    return res.status(200).json(profile)
  }

  res.status(405).json({ message: 'Method not allowed' })
}

export default handler
