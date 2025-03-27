'use client'
import * as React from 'react'
import { RoverCard } from './RoverCard'
import { SearchFilters } from './SearchFilters'
import { CameraStats } from './CameraStats'
import { PhotoGrid } from './PhotoGrid'
import { Pagination } from './Pagination'

export default function MarsRoverExplorer() {
  return (
    <main className="flex flex-col p-9 bg-zinc-950 min-h-[screen] max-md:p-6 max-sm:p-4">
      <h1 className="mb-8 text-3xl font-bold leading-10 text-zinc-200">
        Mars Rover Photo Explorer
      </h1>

      <section className="grid grid-cols-3 gap-4 mb-8 max-md:grid-cols-2 max-sm:grid-cols-1">
        <RoverCard
          image="https://cdn.builder.io/api/v1/image/assets/TEMP/9c53e3cba4242f422122b0fdc0d0b61e0ae865cc"
          name="Curiosity"
          landingDate="Aug 6, 2012"
          isSelected={true}
        />
        <RoverCard
          image="https://cdn.builder.io/api/v1/image/assets/TEMP/21d4d1b1bbf8d389750975fdc59ff363a7f2effe"
          name="Opportunity"
          landingDate="Jan 25, 2004"
          isSelected={false}
        />
        <RoverCard
          image="https://cdn.builder.io/api/v1/image/assets/TEMP/74b79ac4bff43afec5860f41fffe580a001319a6"
          name="Spirit"
          landingDate="Jan 4, 2004"
          isSelected={false}
        />
      </section>

      <SearchFilters />
      <CameraStats />
      <PhotoGrid />
      <Pagination currentPage={1} totalPages={3} />
    </main>
  )
}
