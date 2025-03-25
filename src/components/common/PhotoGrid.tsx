'use client'
import React, { useState } from 'react'
import PhotoItem from './PhotoItem'
import { Pagination } from 'eyes-on-mars-ds'
import { SelectionProvider } from '../../contexts/selectionContext'

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

  const handleSaveSelectedPhotos = (selectedPhotos) => {
    console.log('Selected Photos:', selectedPhotos)
  }

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
      <button
        type="button"
        className="absolute right-10 top-10 text-zinc-200 cursor-pointer"
        onClick={handleSaveSelectedPhotos}
      >
        Save
      </button>
    </SelectionProvider>
  )
}
