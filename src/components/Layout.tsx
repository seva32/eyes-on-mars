import React from 'react'
import NavBar from './NavBar'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <header className="p-4 bg-blue-600 text-white text-xl font-bold">
        The Mars Project
        <NavBar />
      </header>
      <main className="flex-1 p-4">{children}</main>
      <footer className="p-4 bg-gray-800 text-white text-center">
        © 2025 Mars Project
      </footer>
    </div>
  )
}

export default Layout
