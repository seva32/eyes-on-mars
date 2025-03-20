import React from 'react'
import Link from 'next/link'
import { useSession } from 'next-auth/react'

const NavBar = () => {
  const { data: session } = useSession()
  return (
    <header className="p-4 bg-blue-600 text-white text-xl font-bold flex justify-between">
      <Link href="/">Eyes On Mars</Link>
      <nav className="flex gap-2 bg-blue-600 text-white">
        {session ? (
          <>
            <Link href="/user/profile">Profile</Link>
            <Link href="/auth/signout">Sign Out</Link>
          </>
        ) : (
          <>
            <Link href="/auth/signin">Sign In</Link>
            <Link href="/auth/signup">Sign Up</Link>
          </>
        )}
      </nav>
    </header>
  )
}

export default NavBar
