'use client'
import * as React from 'react'
import { Photo } from './photoExplorer.constants'
import { usePhotoExplorer } from '../../contexts/photoExplorerContext'

interface CameraStatProps {
  name: string
  photos: number
  progress: number
}

interface CameraStatsProps {
  photos: Photo[]
}

function CameraStat({ name, photos, progress }: CameraStatProps) {
  const { setSelectedCamera, selectedCamera } = usePhotoExplorer()
  return (
    <div
      className="p-4 rounded-xl bg-zinc-900 cursor-pointer"
      onClick={() => setSelectedCamera(name)}
      style={{
        border: selectedCamera === name ? '3px solid #FF4D4D' : 'none',
      }}
    >
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-base font-semibold text-zinc-200">{name}</h3>
        <span className="text-sm text-gray-400">{photos} photos</span>
      </div>
      <div className="relative h-1 rounded-full bg-zinc-800">
        <div
          className="absolute h-1 bg-red-500 rounded-full"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  )
}

export function CameraStats({ photos }: CameraStatsProps) {
  const cameras = photos.reduce((acc: CameraStatProps[], photo) => {
    const cameraName = photo.camera.name
    const existingCamera = acc.find((camera) => camera.name === cameraName)

    if (existingCamera) {
      existingCamera.photos += 1
    } else {
      acc.push({ name: cameraName, photos: 1, progress: 0 })
    }

    return acc
  }, [])

  return (
    <section className="grid grid-cols-4 gap-4 mb-8 max-md:grid-cols-2 max-sm:grid-cols-1">
      {cameras.map((camera) => (
        <CameraStat
          key={camera.name}
          name={camera.name}
          photos={camera.photos}
          progress={(camera.photos / photos.length) * 100}
        />
      ))}
    </section>
  )
}
