import React from 'react'

export const GridBackground: React.FC = () => {
  return (
    <svg
      viewBox="0 0 100 100"
      className="absolute top-0 left-0 opacity-10 size-full"
    >
      <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
        <path
          d="M 10 0 L 0 0 0 10"
          fill="none"
          stroke="#FF4D4D"
          strokeWidth="0.5"
        />
      </pattern>
      <rect width="100" height="100" fill="url(#grid)" />
    </svg>
  )
}
