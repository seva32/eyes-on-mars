import type { NextApiRequest, NextApiResponse } from 'next'
import cloudinary from '../../../lib/cloudinary'
import { getSession } from 'next-auth/react'
import multer from 'multer'
import fs from 'fs/promises'
import { IncomingMessage, ServerResponse } from 'http'
import { Request as ExpressRequest, Response as ExpressResponse } from 'express'

export const config = {
  api: {
    bodyParser: false,
  },
}

const upload = multer({ dest: 'uploads/' })

type MulterNextApiRequest = NextApiRequest &
  ExpressRequest & { file?: Express.Multer.File }

const uploadMiddleware = upload.single('file')

function runMiddleware(
  req: IncomingMessage & ExpressRequest,
  res: ServerResponse & ExpressResponse,
  fn: (
    req: ExpressRequest,
    res: ExpressResponse,
    next: (error?: unknown) => void,
  ) => void,
): Promise<void> {
  return new Promise((resolve, reject) => {
    fn(req as ExpressRequest, res as ExpressResponse, (error?: unknown) => {
      if (error) {
        reject(error)
      } else {
        resolve()
      }
    })
  })
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method Not Allowed' })
    return
  }

  const session = await getSession({ req })
  if (!session) {
    res.status(401).json({ error: 'Unauthorized' })
    return
  }

  const multerReq = req as MulterNextApiRequest
  let filePath: string | undefined

  try {
    const parsedReq = req as NextApiRequest & ExpressRequest
    const parsedRes = res as NextApiResponse & ExpressResponse
    await runMiddleware(parsedReq, parsedRes, uploadMiddleware)

    filePath = multerReq.file?.path
    if (!filePath) {
      throw new Error('No file uploaded')
    }

    const result = await cloudinary.uploader.upload(filePath, {
      folder: 'uploads-eom',
    })

    res.status(200).json({ url: result.secure_url })
  } catch (error) {
    res
      .status(500)
      .json({ error: 'Upload failed', details: (error as Error).message })
  } finally {
    if (filePath && filePath.startsWith('uploads/')) {
      try {
        await fs.stat(filePath)
        await fs.unlink(filePath)
      } catch (err) {
        console.error('Failed to delete file:', err)
      }
    }
  }
}
