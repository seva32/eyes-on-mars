import React from 'react'

export function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center py-12">
      <div className="w-12 h-12 rounded-full border-4 border-t-red-500 border-zinc-600 animate-spin" />
    </div>
  )
}
