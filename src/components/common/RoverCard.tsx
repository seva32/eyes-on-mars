'use client'
import * as React from 'react'

interface RoverCardProps {
  name: string
  landingDate: string
  image: string
  isSelected: boolean
  onSelect: () => void
}

export function RoverCard({
  name,
  landingDate,
  image,
  isSelected,
  onSelect,
}: RoverCardProps) {
  return (
    <article
      className="overflow-hidden relative rounded-xl cursor-pointer"
      onClick={onSelect}
      style={{
        border: isSelected ? '2px solid #FF4D4D' : '2px solid transparent',
      }}
    >
      <img
        src={image}
        alt={`${name} rover`}
        className="object-cover w-full rounded-t-2xl h-[200px]"
      />
      <div className="p-4 bg-zinc-900 h-full">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-sm text-gray-400">Landing Date: {landingDate}</p>
      </div>
    </article>
  )
}
