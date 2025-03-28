import React, { createContext, useContext, useState, ReactNode } from 'react'
import { User } from '../entities/User'
import { Profile } from '../entities/Profile'

interface EditStates {
  name: boolean
  username: boolean
  email: boolean
  bio: boolean
}

interface Errors {
  [key: string]: string
}

interface ProfileContextType {
  editStates: EditStates
  errors: Errors
  profile: Profile | null
  user: User | null
  uploading: boolean
  setProfile: React.Dispatch<React.SetStateAction<Profile | null>>
  setUser: React.Dispatch<React.SetStateAction<User | null>>
  handleEdit: (field: keyof EditStates) => void
  handleSave: (field: keyof Profile | keyof User) => Promise<void>
  handleCancel: (field: keyof EditStates) => void
  handleChange: (field: keyof Profile | keyof User, value: string) => void
}

const ProfileContext = createContext<ProfileContextType | undefined>(undefined)

export const ProfileProvider = ({ children }: { children: ReactNode }) => {
  const [editStates, setEditStates] = useState<EditStates>({
    name: false,
    username: false,
    email: false,
    bio: false,
  })

  const [errors, setErrors] = useState<Errors>({})
  const [profile, setProfile] = useState<Profile | null>(null)
  const [user, setUser] = useState<User | null>(null)
  const [uploading, setUploading] = useState(false)

  const validateField = React.useCallback(
    (field: keyof Profile | keyof User, value: string) => {
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
    },
    [errors],
  )

  const handleEdit = React.useCallback((field: keyof EditStates) => {
    setEditStates((prev) => ({ ...prev, [field]: true }))
  }, [])

  const handleSave = React.useCallback(
    async (field: keyof Profile | keyof User, bioValue?: string) => {
      if (!profile || !user) return

      const value = bioValue
        ? bioValue
        : field in profile
          ? profile[field as keyof Profile]
          : user[field as keyof User]

      if (!validateField(field, value as string)) return

      setEditStates((prev) => ({ ...prev, [field]: false }))

      const endpoint = field in profile ? '/api/user/profile' : '/api/user/user'

      try {
        const response = await fetch(endpoint, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ [field]: value }),
        })

        const data = await response.json()
        if (!response.ok) {
          alert(data.error)
          return
        }

        if (field in profile) setProfile(data)
        else setUser(data.user)

        alert(
          `${field.charAt(0).toUpperCase() + field.slice(1)} updated successfully`,
        )
      } catch (error) {
        console.error('Upload error:', error)
      } finally {
        setUploading(false)
      }
    },
    [profile, user, validateField],
  )

  const handleCancel = React.useCallback((field: keyof EditStates) => {
    setEditStates((prev) => ({ ...prev, [field]: false }))
    setErrors({})
  }, [])

  const handleChange = React.useCallback(
    (field: keyof Profile | keyof User, value: string) => {
      if (profile && field in profile) {
        setProfile((prev) => (prev ? { ...prev, [field]: value } : null))
        if (field === 'bio') {
          handleSave('bio', value)
        }
      } else if (user && field in user) {
        setUser((prev) => (prev ? { ...prev, [field]: value } : null))
      }
      validateField(field, value)
    },
    [profile, user, validateField, handleSave],
  )

  const contextValue = React.useMemo(
    () => ({
      editStates,
      errors,
      profile,
      user,
      uploading,
      setProfile,
      setUser,
      handleEdit,
      handleSave,
      handleCancel,
      handleChange,
    }),
    [
      editStates,
      errors,
      profile,
      user,
      uploading,
      handleEdit,
      handleSave,
      handleCancel,
      handleChange,
    ],
  )

  return (
    <ProfileContext.Provider value={contextValue}>
      {children}
    </ProfileContext.Provider>
  )
}

export const useProfile = (): ProfileContextType => {
  const context = useContext(ProfileContext)
  if (!context) {
    throw new Error('useProfile must be used within a ProfileProvider')
  }
  return context
}
