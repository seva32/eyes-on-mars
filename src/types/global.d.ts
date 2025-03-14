import { NextApiRequest } from 'next'
import { TokenPayload } from '../utils/jwt'

declare global {
  interface AuthenticatedRequest extends NextApiRequest {
    user?: TokenPayload
  }
}

declare module 'swagger-ui-dist'
