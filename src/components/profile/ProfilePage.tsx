'use client'
import React, { useState, useEffect } from 'react'
import { ProfileHeader } from './ProfileHeader'
import { ProfileInfo } from './ProfileInfo'
import { ContactInfo } from './ContactInfo'
import { MissionStats } from './MissionStats'
import { Bio } from './Bio'
import { RecentActivity } from './RecentActivity'
import { useSession } from 'next-auth/react'
import { useProfile } from '../../contexts/profileContext'
import { NavigationLink } from '../layout/NavigationLink'
import Link from 'next/link'

export interface ProfileData {
  name: string
  username: string
  email: string
  bio: string
}

const ProfilePage = () => {
  const { status } = useSession()
  const [loading, setLoading] = useState(true)
  const { setProfile, profile, setUser } = useProfile()

  useEffect(() => {
    if (status === 'authenticated') {
      fetch('/api/user/profile')
        .then((res) => res.json())
        .then((data) => {
          const { profile, ...user } = data
          setProfile(profile)
          setUser(user)
          setLoading(false)
        })
        .catch((error) => {
          console.error('Error fetching profile:', error)
          setLoading(false)
        })
    }
  }, [status, setUser, setProfile])

  const ProfileWrapper = ({ children }) => (
    <main className="min-h-screen bg-[#0A0A0F] text-[#E5E5E7]">
      <div className="max-w-[1200px]">
        <article className="bg-[#1A1A1F] rounded-[16px] border-[1px] border-[#333] overflow-hidden">
          {children}
        </article>
      </div>
    </main>
  )

  if (status === 'unauthenticated') {
    return (
      <ProfileWrapper>
        <p className="p-2 text-center">
          Please <Link href="/auth/signin">Sign In</Link> to view your profile.
        </p>
      </ProfileWrapper>
    )
  }

  if (loading || status === 'loading') {
    return (
      <ProfileWrapper>
        <p className="p-2 text-center">Loading...</p>
      </ProfileWrapper>
    )
  }

  if (!profile) {
    return (
      <ProfileWrapper>
        <p className="p-2 text-center">Profile not found</p>
      </ProfileWrapper>
    )
  }

  return (
    <ProfileWrapper>
      <ProfileHeader />
      <div className="pt-[100px] p-8">
        <div className="flex justify-between items-start max-sm:flex-col max-sm:gap-4">
          <ProfileInfo />
          <NavigationLink
            href="/user/photo-explorer"
            buttonStyle
            className="flex items-center text-white gap-2 bg-[#FF4D4D] px-6 py-3 rounded-[8px] font-semibold transition-all duration-200 hover:transform hover:-translate-y-1"
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
          </NavigationLink>
        </div>
        <div className="mt-12 grid grid-cols-[300px,1fr] gap-8 max-sm:grid-cols-1">
          <div className="space-y-6">
            <ContactInfo />
            <MissionStats />
          </div>
          <Bio />
        </div>
        <RecentActivity />
      </div>
    </ProfileWrapper>
  )
}

export default ProfilePage
