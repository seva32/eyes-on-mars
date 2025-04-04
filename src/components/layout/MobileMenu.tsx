import * as React from 'react'
import { NavigationLink } from './NavigationLink'

interface MobileMenuProps {
  isOpen: boolean
  isAuthenticated: boolean
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  isAuthenticated,
}) => {
  if (!isOpen) return null

  return (
    <nav className="absolute inset-x-0 border bg-zinc-900 border-zinc-800 top-[72px]">
      {!isAuthenticated ? (
        <div className="flex flex-col gap-6 p-6">
          <NavigationLink href="/about">About</NavigationLink>
          <NavigationLink href="/auth/signin">Sign In</NavigationLink>
          <NavigationLink href="/auth/signup">Sign Up</NavigationLink>
        </div>
      ) : (
        <div className="flex flex-col gap-6 p-6">
          <NavigationLink href="/user/photo-explorer">
            Photo Explorer
          </NavigationLink>
          <NavigationLink href="/user/saved-snaps">Saved Snaps</NavigationLink>
          <NavigationLink href="/user/profile">Profile</NavigationLink>
          <NavigationLink href="/about">About</NavigationLink>
          <NavigationLink href="/auth/signout">Sign out</NavigationLink>
        </div>
      )}
    </nav>
  )
}
