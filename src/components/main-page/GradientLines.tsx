import React from 'react'

export const GradientLines: React.FC = () => {
  return (
    <>
      <div className="absolute left-0 top-2/4 w-full h-px bg-gradient-to-r from-transparent via-red-500/20 to-transparent" />
      <div className="absolute left-0 top-1/4 w-full h-px bg-gradient-to-r from-transparent via-red-500/20 to-transparent" />
      <div className="absolute left-0 top-3/4 w-full h-px bg-gradient-to-r from-transparent via-red-500/20 to-transparent" />
    </>
  )
}
