import React from 'react'
import Link from 'next/link'

const NavBar = () => {
  return (
    <header className="p-4 bg-blue-600 text-white text-xl font-bold flex justify-between">
      <Link href="/">The Mars Project</Link>
      <nav className="flex gap-2 bg-blue-600 text-white">
        <Link href="/auth/login">Login</Link>
        <Link href="/auth/register">Register</Link>
      </nav>
    </header>
  )
}

export default NavBar
