import { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../lib/prisma'
import { getServerSession } from 'next-auth/next'
import authOptions from '../auth/[...nextauth]'
import slugify from 'slugify'
import { Session } from 'next-auth'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const session: Session | null = await getServerSession(req, res, authOptions)

  if (!session?.user?.email) {
    return res.status(401).json({ message: 'Unauthorized' })
  }

  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
  })

  if (!user) {
    return res.status(401).json({ message: 'User not found' })
  }

  if (req.method === 'POST') {
    const { title, content, photoIds } = req.body

    if (!title || !content) {
      return res.status(400).json({ message: 'Title and content are required' })
    }

    const slugBase = slugify(title, { lower: true })

    const existingSlugs = await prisma.missionLog.findMany({
      where: {
        slug: {
          startsWith: slugBase,
        },
      },
      select: {
        slug: true,
      },
    })

    const slugSet = new Set(existingSlugs.map((log) => log.slug))
    let slug = slugBase
    let counter = 1

    while (slugSet.has(slug)) {
      slug = `${slugBase}-${counter++}`
    }

    const log = await prisma.missionLog.create({
      data: {
        title,
        content,
        slug,
        authorId: user.id,
        linkedPhotos: {
          connect: photoIds?.map((id: string) => ({ id })) || [],
        },
      },
    })

    return res.status(200).json({ username: user.username, slug, log })
  }

  if (req.method === 'DELETE') {
    const { slug } = req.body

    if (!slug) {
      return res.status(400).json({ message: 'Missing slug' })
    }

    const existingLog = await prisma.missionLog.findUnique({
      where: { slug },
    })

    if (!existingLog || existingLog.authorId !== user.id) {
      return res.status(403).json({ message: 'Not allowed to delete this log' })
    }

    await prisma.missionLog.delete({
      where: { slug },
    })

    return res.status(200).json({ message: 'Log deleted' })
  }

  return res.status(405).end()
}
