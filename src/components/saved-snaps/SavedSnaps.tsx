'use client'
import React, { useEffect, useState } from 'react'
import { PhotoGrid } from './PhotoGrid'
import { LoadingSpinner } from '../common/LoadingSpinner'
import { useSession } from 'next-auth/react'
import { FavoritePhoto } from '../../entities/FavoritePhoto'

function SavedSnaps() {
  const { status } = useSession()
  const [isLoading, setIsLoading] = useState(false)
  const [photos, setPhotos] = useState<FavoritePhoto[]>([])

  useEffect(() => {
    if (status === 'authenticated') {
      setIsLoading(true)
      fetch('/api/user/profile')
        .then((res) => res.json())
        .then((data) => {
          setPhotos(data.favoritePhotos || [])
        })
        .catch((error) => {
          console.error('Error fetching profile:', error)
        })
        .finally(() => {
          setIsLoading(false)
        })
    }
  }, [status])

  if (status === 'unauthenticated') {
    return null
  }

  if (isLoading) {
    return <LoadingSpinner />
  }

  if (photos.length === 0) {
    return (
      <div className="flex items-center justify-center w-full h-full p-4 text-lg text-zinc-200">
        No saved snaps yet. Start exploring the Mars rover photos!
      </div>
    )
  }

  return (
    <main className="flex flex-col p-9 bg-zinc-950 min-h-[screen] max-md:p-6 max-sm:p-4">
      <h1 className="mb-8 text-3xl font-bold leading-10 text-zinc-200">
        Saved Snaps
      </h1>

      <PhotoGrid photos={photos} />
      {isLoading && <LoadingSpinner />}
    </main>
  )
}

export default SavedSnaps
