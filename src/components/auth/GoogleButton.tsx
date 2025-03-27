'use client'
import * as React from 'react'
import { signIn } from 'next-auth/react'

export function GoogleButton() {
  const [isHovered, setIsHovered] = React.useState(false)

  return (
    <button
      type="button"
      className="flex gap-3 justify-center items-center w-full h-12 text-base font-semibold cursor-pointer rounded-lg border bg-zinc-900 border-zinc-800 text-zinc-200"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        borderColor: isHovered ? '#FF4D4D' : '#333',
      }}
      onClick={() => signIn('google')}
    >
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <path
          d="M21.8055 10.0415H21V10H12V14H17.6515C16.827 16.3285 14.6115 18 12 18C8.6865 18 6 15.3135 6 12C6 8.6865 8.6865 6 12 6C13.5295 6 14.921 6.577 15.9805 7.5195L18.809 4.691C17.023 3.0265 14.634 2 12 2C6.4775 2 2 6.4775 2 12C2 17.5225 6.4775 22 12 22C17.5225 22 22 17.5225 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z"
          fill="#FFF"
        />
        <path
          d="M3.15302 7.3455L6.43852 9.755C7.32752 7.554 9.48052 6 12 6C13.5295 6 14.921 6.577 15.9805 7.5195L18.809 4.691C17.023 3.0265 14.634 2 12 2C8.15902 2 4.82802 4.1685 3.15302 7.3455Z"
          fill="#FF4D4D"
        />
      </svg>
      <span>Continue with Google</span>
    </button>
  )
}
