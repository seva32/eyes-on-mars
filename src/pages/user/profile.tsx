import React, { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import Layout from '../../components/Layout'
import Image from 'next/image'
import type { Profile } from '../../entities/Profile'

const ProfilePage = () => {
  const { data: session, status } = useSession()
  const [profile, setProfile] = useState<Profile | null>(null)
  const [loading, setLoading] = useState(true)

  console.log('session: >>>', session)
  console.log('status: >>>', status)

  useEffect(() => {
    if (status === 'authenticated') {
      fetch('/api/user/profile', {
        headers: {
          Authorization: `Bearer ${session.accessToken}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setProfile(data)
          setLoading(false)
        })
        .catch((error) => {
          console.error('Error fetching profile:', error)
          setLoading(false)
        })
    }
  }, [status, session])

  if (loading) {
    return (
      <Layout>
        <div className="flex flex-col items-center justify-center h-screen">
          <p>Loading...</p>
        </div>
      </Layout>
    )
  }

  if (!profile) {
    return (
      <Layout>
        <div className="flex flex-col items-center justify-center h-screen">
          <p>Profile not found</p>
        </div>
      </Layout>
    )
  }

  console.log('profile: >>>', profile)

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-2xl font-bold mb-4">Profile</h1>
        <p className="mb-4">Welcome</p>
        <div className="flex flex-col items-center">
          <Image
            src={session?.user?.image || '/default-profile.png'}
            alt="Profile Picture"
            width={128}
            height={128}
            className="w-32 h-32 rounded-full mb-4"
          />
          <p className="mb-2">
            <strong>Name:</strong> {profile.user?.username || 'No name'}
          </p>
          <p className="mb-2">
            <strong>Email:</strong> {profile.user?.email || 'No email'}
          </p>
          <p className="mb-2">
            <strong>Bio:</strong> {profile.bio || 'No bio'}
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default ProfilePage
