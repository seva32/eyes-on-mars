'use client'
import * as React from 'react'
import { useState } from 'react'
import { RoverCard } from '../../components/common/RoverCard'
import { SearchControls } from '../../components/common/SearchControls'
import { CameraFilter } from '../../components/common/CameraFilter'
import { PhotoGrid } from '../../components/common/PhotoGrid'
import { LoadingSpinner } from '../../components/common/LoadingSpinner'
import Layout from '../../components/Layout'

export default function MarsRoverExplorer() {
  const [selectedRover, setSelectedRover] = useState('')
  const [earthDate, setEarthDate] = useState('')
  const [solDay, setSolDay] = useState('')
  const [selectedCamera, setSelectedCamera] = useState('')
  const [photos, setPhotos] = useState<{ id: number; url: string }[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const rovers = [
    {
      name: 'Curiosity',
      landingDate: 'Aug 6, 2012',
      image: 'https://placehold.co/400x300?text=Curiosity',
    },
    {
      name: 'Opportunity',
      landingDate: 'Jan 25, 2004',
      image: 'https://placehold.co/400x300?text=Opportunity',
    },
    {
      name: 'Spirit',
      landingDate: 'Jan 4, 2004',
      image: 'https://placehold.co/400x300?text=Spirit',
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

  const filterPhotos = () => {
    if (!selectedRover || (!earthDate && !solDay)) return
    setIsLoading(true)
    setTimeout(() => {
      setPhotos(
        Array.from({ length: 8 }, (_, i) => ({
          id: i,
          url: `https://placehold.co/800x600?text=Mars+Photo+${i}`,
        })),
      )
      setIsLoading(false)
    }, 1000)
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
                onSelect={() => setSelectedRover(rover.name)}
              />
            ))}
          </section>

          <SearchControls
            earthDate={earthDate}
            setEarthDate={setEarthDate}
            solDay={solDay}
            setSolDay={setSolDay}
            onSearch={filterPhotos}
            isDisabled={!selectedRover || (!earthDate && !solDay)}
          />

          {photos.length > 0 && (
            <section className="mb-8">
              <CameraFilter
                cameras={cameras}
                selectedCamera={selectedCamera}
                onSelectCamera={setSelectedCamera}
              />
              <PhotoGrid photos={photos} />
            </section>
          )}

          {isLoading && <LoadingSpinner />}
        </div>
      </main>
    </Layout>
  )
}
