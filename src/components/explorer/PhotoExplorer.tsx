'use client'
import React from 'react'
import { RoverCard } from './RoverCard'
import { SearchFilters } from './SearchFilters'
import { CameraStats } from './CameraStats'
import { PhotoGrid } from './PhotoGrid'
import { LoadingSpinner } from './LoadingSpinner'
import { rovers } from './photoExplorer.constants'
import {
  PhotoExplorerProvider,
  usePhotoExplorer,
} from '../../contexts/photoExplorerContext'

function MarsRoverExplorer() {
  const {
    selectedRover,
    earthDate,
    solDay,
    setPhotos,
    setIsLoading,
    setSearchPerformed,
    photos,
    selectedCamera,
    searchPerformed,
    isLoading,
  } = usePhotoExplorer()

  const filterPhotos = async () => {
    if (!selectedRover || (!earthDate && !solDay)) {
      setPhotos([])
      return
    }
    setIsLoading(true)
    setSearchPerformed(true)

    try {
      const response = await fetch(
        `/api/mars/photos?rover=${selectedRover}&earth_date=${earthDate}&sol=${solDay}`,
      )
      const data = await response.json()

      if (Array.isArray(data) && data.length > 0) {
        setPhotos(data)
      } else {
        console.error('No photos found or invalid data format')
        setPhotos([])
      }
    } catch (error) {
      console.error('Error fetching photos', error)
      setPhotos([])
    } finally {
      setIsLoading(false)
    }
  }

  const searchDisabled = !selectedRover || (!earthDate && !solDay)

  if (searchDisabled && photos.length > 0) {
    setPhotos([])
  }

  const filteredPhotos = selectedCamera
    ? photos.filter((photo) => photo.camera.name === selectedCamera) || []
    : photos

  const noPhotosFound =
    selectedRover && searchPerformed && !searchDisabled && !isLoading

  const showCameraStats =
    selectedRover && (earthDate || solDay) && searchPerformed && !isLoading

  return (
    <main className="flex flex-col p-9 bg-zinc-950 min-h-[screen] max-md:p-6 max-sm:p-4">
      <h1 className="mb-8 text-3xl font-bold leading-10 text-zinc-200">
        Mars Rover Photo Explorer
      </h1>

      <section className="grid grid-cols-3 gap-4 mb-8 max-md:grid-cols-2 max-sm:grid-cols-1">
        {rovers.map((rover) => (
          <RoverCard
            key={rover.name}
            image={rover.image}
            name={rover.name}
            landingDate={rover.landingDate}
          />
        ))}
      </section>
      {selectedRover && <SearchFilters onSearch={filterPhotos} />}

      {showCameraStats && <CameraStats photos={photos} />}

      {filteredPhotos.length > 0 ? (
        <PhotoGrid photos={filteredPhotos} />
      ) : (
        noPhotosFound && (
          <p className="mb-4 text-xl font-semibold">
            No photos found, select a different{' '}
            {selectedCamera ? 'camera' : 'time or rover'}
          </p>
        )
      )}
      {isLoading && <LoadingSpinner />}
    </main>
  )
}

export default function PhotoExplorer() {
  return (
    <PhotoExplorerProvider>
      <MarsRoverExplorer />
    </PhotoExplorerProvider>
  )
}
