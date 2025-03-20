import React, { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import Layout from '../../components/Layout'
import Link from 'next/link'
import Image from 'next/image'
import type { Profile } from '../../entities/Profile'
import { Dropzone } from 'eyes-on-mars-ds'

const ProfilePage = () => {
  const { status } = useSession()
  const [profile, setProfile] = useState<Profile | null>(null)
  const [user, setUser] = useState<{ username: string; email: string }>()
  const [loading, setLoading] = useState(true)
  const [uploading, setUploading] = useState(false)
  const [imageUrl, setImageUrl] = useState<string | null>(null)

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
  }, [status])

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
      } else {
        alert(data.error)
      }
    } catch (error) {
      console.error('Upload error:', error)
    } finally {
      setUploading(false)
    }
  }

  if (status === 'unauthenticated') {
    return (
      <Layout>
        <div className="flex flex-col items-center justify-center h-screen">
          <p>
            Please{' '}
            <Link className="text-blue-700" href="/auth/signin">
              Sign In
            </Link>{' '}
            to view your profile.
          </p>
        </div>
      </Layout>
    )
  }

  if (loading || status === 'loading') {
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

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-2xl font-bold mb-4">Profile now</h1>
        <p className="mb-4">Welcome</p>
        <div className="flex flex-col items-center">
          <Image
            src={
              profile.avatarUrl ||
              imageUrl ||
              'https://res.cloudinary.com/seva32/image/upload/v1742432740/vaxw6bogchqnt8qcdnnj.jpg'
            }
            alt="Profile Picture"
            width={128}
            height={128}
            className="w-32 h-32 rounded-full mb-4"
          />
          <p className="mb-2">
            <strong>Name:</strong> {user?.username || 'No name'}
          </p>
          <p className="mb-2">
            <strong>Email:</strong> {user?.email || 'No email'}
          </p>
          <p className="mb-2">
            <strong>Bio:</strong> {profile.bio || 'No bio'}
          </p>
          <div className="min-w-96 mt-4">
            <Dropzone
              handleAcceptUpload={handleAcceptUpload}
              handleCancelUpload={() => console.log('canceled')}
              savingImage={uploading}
            />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ProfilePage
