import { createContext, useState, useCallback, useContext } from 'react'

interface PhotoSelectionContextType {
  selectedPhotos: Set<number>
  setSelectedPhotos: React.Dispatch<React.SetStateAction<Set<number>>>
  toggleSelect: (id: number) => void
}

export const PhotoSelectionContext = createContext<PhotoSelectionContextType>({
  selectedPhotos: new Set<number>(),
  toggleSelect: () => {},
  setSelectedPhotos: () => {},
})

export function SelectionProvider({ children }: { children: React.ReactNode }) {
  const [selectedPhotos, setSelectedPhotos] = useState(new Set<number>())

  const toggleSelect = useCallback((id: number) => {
    setSelectedPhotos((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(id)) newSet.delete(id)
      else newSet.add(id)
      return newSet
    })
  }, [])

  return (
    <PhotoSelectionContext.Provider
      value={{ selectedPhotos, toggleSelect, setSelectedPhotos }}
    >
      {children}
    </PhotoSelectionContext.Provider>
  )
}

export const usePhotoSelectionContext = (): PhotoSelectionContextType => {
  const context = useContext(PhotoSelectionContext)
  if (!context) {
    throw new Error('useProfile must be used within a ProfileProvider')
  }
  return context
}
