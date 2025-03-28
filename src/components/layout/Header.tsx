'use client'

import * as React from 'react'
import { NavigationLink } from './NavigationLink'
import { MobileMenu } from './MobileMenu'
import { useSession } from 'next-auth/react'

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)
  const { data: session } = useSession()

  return (
    <header className="fixed inset-x-0 top-0 z-50 border bg-zinc-900 border-zinc-800">
      <nav className="flex justify-between items-center px-6 mx-auto h-[72px] max-w-[1400px]">
        <div className="flex gap-12 items-center">
          <NavigationLink href="/" className="text-2xl font-bold text-zinc-200">
            Eyes on Mars
          </NavigationLink>
          {!session ? (
            <div className="flex gap-8 items-center max-sm:hidden">
              <NavigationLink href="/about">About</NavigationLink>
            </div>
          ) : (
            <div className="flex gap-8 items-center max-sm:hidden">
              <NavigationLink href="/user/photo-explorer">
                Photo Explorer
              </NavigationLink>
              <NavigationLink href="/user/saved-snaps">
                Saved Snaps
              </NavigationLink>
              <NavigationLink href="/user/profile">Profile</NavigationLink>
              <NavigationLink href="/about">About</NavigationLink>
            </div>
          )}
        </div>
        <div className="flex gap-4 items-center">
          {!session ? (
            <div className="flex gap-4 items-center max-sm:hidden">
              <NavigationLink href="/auth/signin" buttonStyle>
                Sign In
              </NavigationLink>
              <NavigationLink href="/auth/signup" buttonStyle>
                Sign Up
              </NavigationLink>
            </div>
          ) : (
            <div className="max-sm:hidden">
              <NavigationLink href="/auth/signout" buttonStyle>
                Sign Out
              </NavigationLink>
            </div>
          )}
          <button
            className="flex justify-center items-center w-10 h-10 rounded-lg bg-zinc-900 sm:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M1 4H19M1 10H19M1 16H19"
                stroke="#E5E5E7"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </nav>
      <MobileMenu isOpen={isMobileMenuOpen} isAuthenticated={!!session} />
    </header>
  )
}
