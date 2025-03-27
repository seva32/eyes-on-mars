'use client'
import React, { useState } from 'react'

interface BioProps {
  bio: string
  onUpdateBio: (value: string) => void
}

export const Bio: React.FC<BioProps> = ({ bio, onUpdateBio }) => {
  const [isEditing, setIsEditing] = useState(false)

  return (
    <section className="bg-[#252529] p-6 rounded-[12px] border-[1px] border-[#333] h-fit">
      <h3 className="font-semibold mb-4">Bio</h3>
      {!isEditing ? (
        <div className="flex items-start gap-2">
          <p className="text-[16px] leading-relaxed flex-grow">{bio}</p>
          <button
            onClick={() => setIsEditing(true)}
            className="text-[#9CA3AF] hover:text-white"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
            </svg>
          </button>
        </div>
      ) : (
        <textarea
          defaultValue={bio}
          onBlur={(e) => {
            onUpdateBio(e.target.value)
            setIsEditing(false)
          }}
          autoFocus
          className="bg-[#1A1A1F] border border-[#333] rounded-[8px] px-3 py-2 w-full min-h-[100px] text-[16px] focus:outline-none focus:border-[#FF4D4D]"
        />
      )}
    </section>
  )
}
