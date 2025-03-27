import * as React from 'react'
import { NavigationLink } from './NavigationLink'

interface MobileMenuProps {
  isOpen: boolean
  isAuthenticated: boolean
  onSignOut: () => void
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  isAuthenticated,
  onSignOut,
}) => {
  if (!isOpen) return null

  return (
    <nav className="absolute inset-x-0 border bg-zinc-900 border-zinc-800 top-[72px]">
      {!isAuthenticated ? (
        <div className="flex flex-col gap-6 p-6">
          <NavigationLink href="/about">About</NavigationLink>
          <NavigationLink href="/signin">Sign In</NavigationLink>
          <NavigationLink href="/signup">Sign Up</NavigationLink>
        </div>
      ) : (
        <div className="flex flex-col gap-6 p-6">
          <NavigationLink href="/photos">Photos</NavigationLink>
          <NavigationLink href="/profile">Profile</NavigationLink>
          <NavigationLink href="/about">About</NavigationLink>
          <button
            className="text-base font-medium text-left text-gray-400"
            onClick={onSignOut}
          >
            Sign Out
          </button>
        </div>
      )}
    </nav>
  )
}
