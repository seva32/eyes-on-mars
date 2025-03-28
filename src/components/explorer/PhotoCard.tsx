'use client'
import React, { useState } from 'react'
import { usePhotoSelectionContext } from '../../contexts/photoSelectionContext'
import { FiMaximize2, FiCheckSquare, FiSquare } from 'react-icons/fi'
import Image from 'next/image'

interface PhotoCardProps {
  id: number
  image: string
  camera: string
}

function PhotoCard({ id, image, camera }: PhotoCardProps) {
  const [imageSrc, setImageSrc] = useState(image)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { selectedPhotos, toggleSelect } = usePhotoSelectionContext()

  const handleImageError = () => {
    setImageSrc(
      'https://res.cloudinary.com/seva32/image/upload/v1602337986/nyc_fdgbyd.png',
    )
  }

  const isSelected = selectedPhotos.has(id)

  return (
    <>
      <article className="overflow-hidden relative mb-6 rounded-xl">
        {/* Expand Action */}
        <button
          type="button"
          className="absolute top-2 left-2 text-white bg-black/50 p-1 rounded-full cursor-pointer"
          onClick={(e) => {
            e.preventDefault()
            setIsModalOpen(true)
          }}
        >
          <FiMaximize2 size={18} />
        </button>

        {/* Select Action */}
        <button
          type="button"
          className="absolute top-2 right-2 text-white bg-black/50 p-1 rounded-full cursor-pointer"
          onClick={(e) => {
            e.preventDefault()
            toggleSelect(id)
          }}
        >
          {isSelected ? <FiCheckSquare size={20} /> : <FiSquare size={20} />}
        </button>
        <Image
          src={imageSrc}
          alt={`Mars photo ${id}`}
          onError={handleImageError}
          className="w-full h-[300px] object-cover"
          width={200}
          height={200}
        />
        <div className="absolute inset-x-0 bottom-0 bg-[gradient-to-t]">
          <div className="flex justify-between items-center">
            <div className="text-sm text-white pl-2.5">Photo ID: {id}</div>
            <div className="px-3 py-1 text-xs bg-red-500 rounded text-zinc-200">
              {camera}
            </div>
          </div>
        </div>
      </article>
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="relative bg-black p-4 rounded-lg w-[500px] max-w-[75vw]">
            <button
              type="button"
              className="absolute -top-4 -right-4 text-white cursor-pointer rounded-full"
              onClick={() => setIsModalOpen(false)}
            >
              ✕
            </button>
            <Image
              className="w-full h-auto rounded"
              src={imageSrc}
              alt={`Mars photo ${id}`}
              width={450}
              height={450}
              onError={handleImageError}
            />
          </div>
        </div>
      )}
    </>
  )
}

export default React.memo(PhotoCard)
