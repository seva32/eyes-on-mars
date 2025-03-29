'use client'
import React, { createContext, useContext, useState } from 'react'
import type { ReactNode } from 'react'
import { FavoritePhoto } from '../entities/FavoritePhoto'

interface SavedSnapsContextProps {
  photos: FavoritePhoto[]
  deletePhoto: (id: number) => Promise<void>
  setPhotos: React.Dispatch<React.SetStateAction<FavoritePhoto[]>>
}

const SavedSnapsContext = createContext<SavedSnapsContextProps | undefined>(
  undefined,
)

export const SavedSnapsProvider = ({ children }: { children: ReactNode }) => {
  const [photos, setPhotos] = useState<FavoritePhoto[]>([])

  const deletePhoto = async (id: number) => {
    try {
      const response = await fetch('/api/mars/favorite', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id }),
      })

      if (!response.ok) {
        throw new Error('Failed to delete favorite photo')
      }

      await response.json()
      setPhotos((prevPhotos) => prevPhotos.filter((photo) => photo.id !== id))
    } catch (error) {
      console.error('Error deleting favorite photo:', error)
    }
  }

  return (
    <SavedSnapsContext.Provider value={{ photos, setPhotos, deletePhoto }}>
      {children}
    </SavedSnapsContext.Provider>
  )
}

export const useSavedSnaps = () => {
  const context = useContext(SavedSnapsContext)
  if (!context) {
    throw new Error('useSavedPhotos must be used within a SavedPhotosProvider')
  }
  return context
}
