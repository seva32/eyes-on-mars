import type { NextApiRequest, NextApiResponse } from 'next'
import cloudinary from '../../../lib/cloudinary'
import { getSession } from 'next-auth/react'
import multer from 'multer'
import fs from 'fs/promises'

// Disable automatic body parsing
export const config = {
  api: {
    bodyParser: false,
  },
}

// Configure Multer to store file temporarily
const upload = multer({ dest: 'uploads/' })

// Middleware to process file upload
const uploadMiddleware = upload.single('file')

function runMiddleware(
  req: NextApiRequest,
  res: NextApiResponse,
  fn: (
    req: NextApiRequest,
    res: NextApiResponse,
    callback: (result: any) => void,
  ) => void,
) {
  return new Promise<void>((resolve, reject) => {
    fn(req, res, (result: any) =>
      result instanceof Error ? reject(result) : resolve(result),
    )
  })
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' })
  }

  const session = await getSession({ req })
  if (!session) {
    return res.status(401).json({ error: 'Unauthorized' })
  }

  let filePath: string | undefined
  try {
    await runMiddleware(req, res, uploadMiddleware)

    filePath = (req as any).file?.path
    if (!filePath) {
      throw new Error('No file uploaded')
    }

    console.log('File path:', filePath)

    const result = await cloudinary.uploader.upload(filePath, {
      folder: 'uploads-eom',
    })

    return res.status(200).json({ url: result.secure_url })
  } catch (error: any) {
    console.error('Upload failed:', error)
    return res
      .status(500)
      .json({ error: 'Upload failed', details: error.message })
  } finally {
    if (filePath && filePath.startsWith('uploads/') && fs.stat(filePath)) {
      await fs.unlink(filePath)
    }
  }
}
