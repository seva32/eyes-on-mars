import React from 'react'

export const GridBackground: React.FC = () => {
  return (
    <svg
      viewBox="0 0 100 100"
      className="absolute inset-0 m-auto opacity-10 max-sm:hidden"
    >
      <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
        <path
          d="M 10 0 L 0 0 0 10"
          fill="none"
          stroke="#FF4D4D"
          strokeWidth="0.3"
        />
      </pattern>
      <rect width="100" height="100" fill="url(#grid)" />
    </svg>
  )
}
