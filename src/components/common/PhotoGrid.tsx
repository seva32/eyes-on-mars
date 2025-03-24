'use client'
import React from 'react'
// import Image from 'next/image'

interface Photo {
  id: number
  url: string
}

interface PhotoGridProps {
  photos: Photo[]
}

export function PhotoGrid({ photos }: PhotoGridProps) {
  return (
    <div className="grid grid-cols-4 gap-4 max-md:grid-cols-2 max-sm:grid-cols-1">
      {photos.map((photo) => (
        <article
          key={photo.id}
          className="overflow-hidden rounded-xl bg-zinc-900"
        >
          <img
            className="object-cover w-full h-[200px]"
            src={photo.url}
            alt={`Mars photo ${photo.id}`}
          />
          <div className="p-4">
            <p className="text-sm text-gray-400">Photo ID: {photo.id}</p>
          </div>
        </article>
      ))}
    </div>
  )
}
