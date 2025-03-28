import React from 'react'
import Layout from '../../components/layout/Layout'
import ProfilePage from '../../components/profile/ProfilePage'
import { ProfileProvider } from '../../contexts/profileContext'

const UserProfile = () => {
  return (
    <ProfileProvider>
      <Layout>
        <ProfilePage />
      </Layout>
    </ProfileProvider>
  )
}

export default UserProfile
