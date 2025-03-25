import React, { useContext } from 'react'
import { SelectionContext } from '../../contexts/selectionContext'
import type { Photo } from './PhotoGrid'

interface PhotoSelectionButtonProps {
  photos: Photo[]
}

function PhotoSelectionButton({ photos }: PhotoSelectionButtonProps) {
  const { selectedPhotos } = useContext(SelectionContext)

  const handleSaveSelectedPhotos = async () => {
    const selectedPhotoData = photos
      .filter((photo) => selectedPhotos.has(photo.id))
      .map((photo) => ({
        photoUrl: photo.img_src,
        rover: photo.rover.name,
        camera: photo.camera.name,
        sol: photo.sol,
        rating: 0,
      }))

    console.log('Selected Photos Data:', selectedPhotoData)

    try {
      const response = await fetch('/api/mars/favorite', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ favoritePhotos: selectedPhotoData }),
      })

      if (!response.ok) {
        throw new Error('Failed to save favorite photos')
      }

      const result = await response.json()
      console.log('Save result:', result)
    } catch (error) {
      console.error('Error saving favorite photos:', error)
    }
  }

  if (selectedPhotos.size === 0) {
    return null
  }

  return (
    <button
      type="button"
      className="cursor-pointer bg-red-500 text-white px-4 py-2 rounded-md mt-4"
      onClick={handleSaveSelectedPhotos}
    >
      Save photo selection
    </button>
  )
}

export default PhotoSelectionButton
