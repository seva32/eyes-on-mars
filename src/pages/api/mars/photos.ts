import { NextApiRequest, NextApiResponse } from 'next'
import { getServerSession } from 'next-auth/next'
import authOptions from '../auth/[...nextauth]'

const NASA_API_URL = process.env.NEXT_PUBLIC_NASA_API_URL
const API_KEY = process.env.NEXT_PUBLIC_NASA_API_KEY

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const session = await getServerSession(req, res, authOptions)

  if (!session) {
    return res.status(401).json({ message: 'Unauthorized' })
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method Not Allowed' })
  }

  const { sol = '1000', camera = '', rover = 'curiosity' } = req.query // Default sol (Mars day) is 1000

  try {
    const url = `${NASA_API_URL}/${rover}/photos?sol=${sol}&camera=${camera}&api_key=${API_KEY}`
    const response = await fetch(url)
    const data = await response.json()

    if (!response.ok) {
      return res
        .status(response.status)
        .json({ message: 'Error fetching Mars photos' })
    }

    return res.status(200).json(data.photos)
  } catch {
    return res.status(500).json({ message: 'Internal Server Error' })
  }
}
