'use client'
import * as React from 'react'

export function SearchFilters() {
  return (
    <section className="mb-8">
      <div className="grid grid-cols-2 gap-4 mb-8 max-sm:grid-cols-1">
        <div className="flex flex-col">
          <label htmlFor="earthDate" className="mb-2 text-sm text-zinc-200">
            Earth Date
          </label>
          <input
            id="earthDate"
            type="text"
            className="px-4 w-full rounded-lg border bg-zinc-900 border-zinc-800 h-[50px] text-zinc-200"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="solDay" className="mb-2 text-sm text-zinc-200">
            Sol Day
          </label>
          <input
            id="solDay"
            type="text"
            placeholder="Enter Sol day"
            className="px-4 w-full rounded-lg border bg-zinc-900 border-zinc-800 h-[50px] text-neutral-400"
          />
        </div>
      </div>
      <div className="flex justify-end">
        <button className="px-6 py-3 text-base font-semibold text-white bg-red-500 rounded-lg">
          Update Search
        </button>
      </div>
    </section>
  )
}
