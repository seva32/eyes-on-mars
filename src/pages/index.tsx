import React from 'react'
import Layout from '../components/Layout'

const Home = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-3xl font-bold">Welcome to The Mars Photos</h1>
        <p className="text-gray-600 mt-2">
          Explore Mars and chat with space enthusiasts!
        </p>
      </div>
    </Layout>
  )
}

export default Home
