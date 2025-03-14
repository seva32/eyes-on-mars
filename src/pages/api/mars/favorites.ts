import { NextApiResponse } from 'next'
import { AppDataSource } from '../../../config/ormconfig'
import { FavoritePhoto } from '../../../entities/FavoritePhoto'
import { authMiddleware } from '../../../middleware/auth'
import { User } from '../../../entities/User'

export default async function handler(
  req: AuthenticatedRequest,
  res: NextApiResponse,
) {
  if (req.method === 'GET') {
    try {
      authMiddleware(req, res, async () => {
        const user = req.user as unknown as User
        const favorites = await AppDataSource.getRepository(FavoritePhoto).find(
          { where: { user } },
        )
        return res.status(200).json(favorites)
      })
    } catch {
      return res
        .status(500)
        .json({ message: 'Internal Server Error favorites' })
    }
  }

  res.status(405).json({ message: 'Method Not Allowed' })
}
