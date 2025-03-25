'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { Pagination } from 'eyes-on-mars-ds'

export interface Photo {
  id: number
  img_src: string
  sol: number
  earth_date: string
  camera: {
    name: string
    id: number
    rover_id: number
    full_name: string
  }
  rover: {
    id: number
    name: string
    landing_date: string
    launch_date: string
    status: string
  }
}

interface PhotoGridProps {
  photos: Photo[]
}

export function PhotoGrid({ photos }: PhotoGridProps) {
  const [imageSrc, setImageSrc] = useState<{ [key: number]: string }>({})
  const [currentPage, setCurrentPage] = useState(1)
  const pageSize = 8
  const paginatedPhotos = photos.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize,
  )

  const handleImageError = (id: number) => {
    setImageSrc((prev) => ({
      ...prev,
      [id]: 'https://res.cloudinary.com/seva32/image/upload/v1602337986/nyc_fdgbyd.png',
    }))
  }

  return (
    <>
      <div className="grid grid-cols-4 gap-4 max-md:grid-cols-2 max-sm:grid-cols-1">
        {paginatedPhotos.map((photo) => (
          <article
            key={photo.id}
            className="overflow-hidden rounded-xl bg-zinc-600"
          >
            <Image
              className="object-cover w-full h-[200px]"
              src={imageSrc[photo.id] || photo.img_src}
              alt={`Mars photo ${photo.id}`}
              width={150}
              height={150}
              onError={() => handleImageError(photo.id)}
            />
            <div className="p-4">
              <p className="text-sm text-gray-400">Photo ID: {photo.id}</p>
            </div>
          </article>
        ))}
      </div>
      <Pagination
        totalCount={photos.length}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
        className="mt-4 relative z-50"
      />
    </>
  )
}
