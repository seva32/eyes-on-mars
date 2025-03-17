import { NextApiResponse } from 'next'
// import { FavoritePhoto } from '../../../entities/FavoritePhoto'
import { authMiddleware } from '../../../middleware/auth'
// import { User } from '../../../entities/User'

export default async function handler(
  req: AuthenticatedRequest,
  res: NextApiResponse,
) {
  if (req.method === 'POST') {
    try {
      authMiddleware(req, res, async () => {
        const { photoUrl, rover, camera, sol } = req.body
        const user = req.user

        if (!photoUrl || !rover || !camera || !sol) {
          return res.status(400).json({ message: 'Missing required fields' })
        }

        const photo = { photoUrl, rover, camera, sol, user }
        photo.photoUrl = photoUrl
        photo.rover = rover
        photo.camera = camera
        photo.sol = sol
        photo.user = user

        // FavoritePhoto.save(photo)

        return res.status(201).json({ message: 'Photo saved successfully' })
      })
    } catch {
      return res
        .status(500)
        .json({ message: 'Internal Server Error: favorite' })
    }
  }

  res.status(405).json({ message: 'Method Not Allowed' })
}
