'use client'
import React, { useState } from 'react'
import Image from 'next/image'

export const ProfileHeader = () => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <header className="h-[200px] w-full bg-[#252529] relative">
      <div className="absolute bottom-0 left-8 transform-[translateY(50%)]">
        <div
          className="relative group"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="w-[160px] h-[160px] rounded-[16px] border-[4px] border-[#0A0A0F] overflow-hidden">
            <Image
              src="https://placehold.co/160x160"
              alt="Profile"
              className="w-full h-full object-cover"
              width={160}
              height={160}
            />
          </div>
          <div
            className={`absolute inset-0 flex items-center justify-center transition-all duration-200 bg-[rgba(0,0,0,0.4)] rounded-[16px] ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <button className="bg-[#FF4D4D] text-white px-4 py-2 rounded-[8px] text-[14px] font-semibold">
              Change Photo
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
