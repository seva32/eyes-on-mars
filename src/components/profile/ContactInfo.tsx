'use client'
import React from 'react'
import { useProfile } from '../../contexts/profileContext'
import { FiCheck, FiX } from 'react-icons/fi'

export const ContactInfo: React.FC = () => {
  const {
    user,
    handleCancel,
    handleChange,
    handleSave,
    editStates,
    handleEdit,
  } = useProfile()

  return (
    <section className="bg-[#252529] p-6 rounded-[12px] border-[1px] border-[#333]">
      <h3 className="font-semibold mb-4">Contact Information</h3>
      <div className="space-y-4">
        <div>
          <label className="text-[14px] text-[#9CA3AF] block mb-1">Email</label>
          {!editStates.email ? (
            <div className="flex items-center gap-2">
              <p className="text-[16px]">{user?.email}</p>
              <button
                onClick={() => handleEdit('email')}
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
              <input
                type="email"
                value={user?.email}
                onChange={(e) => handleChange('email', e.target.value)}
                autoFocus
                className="bg-[#1A1A1F] border border-[#333] rounded-[8px] px-3 py-2 w-full text-[16px] focus:outline-none focus:border-[#FF4D4D]"
              />
              <button
                onClick={() => handleSave('email')}
                className="p-2 text-green-600 hover:bg-green-50 rounded-full transition-colors"
              >
                <FiCheck size={20} />
              </button>
              <button
                onClick={() => handleCancel('email')}
                className="p-2 text-red-600 hover:bg-red-50 rounded-full transition-colors"
              >
                <FiX size={20} />
              </button>
            </div>
          )}
        </div>
        <div>
          <label className="text-[14px] text-[#9CA3AF] block mb-1">Role</label>
          <p className="text-[16px]">---</p>
        </div>
        <div>
          <label className="text-[14px] text-[#9CA3AF] block mb-1">
            Location
          </label>
          <p className="text-[16px]">---</p>
        </div>
      </div>
    </section>
  )
}
