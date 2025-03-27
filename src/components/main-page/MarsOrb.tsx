import React from 'react'

interface MarsOrbProps {
  show: boolean
}

export const MarsOrb: React.FC<MarsOrbProps> = ({ show }) => {
  return (
    <svg
      viewBox="0 0 200 200"
      className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 h-[300px] w-[300px] max-sm:h-[200px] max-sm:w-[200px]"
      style={{
        transform: show
          ? 'translate(-50%, -50%) scale(1)'
          : 'translate(-50%, -50%) scale(0)',
        opacity: show ? '1' : '0',
        transition: 'transform 0.6s ease-out, opacity 0.6s ease-out',
      }}
    >
      <circle cx="100" cy="100" r="95" fill="#FF4D4D" />
      <path
        d="M50,70 Q100,20 150,70"
        fill="none"
        stroke="#CC3D3D"
        strokeWidth="4"
      />
      <path
        d="M40,100 Q100,60 160,100"
        fill="none"
        stroke="#CC3D3D"
        strokeWidth="4"
      />
      <path
        d="M50,130 Q100,90 150,130"
        fill="none"
        stroke="#CC3D3D"
        strokeWidth="4"
      />
      <circle cx="70" cy="60" r="15" fill="#CC3D3D" />
      <circle cx="130" cy="110" r="20" fill="#CC3D3D" />
      <circle cx="85" cy="140" r="12" fill="#CC3D3D" />
    </svg>
  )
}
