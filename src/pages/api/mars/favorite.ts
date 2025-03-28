import { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../lib/prisma'
import { auth } from '../../../utils/auth'
import { getToken } from 'next-auth/jwt'

interface AuthenticatedRequest extends NextApiRequest {
  user: {
    id: string
  }
}

export default async function handler(
  req: AuthenticatedRequest,
  res: NextApiResponse,
) {
  const session = await auth(req, res)
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET })

  if (!session && !token) {
    return res.status(401).json({ message: 'Unauthorized' })
  }

  const userId = parseInt(session?.user?.id || token?.sub, 10)
  if (!userId) {
    return res.status(400).json({ message: 'Invalid user data' })
  }

  if (req.method === 'POST') {
    try {
      const { favoritePhotos } = req.body

      if (!Array.isArray(favoritePhotos) || favoritePhotos.length === 0) {
        return res.status(400).json({ message: 'Invalid request body' })
      }

      const data = favoritePhotos.map((photo) => ({
        photoUrl: photo.photoUrl,
        rover: photo.rover,
        camera: photo.camera,
        sol: photo.sol,
        rating: photo.rating,
        userId: userId,
      }))
      await prisma.favoritePhoto.createMany({
        data,
      })

      return res
        .status(200)
        .json({ data, message: 'Favorite photos saved successfully' })
    } catch (error) {
      console.error('Error saving favorite photos:', error)
      return res
        .status(500)
        .json({ message: 'Internal Server Error: favorite' })
    }
  }

  if (req.method === 'DELETE') {
    try {
      const { id } = req.body

      if (!id) {
        return res
          .status(400)
          .json({ message: 'ID is required in the request body' })
      }

      const deletedPhoto = await prisma.favoritePhoto.delete({
        where: {
          id: parseInt(id, 10),
        },
      })

      return res.status(200).json({
        data: deletedPhoto,
        message: 'Favorite photo deleted successfully',
      })
    } catch (error) {
      console.error('Error deleting favorite photo:', error)
      return res
        .status(500)
        .json({ message: 'Internal Server Error: delete favorite' })
    }
  }

  res.status(405).json({ message: 'Method Not Allowed' })
}
