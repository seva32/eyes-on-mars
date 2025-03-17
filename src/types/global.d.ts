import { NextApiRequest } from 'next'
import { TokenPayload } from '../utils/jwt'
import { PrismaClient } from '@prisma/client'

declare global {
  interface AuthenticatedRequest extends NextApiRequest {
    user?: TokenPayload
  }

  const prisma: PrismaClient | undefined
}
