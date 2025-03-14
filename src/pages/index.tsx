import React from 'react'
import Layout from '../components/Layout'

// AppDataSource.initialize()
//   .then(() => {
//     console.log('Database connected!')
//   })
//   .catch((err) => {
//     console.error('Error during Data Source initialization:', err)
//   })

const Home = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-3xl font-bold">Welcome to The Mars Pro</h1>
        <p className="text-gray-600 mt-2">
          Explore Mars and chat with space enthusiasts!
        </p>
      </div>
    </Layout>
  )
}

export default Home
