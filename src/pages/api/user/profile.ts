import { NextApiResponse } from 'next'
import { authMiddleware } from '../../../middleware/auth'
import prisma from '../../../lib/prisma'

const handler = async (req: AuthenticatedRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    const user = req.user
    console.log('User: >>>>>>>>>>//////////', user)
    if (!user) {
      return res.status(401).json({ message: 'Unauthorized' })
    }

    const profile = await prisma.user.findUnique({
      where: { id: user.id },
      include: { profile: true, favoritePhotos: true },
    })

    console.log('antes: >>>>>>>>>>//////////')
    if (!profile) {
      return res.status(404).json({ message: 'Profile not found' })
    }

    console.log('despues: >>>>>>>>>>//////////')

    return res.status(200).json(profile)
  }

  res.status(405).json({ message: 'Method not allowed' })
}

export default authMiddleware(handler)
