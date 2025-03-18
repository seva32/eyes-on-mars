import { NextApiResponse } from 'next'
// import { FavoritePhoto } from '../../../entities/FavoritePhoto'
// import { authMiddleware } from '../../../middleware/auth'

export default async function handler(
  req: AuthenticatedRequest,
  res: NextApiResponse,
) {
  if (req.method === 'GET') {
    try {
      // authMiddleware(req, res, async () => {
      //   // const favorites = FavoritePhoto.find
      //   return res.status(200).json({ message: 'Favorites' })
      // })
    } catch {
      return res
        .status(500)
        .json({ message: 'Internal Server Error favorites' })
    }
  }

  res.status(405).json({ message: 'Method Not Allowed' })
}
