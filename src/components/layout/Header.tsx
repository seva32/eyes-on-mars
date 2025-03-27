'use client'

import * as React from 'react'
import { NavigationLink } from './NavigationLink'
import { MobileMenu } from './MobileMenu'
import Link from 'next/link'

interface HeaderProps {
  isAuthenticated: boolean
  onSignOut: () => void
}

export const Header: React.FC<HeaderProps> = ({
  isAuthenticated,
  onSignOut,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border bg-zinc-900 border-zinc-800">
      <nav className="flex justify-between items-center px-6 mx-auto h-[72px] max-w-[1400px]">
        <div className="flex gap-12 items-center">
          <Link href="/" className="text-2xl font-bold text-zinc-200">
            Mars Explorer
          </Link>
          <div
            className="flex gap-8 items-center max-sm:hidden"
            hidden={!!isAuthenticated}
          >
            <NavigationLink href="/about">About</NavigationLink>
          </div>
          <div
            className="flex gap-8 items-center max-sm:hidden"
            hidden={!isAuthenticated}
          >
            <NavigationLink href="/photos">Photos</NavigationLink>
            <NavigationLink href="/profile">Profile</NavigationLink>
            <NavigationLink href="/about">About</NavigationLink>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <div
            className="flex gap-4 items-center max-sm:hidden"
            hidden={!!isAuthenticated}
          >
            <a
              href="/signin"
              className="px-px py-0 text-base font-medium rounded-lg border border-zinc-800 text-zinc-200"
            >
              Sign In
            </a>
            <a
              href="/signup"
              className="px-px py-0 text-base font-medium text-white bg-red-500 rounded-lg"
            >
              Sign Up
            </a>
          </div>
          <div className="max-sm:hidden" hidden={!isAuthenticated}>
            <button
              className="px-px py-0 text-base font-medium rounded-lg border border-zinc-800 text-zinc-200"
              onClick={onSignOut}
            >
              Sign Out
            </button>
          </div>
          <button
            className="flex justify-center items-center w-10 h-10 rounded-lg bg-zinc-900"
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
      <MobileMenu
        isOpen={isMobileMenuOpen}
        isAuthenticated={isAuthenticated}
        onSignOut={onSignOut}
      />
    </header>
  )
}
