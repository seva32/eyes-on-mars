import React from 'react'

export const StatusIndicators: React.FC = () => {
  return (
    <div className="flex gap-4 items-center">
      <div className="flex gap-2 items-center">
        <div className="w-2 h-2 bg-red-500 rounded-full" />
        <span className="text-gray-400">Live Connection</span>
      </div>
      <div className="flex gap-2 items-center">
        <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
          <path
            d="M12 2V6M12 18V22M4 12H2M6.31 6.31L3.87 3.87M17.69 6.31L20.13 3.87M6.31 17.69L3.87 20.13M17.69 17.69L20.13 20.13M22 12H20"
            stroke="#FF4D4D"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
        <span className="text-gray-400">Signal Strong</span>
      </div>
    </div>
  )
}
