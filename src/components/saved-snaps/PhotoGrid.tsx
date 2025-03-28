'use client'
import React, { useState } from 'react'
import PhotoCard from './PhotoCard'
import { Pagination } from 'eyes-on-mars-ds'
import { FavoritePhoto } from '../../entities/FavoritePhoto'

interface PhotoGridProps {
  photos: FavoritePhoto[]
}

export function PhotoGrid({ photos }: PhotoGridProps) {
  const [currentPage, setCurrentPage] = useState(1)
  const pageSize = 8
  const paginatedPhotos = photos.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize,
  )

  return (
    <>
      <section className="grid grid-cols-2 gap-6 max-md:grid-cols-1">
        {paginatedPhotos.map((photo) => (
          <PhotoCard
            key={photo.id}
            id={photo.id}
            image={photo.photoUrl}
            camera={photo.camera || 'Unknown'}
          />
        ))}
      </section>
      <section className="grid grid-cols-2 gap-6 max-md:grid-cols-1">
        <Pagination
          totalCount={photos.length}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
          className="mt-4 relative z-50"
        />
      </section>
    </>
  )
}
