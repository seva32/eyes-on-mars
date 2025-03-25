import { createContext, useState, useCallback } from 'react'

interface SelectionContextType {
  selectedPhotos: Set<number>
  toggleSelect: (id: number) => void
}

export const SelectionContext = createContext<SelectionContextType>({
  selectedPhotos: new Set<number>(),
  toggleSelect: () => {},
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
    <SelectionContext.Provider value={{ selectedPhotos, toggleSelect }}>
      {children}
    </SelectionContext.Provider>
  )
}
