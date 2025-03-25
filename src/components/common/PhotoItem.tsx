'use client'
import React, { useState, useContext } from 'react'
import Image from 'next/image'
import { FiMaximize2, FiCheckSquare, FiSquare } from 'react-icons/fi'
import { SelectionContext } from '../../contexts/selectionContext'

interface PhotoItemProps {
  photo: {
    id: number
    img_src: string
  }
}

function PhotoItem({ photo }: PhotoItemProps) {
  const [imageSrc, setImageSrc] = useState(photo.img_src)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { selectedPhotos, toggleSelect } = useContext(SelectionContext)

  const handleImageError = () => {
    setImageSrc(
      'https://res.cloudinary.com/seva32/image/upload/v1602337986/nyc_fdgbyd.png',
    )
  }

  const isSelected = selectedPhotos.has(photo.id)

  return (
    <>
      <article className="relative overflow-hidden rounded-xl bg-zinc-600">
        {/* Expand Icon */}
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

        {/* Select Icon */}
        <button
          type="button"
          className="absolute top-2 right-2 text-white bg-black/50 p-1 rounded-full cursor-pointer"
          onClick={(e) => {
            e.preventDefault()
            toggleSelect(photo.id)
          }}
        >
          {isSelected ? <FiCheckSquare size={20} /> : <FiSquare size={20} />}
        </button>

        <Image
          className="object-cover w-full h-[200px]"
          src={imageSrc}
          alt={`Mars photo ${photo.id}`}
          width={150}
          height={150}
          onError={handleImageError}
        />
        <div className="p-4">
          <p className="text-sm text-gray-400">Photo ID: {photo.id}</p>
        </div>
      </article>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="relative bg-black p-4 rounded-lg w-[450px] max-w-[75vw]">
            <button
              type="button"
              className="absolute -top-1 -right-1 text-white cursor-pointer rounded-full"
              onClick={() => setIsModalOpen(false)}
            >
              ✕
            </button>
            <Image
              className="w-full h-auto rounded"
              src={imageSrc}
              alt={`Mars photo ${photo.id}`}
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

export default React.memo(PhotoItem)
