import React from 'react'
import Image from 'next/image'
import { useSession } from 'next-auth/react'
import Layout from '../../components/Layout'

const Profile = () => {
  const { data: session, status } = useSession({ required: true })
  console.log(session)
  console.log(process.env.NEXTAUTH_URL)
  debugger

  if (status === 'loading') {
    return (
      <Layout>
        <div className="flex flex-col items-center justify-center h-screen">
          <p>Loading...</p>
        </div>
      </Layout>
    )
  }

  if (!session) {
    return (
      <Layout>
        <div className="flex flex-col items-center justify-center h-screen">
          <h1 className="text-2xl font-bold mb-4">Profile</h1>
          <p className="text-red-500 mb-4">
            You must be logged in to view this page.
          </p>
        </div>
      </Layout>
    )
  }

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-2xl font-bold mb-4">Profile</h1>
        <p className="mb-4">
          Welcome, {session.user?.name || session.user?.email}
        </p>
        <Image
          src={session.user?.image || '/default-profile.png'}
          alt="Profile Picture"
          width={128}
          height={128}
          className="rounded-full mb-4"
        />
        <p className="mb-2">
          <strong>Name:</strong> {session.user?.name}
        </p>
        <p className="mb-2">
          <strong>Email:</strong> {session.user?.email}
        </p>
      </div>
    </Layout>
  )
}

Profile.auth = true

export default Profile
