import React from 'react'
import Layout from '../components/Layout'

const Home = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-3xl font-bold">Welcome to Eyes on Mars 🔭</h1>
        <p className="text-gray-600 mt-2">
          Explore Mars and save your favorite pics from the robers!
        </p>
      </div>
    </Layout>
  )
}

export default Home
