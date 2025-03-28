'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { Dropzone } from 'eyes-on-mars-ds'
import { useProfile } from '../../contexts/profileContext'

export const ProfileHeader: React.FC = () => {
  const { setProfile, profile } = useProfile()
  const [isHovered, setIsHovered] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [uploading, setUploading] = useState(false)
  const [imageUrl, setImageUrl] = useState<string | null>(
    profile?.avatarUrl || null,
  )
  const handleAcceptUpload = async ({ file }: { file: File | null }) => {
    if (!file) return

    setUploading(true)
    const formData = new FormData()
    formData.append('file', file)

    try {
      const response = await fetch('/api/user/upload', {
        method: 'POST',
        body: formData,
      })

      const data = await response.json()
      if (response.ok) {
        setImageUrl(data.url)
        setProfile((profile) => ({ ...profile!, avatarUrl: data.url }))
      } else {
        alert(data.error)
      }
    } catch (error) {
      console.error('Upload error:', error)
    } finally {
      setUploading(false)
      setIsModalOpen(false)
    }
  }

  return (
    <header className="h-[200px] bg-[#252529] relative">
      <div className="absolute bottom-0 left-8 transform-[translateY(50%)]">
        <div
          className="relative group"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="w-[160px] h-[160px] rounded-[16px] border-[4px] border-[#0A0A0F] overflow-hidden">
            <Image
              src={
                profile?.avatarUrl ||
                imageUrl ||
                'https://res.cloudinary.com/seva32/image/upload/v1742432740/vaxw6bogchqnt8qcdnnj.jpg'
              }
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
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-[#FF4D4D] text-white px-4 py-2 rounded-[8px] text-[14px] font-semibold cursor-pointer"
            >
              Change Photo
            </button>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-md w-full">
            <h3 className="text-xl font-semibold mb-4">
              Update Profile Picture
            </h3>
            <Dropzone
              handleAcceptUpload={handleAcceptUpload}
              handleCancelUpload={() => setIsModalOpen(false)}
              savingImage={uploading}
            />
          </div>
        </div>
      )}
    </header>
  )
}
