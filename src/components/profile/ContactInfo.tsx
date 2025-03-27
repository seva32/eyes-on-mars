'use client'
import React, { useState } from 'react'

interface ContactInfoProps {
  email: string
  onUpdateEmail: (value: string) => void
}

export const ContactInfo: React.FC<ContactInfoProps> = ({
  email,
  onUpdateEmail,
}) => {
  const [isEditing, setIsEditing] = useState(false)

  return (
    <section className="bg-[#252529] p-6 rounded-[12px] border-[1px] border-[#333]">
      <h3 className="font-semibold mb-4">Contact Information</h3>
      <div className="space-y-4">
        <div>
          <label className="text-[14px] text-[#9CA3AF] block mb-1">Email</label>
          {!isEditing ? (
            <div className="flex items-center gap-2">
              <p className="text-[16px]">{email}</p>
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
            <input
              type="email"
              defaultValue={email}
              onBlur={(e) => {
                onUpdateEmail(e.target.value)
                setIsEditing(false)
              }}
              autoFocus
              className="bg-[#1A1A1F] border border-[#333] rounded-[8px] px-3 py-2 w-full text-[16px] focus:outline-none focus:border-[#FF4D4D]"
            />
          )}
        </div>
        <div>
          <label className="text-[14px] text-[#9CA3AF] block mb-1">Role</label>
          <p className="text-[16px]">Mission Specialist</p>
        </div>
        <div>
          <label className="text-[14px] text-[#9CA3AF] block mb-1">
            Location
          </label>
          <p className="text-[16px]">Mission Control, Houston</p>
        </div>
      </div>
    </section>
  )
}
