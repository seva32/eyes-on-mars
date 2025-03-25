'use client'
import React, { useState } from 'react'
import PhotoItem from './PhotoItem'
import { Pagination } from 'eyes-on-mars-ds'
import { SelectionProvider } from '../../contexts/selectionContext'
import PhotoSelectionButton from './PhotoSelectionButton'

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
  const [currentPage, setCurrentPage] = useState(1)
  const pageSize = 8
  const paginatedPhotos = photos.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize,
  )

  return (
    <SelectionProvider>
      <div className="grid grid-cols-4 gap-4 max-md:grid-cols-2 max-sm:grid-cols-1">
        {paginatedPhotos.map((photo) => (
          <PhotoItem key={photo.id} photo={photo} />
        ))}
      </div>
      <Pagination
        totalCount={photos.length}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
        className="mt-4 relative z-50"
      />
      <PhotoSelectionButton photos={photos} />
    </SelectionProvider>
  )
}
