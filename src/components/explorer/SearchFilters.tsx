'use client'
import * as React from 'react'
import { useState } from 'react'
import { MdClear, MdInfoOutline } from 'react-icons/md'
import { usePhotoExplorer } from '../../contexts/photoExplorerContext'
import { rovers } from './photoExplorer.constants'
import RoverRanges from './RoverRanges'
import { Button } from 'eyes-on-mars-ds'

interface SearchFiltersProps {
  onSearch: () => void
}

export function SearchFilters({ onSearch }: SearchFiltersProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [activeTab, setActiveTab] = useState<'earthDate' | 'solDay'>(
    'earthDate',
  )
  const {
    earthDate,
    setEarthDate,
    solDay,
    setSolDay,
    selectedRover,
    setSearchPerformed,
  } = usePhotoExplorer()

  const handleChangeEarthDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      const date = new Date(e.target.value)
      const formattedDate = date.toISOString().split('T')[0]
      setEarthDate(formattedDate)
      setSolDay('')
      setSearchPerformed(false)
    } catch {}
  }

  const handleChangeSolDay = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSolDay(e.target.value)
    setEarthDate('')
    setSearchPerformed(false)
  }

  const handleClearEarthDate = () => {
    setEarthDate('')
  }

  const handleClearSolDay = () => {
    setSolDay('')
  }

  const maxSol = rovers[selectedRover]?.maxSol || 0
  const start = rovers[selectedRover]?.startDate || ''
  const end = rovers[selectedRover]?.endDate || ''
  const isDisabled = !selectedRover || (!earthDate && !solDay)

  return (
    <section className="flex flex-col gap-4 mb-8 w-96 m-auto">
      <div className="flex gap-1">
        <Button
          className="flex-1"
          onClick={() => {
            handleClearSolDay()
            setActiveTab('earthDate')
          }}
          variant={activeTab === 'earthDate' ? 'filled' : 'outline'}
        >
          Earth Date
        </Button>
        <Button
          className="flex-1"
          onClick={() => {
            handleClearEarthDate()
            setActiveTab('solDay')
          }}
          variant={activeTab === 'solDay' ? 'filled' : 'outline'}
        >
          Sol Day
        </Button>
      </div>

      {activeTab === 'earthDate' && (
        <div className="flex-1 relative">
          <label htmlFor="earth-date" className="mb-2 text-sm text-zinc-200">
            Earth Date
          </label>
          <input
            id="earth-date"
            type="date"
            className="p-3 w-full rounded-lg border border-solid bg-zinc-900 border-zinc-800 text-zinc-200"
            value={earthDate}
            onChange={handleChangeEarthDate}
            min={start}
            max={end || new Date().toISOString().split('T')[0]}
          />
          {earthDate && (
            <button
              type="button"
              className="absolute right-10 top-10 text-zinc-200 cursor-pointer"
              onClick={handleClearEarthDate}
            >
              <MdClear />
            </button>
          )}
        </div>
      )}

      {activeTab === 'solDay' && (
        <div className="flex-1 relative">
          <label htmlFor="sol-day" className="mb-2 text-sm text-zinc-200">
            Sol Day
          </label>
          <input
            id="sol-day"
            type="number"
            min="0"
            max={maxSol}
            placeholder="Enter Sol day"
            className="p-3 w-full rounded-lg border border-solid bg-zinc-900 border-zinc-800 text-zinc-200"
            value={solDay}
            onChange={handleChangeSolDay}
          />
          {solDay && (
            <button
              type="button"
              className="absolute right-10 top-10 text-zinc-200 cursor-pointer"
              onClick={handleClearSolDay}
            >
              <MdClear />
            </button>
          )}
        </div>
      )}

      <div className="relative flex items-center justify-center">
        <button
          className="py-2 px-4 font-semibold text-zinc-200 bg-red-500 rounded-lg cursor-pointer"
          onClick={onSearch}
          style={{ opacity: isDisabled ? '0.5' : '1' }}
          disabled={isDisabled}
        >
          Search Photos
        </button>
        <button
          className="absolute border-none bg-transparent right-0 cursor-pointer"
          onClick={() => setIsModalOpen(true)}
        >
          <MdInfoOutline
            className="text-red-500 cursor-pointer text-2xl"
            title="Search photos based on the selected rover and date"
          />
        </button>
      </div>

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
            <RoverRanges />
          </div>
        </div>
      )}
    </section>
  )
}
