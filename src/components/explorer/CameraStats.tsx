'use client'
import * as React from 'react'

interface CameraStatProps {
  name: string
  photos: number
  progress: number
}

function CameraStat({ name, photos, progress }: CameraStatProps) {
  return (
    <div className="p-4 rounded-xl bg-zinc-900">
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-base font-semibold text-zinc-200">{name}</h3>
        <span className="text-sm text-gray-400">{photos} photos</span>
      </div>
      <div className="relative h-1 rounded-full bg-zinc-800">
        <div
          className="absolute h-1 bg-red-500 rounded-full"
          style={{ width: `${progress}px` }}
        />
      </div>
    </div>
  )
}

export function CameraStats() {
  const cameras = [
    { name: 'FHAZ', photos: 3, progress: 32 },
    { name: 'RHAZ', photos: 1, progress: 11 },
    { name: 'MAST', photos: 5, progress: 53 },
    { name: 'CHEMCAM', photos: 3, progress: 32 },
    { name: 'MAHLI', photos: 2, progress: 21 },
    { name: 'MARDI', photos: 4, progress: 42 },
    { name: 'NAVCAM', photos: 6, progress: 63 },
  ]

  return (
    <section className="grid grid-cols-4 gap-4 mb-8 max-md:grid-cols-2 max-sm:grid-cols-1">
      {cameras.map((camera) => (
        <CameraStat
          key={camera.name}
          name={camera.name}
          photos={camera.photos}
          progress={camera.progress}
        />
      ))}
    </section>
  )
}
