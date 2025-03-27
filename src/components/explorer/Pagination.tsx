'use client'
import * as React from 'react'

interface PaginationProps {
  currentPage: number
  totalPages: number
}

export function Pagination({ currentPage, totalPages }: PaginationProps) {
  return (
    <nav
      className="flex gap-4 justify-center items-center mt-8"
      aria-label="Pagination"
    >
      <button
        className="px-4 py-2 text-base rounded-md opacity-50 bg-zinc-900 text-zinc-200"
        disabled={currentPage === 1}
        aria-label="Go to previous page"
      >
        Previous
      </button>
      <div className="text-base text-gray-400">
        Page {currentPage} of {totalPages}
      </div>
      <button
        className="px-4 py-2 text-base rounded-md bg-zinc-900 text-zinc-200"
        disabled={currentPage === totalPages}
        aria-label="Go to next page"
      >
        Next
      </button>
    </nav>
  )
}
