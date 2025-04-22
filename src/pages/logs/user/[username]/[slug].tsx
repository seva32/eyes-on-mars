import React, { useState, useRef } from 'react'
import { GetServerSideProps } from 'next'
import prisma from '../../../../lib/prisma' // adjust if needed
import Link from 'next/link'
import Image from 'next/image'
import Layout from '../../../../components/layout/Layout'

type Props = {
  username: string
  title: string
  content: string
  createdAt: string
  slug: string
  photos: {
    id: string
    imgSrc: string
    rover: string
    sol: number
  }[]
}

export default function LogDetailPage({
  username,
  title,
  content,
  createdAt,
  photos,
  slug,
}: Props) {
  const [isDeleting, setIsDeleting] = useState(false)
  const deleteTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  const handleDelete = async () => {
    const confirm = window.confirm(
      `Are you sure you want to delete "${title}"?`,
    )
    if (!confirm) return

    setIsDeleting(true)

    deleteTimeoutRef.current = setTimeout(async () => {
      try {
        const res = await fetch('/api/logs', {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ slug }),
        })

        if (res.ok) {
          alert('Log deleted successfully')
          window.location.href = `/logs/user/${username}`
        } else {
          const data = await res.json()
          alert(data.message || 'Error deleting log')
        }
      } catch (err) {
        console.error('Delete failed', err)
        alert('Something went wrong')
      } finally {
        setIsDeleting(false)
      }
    }, 3000)
  }

  const handleUndo = () => {
    if (deleteTimeoutRef.current) {
      clearTimeout(deleteTimeoutRef.current)
      deleteTimeoutRef.current = null
      setIsDeleting(false)
      alert('Delete action cancelled')
    }
  }

  return (
    <Layout>
      <Link href={`/logs/user/${username}`}>
        <span className="text-sm text-blue-500 hover:underline">
          &larr; Back to all logs
        </span>
      </Link>

      <h1 className="text-3xl font-bold mt-4 text-white">{title}</h1>
      <p className="text-sm text-gray-500 mb-6">
        {new Date(createdAt).toLocaleDateString()}
      </p>
      <div className="flex justify-between items-center absolute top-0 right-0 mt-40 mr-10">
        <button
          onClick={handleDelete}
          disabled={isDeleting}
          className="text-red-500 hover:underline disabled:opacity-50"
        >
          {isDeleting ? 'Deleting...' : 'Delete'}
        </button>
        {isDeleting && (
          <button
            onClick={handleUndo}
            className="text-blue-500 hover:underline ml-4"
          >
            Undo
          </button>
        )}
      </div>

      <div className="text-white whitespace-pre-line leading-relaxed">
        {content}
      </div>
      {photos.length > 0 && (
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4 text-white">
            Attached Photos
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {photos.map((photo) => (
              <div key={photo.id} className="border rounded overflow-hidden">
                <Image
                  src={photo.imgSrc}
                  alt={`Rover ${photo.rover}`}
                  className="w-full h-[300px] object-cover"
                  width={200}
                  height={200}
                />
                <div className="p-2 text-sm text-gray-600">
                  {photo.rover} – Sol {photo.sol}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const username = context.params?.username as string
  const slug = context.params?.slug as string

  const user = await prisma.user.findUnique({
    where: { username },
    select: { id: true },
  })

  if (!user) {
    return { notFound: true }
  }

  const log = await prisma.missionLog.findFirst({
    where: {
      slug,
      authorId: user.id,
    },
    include: {
      linkedPhotos: true,
    },
  })

  if (!log) {
    return { notFound: true }
  }

  return {
    props: {
      username,
      slug,
      title: log.title,
      content: log.content,
      createdAt: log.createdAt.toISOString(),
      photos: log.linkedPhotos.map((photo) => ({
        id: photo.id,
        imgSrc: photo.photoUrl,
        rover: photo.rover,
        sol: photo.sol,
      })),
    },
  }
}
