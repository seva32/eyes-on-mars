'use client'
import * as React from 'react'
import Image from 'next/image'
import { usePhotoExplorer } from '../../contexts/photoExplorerContext'

interface RoverCardProps {
  image: string
  name: string
  landingDate: string
}

export function RoverCard({ image, name, landingDate }: RoverCardProps) {
  const {
    selectedRover,
    setSelectedRover,
    setPhotos,
    setEarthDate,
    setSolDay,
    setSearchPerformed,
    setSelectedCamera,
  } = usePhotoExplorer()
  const isSelected = selectedRover === name
  return (
    <article
      className={`flex cursor-pointer overflow-hidden flex-col rounded-xl border-2 ${
        isSelected ? 'border-red-500' : 'border-black border-opacity-0'
      }`}
      onClick={() => {
        setSelectedRover(name)
        setPhotos([])
        setEarthDate('')
        setSolDay('')
        setSearchPerformed(false)
        setSelectedCamera('')
      }}
    >
      <Image
        src={image}
        alt={name}
        width={200}
        height={200}
        className="w-full h-[200px] object-cover"
      />
      <div className="p-4 bg-zinc-900">
        <h2 className="mb-1 text-lg font-semibold text-zinc-200">{name}</h2>
        <p className="text-sm text-gray-400">Landing Date: {landingDate}</p>
      </div>
    </article>
  )
}
