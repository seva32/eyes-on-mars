import React from 'react'
import Link from 'next/link'

const NavBar = () => {
  return (
    <nav className="flex justify-between p-4 bg-blue-600 text-white">
      <Link href="/">Home</Link>
      <Link href="/auth/login">Login</Link>
    </nav>
  )
}

export default NavBar
