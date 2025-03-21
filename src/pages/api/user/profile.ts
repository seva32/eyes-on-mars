import { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../../lib/prisma'
import { auth } from '../../../utils/auth'
import { getToken } from 'next-auth/jwt'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await auth(req, res)
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET })

  if (!session && !token) {
    return res.status(401).json({ message: 'Unauthorized' })
  }

  const userId = parseInt(session?.user?.id || token?.sub, 10)
  if (!userId) {
    return res.status(400).json({ message: 'Invalid user data' })
  }

  if (req.method === 'GET') {
    const profile = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        username: true,
        email: true,
        profile: {
          select: {
            id: true,
            avatarUrl: true,
            bio: true,
            planet: true,
          },
        },
        favoritePhotos: {
          select: {
            id: true,
            photoUrl: true,
            rover: true,
            camera: true,
            sol: true,
            rating: true,
          },
        },
      },
    })

    if (!profile) {
      return res.status(404).json({ message: 'Profile not found' })
    }

    return res.status(200).json(profile)
  } else if (
    req.method === 'POST' ||
    req.method === 'PUT' ||
    req.method === 'PATCH'
  ) {
    const { avatarUrl, bio, planet } = req.body

    try {
      const profile = await prisma.profile.upsert({
        where: { userId },
        update: { avatarUrl, bio, planet },
        create: {
          avatarUrl,
          bio,
          planet,
          user: { connect: { id: userId } },
        },
      })

      return res.status(200).json(profile)
    } catch (error) {
      return res.status(500).json({
        message: 'Profile update failed',
        details: error instanceof Error ? error.message : 'Unknown error',
      })
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' })
  }
}

export default handler
