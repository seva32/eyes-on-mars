'use client'
import * as React from 'react'
import { MdClear } from 'react-icons/md'

interface SearchControlsProps {
  earthDate: string
  setEarthDate: (date: string) => void
  solDay: string
  setSolDay: (day: string) => void
  onSearch: () => void
  isDisabled: boolean
}

export function SearchControls({
  earthDate,
  setEarthDate,
  solDay,
  setSolDay,
  onSearch,
  isDisabled,
}: SearchControlsProps) {
  const handleChangeEarthDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      const date = new Date(e.target.value)
      const formattedDate = date.toISOString().split('T')[0] // Format date as YYYY-MM-DD
      setEarthDate(formattedDate)
    } catch {}
  }

  const handleClearEarthDate = () => {
    setEarthDate('')
  }

  const handleClearSolDay = () => {
    setSolDay('')
  }

  return (
    <section className="flex gap-4 mb-8 max-sm:flex-col">
      <div className="flex-1 relative">
        <label htmlFor="earth-date" className="mb-2 text-sm">
          Earth Date
        </label>
        <input
          id="earth-date"
          type="date"
          className="p-3 w-full rounded-lg border border-solid bg-zinc-900 border-zinc-800 text-zinc-200"
          value={earthDate}
          onChange={handleChangeEarthDate}
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
      <div className="flex-1 relative">
        <label htmlFor="sol-day" className="mb-2 text-sm">
          Sol Day
        </label>
        <input
          id="sol-day"
          type="number"
          placeholder="Enter Sol day"
          className="p-3 w-full rounded-lg border border-solid bg-zinc-900 border-zinc-800 text-zinc-200"
          value={solDay}
          onChange={(e) => setSolDay(e.target.value)}
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
      <div className="flex items-end">
        <button
          className="px-4 py-3 font-semibold text-white bg-red-500 rounded-lg cursor-pointer"
          onClick={onSearch}
          style={{ opacity: isDisabled ? '0.5' : '1' }}
          disabled={isDisabled}
        >
          Search Photos
        </button>
      </div>
    </section>
  )
}
