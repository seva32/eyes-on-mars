import React, { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import Image from 'next/image'
import { Dropzone } from 'eyes-on-mars-ds'
import { FiEdit2, FiCheck, FiX, FiCamera } from 'react-icons/fi'

import Layout from '../../components/Layout'

import type { Profile } from '../../entities/Profile'

const UserProfile = () => {
  const { status } = useSession()

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [uploading, setUploading] = useState(false)
  const [imageUrl, setImageUrl] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState<{ username: string; email: string }>()
  const [profile, setProfile] = useState<Profile | null>(null)
  const [editStates, setEditStates] = useState({
    name: false,
    username: false,
    email: false,
    bio: false,
  })
  const [errors, setErrors] = useState({})

  useEffect(() => {
    if (status === 'authenticated') {
      fetch('/api/user/profile')
        .then((res) => res.json())
        .then((data) => {
          console.log(data)
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

  const validateField = (field, value) => {
    debugger
    const newErrors = { ...errors }
    switch (field) {
      case 'name':
        if (value.length < 2 || value.length > 50) {
          newErrors[field] = 'Name must be between 2 and 50 characters'
        } else {
          delete newErrors[field]
        }
        break
      case 'username':
        if (!/^[a-zA-Z0-9]+$/.test(value)) {
          newErrors[field] = 'Username must be alphanumeric'
        } else {
          delete newErrors[field]
        }
        break
      case 'email':
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          newErrors[field] = 'Please enter a valid email'
        } else {
          delete newErrors[field]
        }
        break
      case 'bio':
        if (value.length > 250) {
          newErrors[field] = 'Bio must not exceed 250 characters'
        } else {
          delete newErrors[field]
        }
        break
      default:
        break
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleEdit = (field) => {
    setEditStates({ ...editStates, [field]: true })
  }

  const handleSave = async (field: string) => {
    const value = Object.hasOwn(profile!, field)
      ? profile![field]
      : user![field]
    debugger
    if (validateField(field, value)) {
      setEditStates({ ...editStates, [field]: false })

      if (Object.hasOwn(profile!, field)) {
        try {
          const response = await fetch('/api/user/profile', {
            method: 'PATCH',
            body: JSON.stringify({ [field]: value }),
          })

          const data = await response.json()
          if (response.ok) {
            setProfile(data.profile)
          } else {
            alert(data.error)
          }
        } catch (error) {
          console.error('Upload error:', error)
        } finally {
          setUploading(false)
        }
      } else if (Object.hasOwn(user!, field)) {
        try {
          const response = await fetch('/api/user/user', {
            method: 'PATCH',
            body: JSON.stringify({ [field]: value }),
          })

          const data = await response.json()
          if (response.ok) {
            setUser(data.user)
          } else {
            alert(data.error)
          }
        } catch (error) {
          console.error('Upload error:', error)
        } finally {
          setUploading(false)
        }
      }
      alert(
        `${field.charAt(0).toUpperCase() + field.slice(1)} updated successfully`,
      )
    }
  }

  const handleCancel = (field) => {
    setEditStates({ ...editStates, [field]: false })
    setErrors({})
  }

  const handleChange = (field, value) => {
    if (Object.hasOwn(profile!, field))
      setProfile({ ...profile!, [field]: value })
    else if (Object.hasOwn(user!, field)) setUser({ ...user!, [field]: value })
    validateField(field, value)
  }

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

  const renderField = (field, label) => (
    <div className="mb-6" key={field}>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>
      {editStates[field] ? (
        <div className="flex items-center gap-2">
          <input
            type={field === 'email' ? 'email' : 'text'}
            value={
              (Object.hasOwn(profile!, field)
                ? profile![field]
                : user![field]) || ''
            }
            onChange={(e) => handleChange(field, e.target.value)}
            className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          />
          <button
            onClick={() => handleSave(field)}
            className="p-2 text-green-600 hover:bg-green-50 rounded-full transition-colors"
          >
            <FiCheck />
          </button>
          <button
            onClick={() => handleCancel(field)}
            className="p-2 text-red-600 hover:bg-red-50 rounded-full transition-colors"
          >
            <FiX />
          </button>
        </div>
      ) : (
        <div className="flex items-center justify-between">
          <p className="text-gray-800">
            {Object.hasOwn(profile!, field) ? profile![field] : user![field]}
          </p>
          <button
            onClick={() => handleEdit(field)}
            className="p-2 text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
          >
            <FiEdit2 />
          </button>
        </div>
      )}
      {errors[field] && (
        <p className="text-red-500 text-sm mt-1">{errors[field]}</p>
      )}
    </div>
  )

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
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-8">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="relative group">
                <div
                  className="w-32 h-32 rounded-full overflow-hidden relative cursor-pointer"
                  onClick={() => setIsModalOpen(true)}
                >
                  <Image
                    src={
                      profile.avatarUrl ||
                      imageUrl ||
                      'https://res.cloudinary.com/seva32/image/upload/v1742432740/vaxw6bogchqnt8qcdnnj.jpg'
                    }
                    alt="Profile"
                    width={128}
                    height={128}
                    className="w-32 h-32 rounded-full mb-4"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <FiCamera className="text-white text-2xl" />
                  </div>
                </div>
              </div>

              <div className="flex-1">
                {renderField('name', 'Name')}
                {renderField('username', 'Username')}
                {renderField('email', 'Email')}
                {renderField('bio', 'Bio')}
              </div>
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
      </div>
    </Layout>
  )
}

export default UserProfile
