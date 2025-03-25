import React from 'react'
import NavBar from './NavBar'

const Layout = ({ children }: { children: React.ReactNode }) => {
  const currentYear = new Date().getFullYear()

  return (
    <div className="bg-[url('/images/mars.jpg')] bg-cover bg-center flex flex-col">
      <NavBar />
      <main className="flex-1 flex w-full p-4">{children}</main>
      <footer className="p-4 text-orange-300 text-center text-xs font-bold">
        &copy; {currentYear} mars.sfantini.us
      </footer>
    </div>
  )
}

export default Layout
