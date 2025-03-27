import React from 'react'

export function Divider() {
  return (
    <div className="flex relative gap-4 items-center my-4">
      <div className="h-px bg-zinc-800 flex-[grow]" />
      <span className="text-sm text-gray-400">or</span>
      <div className="h-px bg-zinc-800 flex-[grow]" />
    </div>
  )
}
