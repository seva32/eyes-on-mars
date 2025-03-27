'use client'
import React, { useState } from 'react'

interface ProfileInfoProps {
  name: string
  username: string
  onUpdate: (field: 'name' | 'username', value: string) => void
}

export const ProfileInfo: React.FC<ProfileInfoProps> = ({
  name,
  username,
  onUpdate,
}) => {
  const [editing, setEditing] = useState({
    name: false,
    username: false,
  })

  const startEdit = (field: 'name' | 'username') => {
    setEditing(() => ({
      name: false,
      username: false,
      [field]: true,
    }))
  }

  const handleSave = (field: 'name' | 'username', value: string) => {
    onUpdate(field, value)
    setEditing((prev) => ({ ...prev, [field]: false }))
  }

  return (
    <div className="space-y-2">
      {!editing.name ? (
        <div className="flex items-center gap-2">
          <h1 className="text-[24px] font-semibold">{name}</h1>
          <button
            onClick={() => startEdit('name')}
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
        <input
          type="text"
          defaultValue={name}
          onBlur={(e) => handleSave('name', e.target.value)}
          autoFocus
          className="bg-[#1A1A1F] border border-[#333] rounded-[8px] px-3 py-2 text-[24px] font-semibold focus:outline-none focus:border-[#FF4D4D]"
        />
      )}

      {!editing.username ? (
        <div className="flex items-center gap-2">
          <p className="text-[16px] text-[#9CA3AF]">@{username}</p>
          <button
            onClick={() => startEdit('username')}
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
        <input
          type="text"
          defaultValue={username}
          onBlur={(e) => handleSave('username', e.target.value)}
          autoFocus
          className="bg-[#1A1A1F] border border-[#333] rounded-[8px] px-3 py-2 text-[16px] focus:outline-none focus:border-[#FF4D4D]"
        />
      )}
    </div>
  )
}
