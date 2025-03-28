'use client'
import React, { useState } from 'react'
import PhotoCard from './PhotoCard'
import { Photo } from './photoExplorer.constants'
import { Pagination } from 'eyes-on-mars-ds'
import { SelectionProvider } from '../../contexts/photoSelectionContext'
import PhotoSelectionButton from './PhotoSelectionButton'

interface PhotoGridProps {
  photos: Photo[]
}

export function PhotoGrid({ photos }: PhotoGridProps) {
  const [currentPage, setCurrentPage] = useState(1)
  const pageSize = 8
  const paginatedPhotos = photos.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize,
  )

  return (
    <SelectionProvider>
      <section className="grid grid-cols-2 gap-6 max-md:grid-cols-1">
        {paginatedPhotos.map((photo) => (
          <PhotoCard
            key={photo.id}
            id={photo.id}
            image={photo.img_src}
            camera={photo.camera.name}
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
        <PhotoSelectionButton photos={photos} />
      </section>
    </SelectionProvider>
  )
}
