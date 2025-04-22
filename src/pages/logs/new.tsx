import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { GetServerSideProps } from 'next'
import prisma from '../../lib/prisma'
import { getSession } from 'next-auth/react'
import Image from 'next/image'
import Layout from '../../components/layout/Layout'
import type { IFavoritePhoto } from './../../entities/interfaces/IFavoritePhoto'

export default function NewLogPage({
  savedPhotos,
}: {
  savedPhotos: IFavoritePhoto[]
}) {
  const router = useRouter()
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [selectedPhotoIds, setSelectedPhotoIds] = useState<number[]>([])
  const [error, setError] = useState('')

  const togglePhoto = (id: number) => {
    setSelectedPhotoIds((prev) =>
      prev.includes(id) ? prev.filter((pid) => pid !== id) : [...prev, id],
    )
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    const res = await fetch('/api/logs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, content, photoIds: selectedPhotoIds }),
    })

    if (res.ok) {
      const { username, slug } = await res.json()
      router.push(`/logs/user/${username}/${slug}`)
    } else {
      const data = await res.json()
      setError(data.message || 'Something went wrong.')
    }
  }

  console.log('Saved Photos:', savedPhotos)

  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-6 text-white">
        Create a New Mission Log
      </h1>
      <div className="max-w-2xl mx-auto p-6">
        <h1 className="text-2xl font-bold mb-4 text-white">New Mission Log</h1>
        {error && <p className="text-red-600">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4 text-white">
          <div>
            <label className="block font-medium mb-1">Title</label>
            <input
              className="w-full border p-2 rounded"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Content</label>
            <textarea
              className="w-full border p-2 rounded h-40"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
            />
          </div>
          <div>
            <h2 className="font-semibold mb-2">Attach Saved Photos</h2>
            <div className="grid grid-cols-3 gap-4">
              {savedPhotos.map((photo) => (
                <label key={photo.id} className="block cursor-pointer">
                  <input
                    type="checkbox"
                    value={photo.id}
                    checked={selectedPhotoIds.includes(photo.id)}
                    onChange={() => togglePhoto(photo.id)}
                    className="mr-2"
                  />
                  <Image
                    src={photo.photoUrl}
                    alt="Rover photo"
                    className="w-full h-[300px] object-cover"
                    width={200}
                    height={200}
                  />
                  <div className="text-xs text-gray-600 mt-1">
                    {photo.rover} - Sol {photo.sol}
                  </div>
                </label>
              ))}
            </div>
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Save Log
          </button>
        </form>
      </div>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context)
  if (!session?.user?.email) {
    return { redirect: { destination: '/auth/signin', permanent: false } }
  }

  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
    select: {
      favoritePhotos: {
        select: {
          id: true,
          photoUrl: true,
          rover: true,
          sol: true,
        },
      },
    },
  })

  return {
    props: {
      savedPhotos: user?.favoritePhotos ?? [],
    },
  }
}
