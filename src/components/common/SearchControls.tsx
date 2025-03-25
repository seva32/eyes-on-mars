'use client'
import * as React from 'react'
import { useState } from 'react'
import { MdClear } from 'react-icons/md'

interface SearchControlsProps {
  earthDate: string
  setEarthDate: (date: string) => void
  solDay: string
  setSolDay: (day: string) => void
  onSearch: () => void
  isDisabled: boolean
  maxSol?: number
  start?: string
  end?: string
}

export function SearchControls({
  earthDate,
  setEarthDate,
  solDay,
  setSolDay,
  onSearch,
  isDisabled,
  maxSol,
  start,
  end,
}: SearchControlsProps) {
  const [activeTab, setActiveTab] = useState<'earthDate' | 'solDay'>(
    'earthDate',
  )

  const handleChangeEarthDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      const date = new Date(e.target.value)
      const formattedDate = date.toISOString().split('T')[0] // Format date as YYYY-MM-DD
      setEarthDate(formattedDate)
      setSolDay('') // Clear Sol Day when Earth Date is set
    } catch {}
  }

  const handleClearEarthDate = () => {
    setEarthDate('')
  }

  const handleClearSolDay = () => {
    setSolDay('')
  }

  return (
    <section className="flex flex-col gap-4 mb-8 w-96 m-auto">
      <div className="flex gap-1">
        <button
          className={`py-0.5 font-semibold rounded-md flex-1 border-red-500 border-4 cursor-pointer ${
            activeTab === 'earthDate'
              ? 'bg-red-500 text-white'
              : 'bg-red-100 text-red-400'
          }`}
          onClick={() => {
            handleClearSolDay()
            setActiveTab('earthDate')
          }}
        >
          Earth Date
        </button>
        <button
          className={`py-0.5 font-semibold rounded-md flex-1 border-red-500 border-4 cursor-pointer ${
            activeTab === 'solDay'
              ? 'bg-red-500 text-white'
              : 'bg-red-100 text-red-400'
          }`}
          onClick={() => {
            handleClearEarthDate()
            setActiveTab('solDay')
          }}
        >
          Sol Day
        </button>
      </div>

      {activeTab === 'earthDate' && (
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
          <label htmlFor="sol-day" className="mb-2 text-sm">
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
            onChange={(e) => {
              setSolDay(e.target.value)
              setEarthDate('') // Clear Earth Date when Sol Day is set
            }}
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

      <button
        className="py-2 font-semibold text-white bg-red-500 rounded-lg cursor-pointer"
        onClick={onSearch}
        style={{ opacity: isDisabled ? '0.5' : '1' }}
        disabled={isDisabled}
      >
        Search Photos
      </button>
    </section>
  )
}
