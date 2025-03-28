'use client'
import React, { useState } from 'react'
import { useProfile } from '../../contexts/profileContext'
import { FiCheck, FiX } from 'react-icons/fi'

export const Bio: React.FC = () => {
  const { profile, handleCancel, handleChange, handleEdit, editStates } =
    useProfile()
  const [bio, setBio] = useState(profile?.bio || '')

  React.useEffect(() => {
    setBio(profile?.bio || '')
  }, [profile?.bio])

  return (
    <section className="bg-[#252529] p-6 rounded-[12px] border-[1px] border-[#333] h-fit">
      <h3 className="font-semibold mb-4">Bio</h3>
      {!editStates.bio ? (
        <div className="flex items-start gap-2">
          <p className="text-[16px] leading-relaxed flex-grow">
            {profile?.bio}
          </p>
          <button
            onClick={() => handleEdit('bio')}
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
        <div className="flex items-center gap-2">
          <textarea
            autoFocus
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            className="bg-[#1A1A1F] border border-[#333] rounded-[8px] px-3 py-2 w-full min-h-[100px] text-[16px] focus:outline-none focus:border-[#FF4D4D]"
          />
          <button
            onClick={() => {
              handleChange('bio', bio)
            }}
            className="p-2 text-green-600 hover:bg-green-50 rounded-full transition-colors"
          >
            <FiCheck size={20} />
          </button>
          <button
            onClick={() => handleCancel('bio')}
            className="p-2 text-red-600 hover:bg-red-50 rounded-full transition-colors"
          >
            <FiX size={20} />
          </button>
        </div>
      )}
    </section>
  )
}
