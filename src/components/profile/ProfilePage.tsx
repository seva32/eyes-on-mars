'use client'
import React, { useState } from 'react'
import { ProfileHeader } from './ProfileHeader'
import { ProfileInfo } from './ProfileInfo'
import { ContactInfo } from './ContactInfo'
import { MissionStats } from './MissionStats'
import { Bio } from './Bio'
import { RecentActivity } from './RecentActivity'

export interface ProfileData {
  name: string
  username: string
  email: string
  bio: string
}

const ProfilePage = () => {
  const [profileData, setProfileData] = useState<ProfileData>({
    name: 'John Anderson',
    username: 'janderson',
    email: 'j.anderson@nasa.gov',
    bio: 'Mars Rover mission specialist focused on analyzing geological formations through rover photography. Leading the charge in understanding Martian surface composition.',
  })

  const updateField = (field: keyof ProfileData, value: string) => {
    setProfileData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  return (
    <main className="min-h-screen w-screen bg-[#0A0A0F] font-[Inter] text-[#E5E5E7]">
      <div className="max-w-[1200px] mx-auto p-8">
        <article className="bg-[#1A1A1F] rounded-[16px] border-[1px] border-[#333] overflow-hidden">
          <ProfileHeader />
          <div className="pt-[100px] p-8">
            <div className="flex justify-between items-start max-sm:flex-col max-sm:gap-4">
              <ProfileInfo
                name={profileData.name}
                username={profileData.username}
                onUpdate={updateField}
              />
              <a
                href="#"
                className="flex items-center gap-2 bg-[#FF4D4D] px-6 py-3 rounded-[8px] font-semibold transition-all duration-200 hover:transform hover:-translate-y-1"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 8V6C4 5.46957 4.21071 4.96086 4.58579 4.58579C4.96086 4.21071 5.46957 4 6 4H8M4 16V18C4 18.5304 4.21071 19.0391 4.58579 19.4142C4.96086 19.7893 5.46957 20 6 20H8M16 4H18C18.5304 4 19.0391 4.21071 19.4142 4.58579C19.7893 4.96086 20 5.46957 20 6V8M16 20H18C18.5304 20 19.0391 19.7893 19.4142 19.4142C19.7893 19.0391 20 18.5304 20 18V16" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
                <span>Photo Explorer</span>
              </a>
            </div>
            <div className="mt-12 grid grid-cols-[300px,1fr] gap-8 max-sm:grid-cols-1">
              <div className="space-y-6">
                <ContactInfo
                  email={profileData.email}
                  onUpdateEmail={(value) => updateField('email', value)}
                />
                <MissionStats />
              </div>
              <Bio
                bio={profileData.bio}
                onUpdateBio={(value) => updateField('bio', value)}
              />
            </div>
            <RecentActivity />
          </div>
        </article>
      </div>
    </main>
  )
}

export default ProfilePage
