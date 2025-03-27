'use client'
import * as React from 'react'

interface RoverCardProps {
  image: string
  name: string
  landingDate: string
  isSelected: boolean
}

export function RoverCard({
  image,
  name,
  landingDate,
  isSelected,
}: RoverCardProps) {
  return (
    <article
      className={`flex overflow-hidden flex-col rounded-xl border-2 ${
        isSelected ? 'border-red-500' : 'border-black border-opacity-0'
      }`}
    >
      <img src={image} alt={name} className="w-full h-[200px] object-cover" />
      <div className="p-4 bg-zinc-900">
        <h2 className="mb-1 text-lg font-semibold text-zinc-200">{name}</h2>
        <p className="text-sm text-gray-400">Landing Date: {landingDate}</p>
      </div>
    </article>
  )
}
