'use client'
import * as React from 'react'

interface CameraFilterProps {
  cameras: string[]
  selectedCamera: string
  onSelectCamera: (camera: string) => void
}

export function CameraFilter({
  cameras,
  selectedCamera,
  onSelectCamera,
}: CameraFilterProps) {
  return (
    <div className="flex overflow-x-auto gap-2 py-2 mb-6">
      {cameras.map((camera) => (
        <button
          key={camera}
          className="px-4 py-2 rounded-md"
          onClick={() => onSelectCamera(camera)}
          style={{
            backgroundColor: selectedCamera === camera ? '#FF4D4D' : '#1A1A1F',
            color: selectedCamera === camera ? '#fff' : '#E5E5E7',
          }}
        >
          {camera}
        </button>
      ))}
    </div>
  )
}
