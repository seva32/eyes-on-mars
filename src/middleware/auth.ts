import { NextApiRequest, NextApiResponse } from 'next'
import { verifyToken, TokenPayload } from '../utils/jwt'

interface AuthenticatedRequest extends NextApiRequest {
  user?: TokenPayload
}

export const authMiddleware = (
  handler: (req: AuthenticatedRequest, res: NextApiResponse) => void,
) => {
  return async (req: AuthenticatedRequest, res: NextApiResponse) => {
    const token = req.headers.authorization?.split(' ')[1]

    if (!token) {
      return res
        .status(401)
        .json({ message: 'Authentication token is required' })
    }

    const user = verifyToken(token)

    if (!user) {
      return res.status(401).json({ message: 'Invalid or expired token' })
    }

    req.user = user
    return handler(req, res)
  }
}
