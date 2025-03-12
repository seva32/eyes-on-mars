import { NextApiRequest, NextApiResponse } from 'next'
import { verifyToken, TokenPayload } from '../utils/jwt'

interface AuthenticatedRequest extends NextApiRequest {
  user?: TokenPayload
}

export const authMiddleware = (
  req: AuthenticatedRequest,
  res: NextApiResponse,
  next: () => void,
) => {
  const token = req.headers.authorization?.split(' ')[1]

  if (!token) {
    return res.status(401).json({ message: 'Authentication token is required' })
  }

  const user = verifyToken(token)

  if (!user) {
    return res.status(401).json({ message: 'Invalid or expired token' })
  }

  req.user = user
  next()
}
