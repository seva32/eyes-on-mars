import React from 'react'
import NavBar from './NavBar'

const Layout = ({ children }: { children: React.ReactNode }) => {
  const currentYear = new Date().getFullYear()

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <NavBar />
      <main className="flex-1 p-4">{children}</main>
      <footer className="p-4 bg-gray-800 text-white text-center">
        © {currentYear} Mars Project
      </footer>
    </div>
  )
}

export default Layout
