'use client'
import * as React from 'react'
import { useState } from 'react'
import { RoverCard } from '../../components/common/RoverCard'
import { SearchControls } from '../../components/common/SearchControls'
import { CameraFilter } from '../../components/common/CameraFilter'
import { PhotoGrid } from '../../components/common/PhotoGrid'
import type { Photo } from '../../components/common/PhotoGrid'
import { LoadingSpinner } from '../../components/common/LoadingSpinner'
import Layout from '../../components/Layout'
import RoverRanges from '../../components/common/RoverRanges'

export default function MarsRoverExplorer() {
  const [selectedRover, setSelectedRover] = useState('')
  const [earthDate, setEarthDate] = useState('')
  const [solDay, setSolDay] = useState('')
  const [selectedCamera, setSelectedCamera] = useState('')
  const [photos, setPhotos] = useState<Photo[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const rovers = [
    {
      name: 'Curiosity',
      landingDate: 'Aug 6, 2012',
      image:
        'https://res.cloudinary.com/seva32/image/upload/v1742855141/uploads-eom/dgotkevm1ecxmzvgeqtb.png',
      image_fallback: 'https://placehold.co/400x300?text=Curiosity',
    },
    {
      name: 'Opportunity',
      landingDate: 'Jan 25, 2004',
      image:
        'https://res.cloudinary.com/seva32/image/upload/v1742855141/uploads-eom/zdgiw32renqj3vknpypu.png',
      image_fallback: 'https://placehold.co/400x300?text=Opportunity',
    },
    {
      name: 'Spirit',
      landingDate: 'Jan 4, 2004',
      image:
        'https://res.cloudinary.com/seva32/image/upload/v1742855141/uploads-eom/akgb6pu9l1irwqzhycys.png',
      image_fallback: 'https://placehold.co/400x300?text=Spirit',
    },
  ]

  const cameras = [
    'FHAZ',
    'RHAZ',
    'MAST',
    'CHEMCAM',
    'MAHLI',
    'MARDI',
    'NAVCAM',
  ]

  const filterPhotos = async () => {
    if (!selectedRover || (!earthDate && !solDay)) {
      setPhotos([])
      return
    }
    setIsLoading(true)

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

  return (
    <Layout>
      <main className="flex flex-col p-8 w-screen bg-zinc-950 min-h-[screen] text-zinc-200">
        <div className="mx-auto w-full max-w-[1200px]">
          <h1 className="mb-8 text-3xl font-bold">Mars Rover Photo Explorer</h1>

          <section className="grid grid-cols-3 gap-4 mb-8 max-sm:grid-cols-1">
            {rovers.map((rover) => (
              <RoverCard
                key={rover.name}
                {...rover}
                isSelected={selectedRover === rover.name}
                onSelect={() => {
                  setSelectedRover(rover.name)
                  setPhotos([])
                  setEarthDate('')
                  setSolDay('')
                }}
              />
            ))}
          </section>

          {selectedRover && (
            <SearchControls
              earthDate={earthDate}
              setEarthDate={setEarthDate}
              solDay={solDay}
              setSolDay={setSolDay}
              onSearch={filterPhotos}
              isDisabled={searchDisabled}
            />
          )}

          {photos.length > 0 ? (
            <section className="mb-8">
              <CameraFilter
                cameras={cameras}
                selectedCamera={selectedCamera}
                onSelectCamera={setSelectedCamera}
              />
              <PhotoGrid photos={photos} />
            </section>
          ) : (
            <RoverRanges />
          )}

          {isLoading && <LoadingSpinner />}
        </div>
      </main>
    </Layout>
  )
}
