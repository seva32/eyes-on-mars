'use client'
import React, { createContext, useContext, useState } from 'react'
import type { ReactNode } from 'react'
import type { Photo } from '../components/explorer/photoExplorer.constants'

interface PhotoExplorerContextProps {
  selectedRover: string
  setSelectedRover: React.Dispatch<React.SetStateAction<string>>
  earthDate: string
  setEarthDate: React.Dispatch<React.SetStateAction<string>>
  solDay: string
  setSolDay: React.Dispatch<React.SetStateAction<string>>
  selectedCamera: string
  setSelectedCamera: React.Dispatch<React.SetStateAction<string>>
  photos: Photo[]
  setPhotos: React.Dispatch<React.SetStateAction<Photo[]>>
  isLoading: boolean
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
  searchPerformed: boolean
  setSearchPerformed: React.Dispatch<React.SetStateAction<boolean>>
}

const PhotoExplorerContext = createContext<
  PhotoExplorerContextProps | undefined
>(undefined)

export const PhotoExplorerProvider = ({
  children,
}: {
  children: ReactNode
}) => {
  const [selectedRover, setSelectedRover] = useState('')
  const [earthDate, setEarthDate] = useState('')
  const [solDay, setSolDay] = useState('')
  const [selectedCamera, setSelectedCamera] = useState('')
  const [photos, setPhotos] = useState<Photo[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [searchPerformed, setSearchPerformed] = useState(false)

  const contextValue = React.useMemo(
    () => ({
      selectedRover,
      setSelectedRover,
      earthDate,
      setEarthDate,
      solDay,
      setSolDay,
      selectedCamera,
      setSelectedCamera,
      photos,
      setPhotos,
      isLoading,
      setIsLoading,
      searchPerformed,
      setSearchPerformed,
    }),
    [
      selectedRover,
      earthDate,
      solDay,
      selectedCamera,
      photos,
      isLoading,
      searchPerformed,
      setSelectedRover,
    ],
  )

  return (
    <PhotoExplorerContext.Provider value={contextValue}>
      {children}
    </PhotoExplorerContext.Provider>
  )
}

export const usePhotoExplorer = () => {
  const context = useContext(PhotoExplorerContext)
  if (!context) {
    throw new Error(
      'usePhotoExplorer must be used within a PhotoExplorerProvider',
    )
  }
  return context
}
