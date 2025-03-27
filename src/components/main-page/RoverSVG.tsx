import React from 'react'

interface RoverSVGProps {
  show: boolean
}

export const RoverSVG: React.FC<RoverSVGProps> = ({ show }) => {
  return (
    <svg
      viewBox="0 0 100 100"
      className="absolute top-0 left-2/4 h-[180px] w-[180px] max-sm:h-[120px] max-sm:w-[120px]"
      style={{
        transform: show
          ? 'translate(-50%, 0) rotate(0)'
          : 'translate(-50%, -100%) rotate(-45deg)',
        opacity: show ? '1' : '0',
        transition: 'transform 0.6s ease-out, opacity 0.6s ease-out',
      }}
    >
      <g fill="#E5E5E7" stroke="#FF4D4D" strokeWidth="2">
        <rect x="20" y="40" width="60" height="30" rx="4" />
        <circle cx="30" cy="75" r="10" />
        <circle cx="70" cy="75" r="10" />
        <path d="M40,40 L50,20 L60,40" strokeLinecap="round" />
        <rect
          x="45"
          y="25"
          width="10"
          height="10"
          transform="rotate(45 50 30)"
        />
      </g>
      <circle cx="40" cy="55" r="5" fill="#FF4D4D" />
      <circle cx="60" cy="55" r="5" fill="#FF4D4D" />
    </svg>
  )
}
