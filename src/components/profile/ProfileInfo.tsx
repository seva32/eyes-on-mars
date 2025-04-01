'use client'
import React from 'react'
import { useProfile } from '../../contexts/profileContext'
import { FiCheck, FiX } from 'react-icons/fi'

export const ProfileInfo: React.FC = () => {
  const {
    profile,
    user,
    handleCancel,
    handleChange,
    handleSave,
    editStates,
    handleEdit,
  } = useProfile()

  return (
    <div className="space-y-2">
      {!editStates.name ? (
        <div className="flex items-center gap-2 flex-wrap">
          <h1 className="text-[24px] font-semibold">
            {profile?.name || 'User'}
          </h1>
          <button
            onClick={() => handleEdit('name')}
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
        <div className="flex items-center gap-2 flex-wrap">
          <input
            type="text"
            value={profile?.name}
            onChange={(e) => handleChange('name', e.target.value)}
            autoFocus
            className="bg-[#1A1A1F] border border-[#333] rounded-[8px] px-3 py-2 text-[24px] font-semibold focus:outline-none focus:border-[#FF4D4D]"
          />
          <button
            onClick={() => handleSave('name')}
            className="p-2 text-green-600 hover:bg-green-50 rounded-full transition-colors"
          >
            <FiCheck size={20} />
          </button>
          <button
            onClick={() => handleCancel('name')}
            className="p-2 text-red-600 hover:bg-red-50 rounded-full transition-colors"
          >
            <FiX size={20} />
          </button>
        </div>
      )}

      {!editStates.username ? (
        <div className="flex items-center gap-2 flex-wrap">
          <p className="text-[16px] text-[#9CA3AF]">@{user?.username}</p>
          <button
            onClick={() => handleEdit('username')}
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
        <div className="flex items-center gap-2 flex-wrap">
          <input
            type="text"
            value={user?.username}
            onChange={(e) => handleChange('username', e.target.value)}
            autoFocus
            className="bg-[#1A1A1F] border border-[#333] rounded-[8px] px-3 py-2 text-[16px] focus:outline-none focus:border-[#FF4D4D]"
          />
          <button
            onClick={() => handleSave('username')}
            className="p-2 text-green-600 hover:bg-green-50 rounded-full transition-colors"
          >
            <FiCheck size={20} />
          </button>
          <button
            onClick={() => handleCancel('username')}
            className="p-2 text-red-600 hover:bg-red-50 rounded-full transition-colors"
          >
            <FiX size={20} />
          </button>
        </div>
      )}
    </div>
  )
}
