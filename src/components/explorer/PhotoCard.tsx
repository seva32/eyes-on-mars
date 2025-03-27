'use client'
import * as React from 'react'

interface PhotoCardProps {
  id: number
  image: string
  camera: string
}

export function PhotoCard({ id, image, camera }: PhotoCardProps) {
  return (
    <article className="overflow-hidden relative mb-6 rounded-xl">
      <img
        src={image}
        alt={`Mars Photo ${id}`}
        className="w-full h-[300px] object-cover"
      />
      <div className="absolute inset-x-0 bottom-0 bg-[gradient-to-t]">
        <div className="flex justify-between items-center">
          <div className="text-sm text-white">Photo ID: {id}</div>
          <div className="px-3 py-1 text-xs bg-red-500 rounded text-zinc-200">
            {camera}
          </div>
        </div>
      </div>
    </article>
  )
}
