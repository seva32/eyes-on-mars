'use client'

import * as React from 'react'
import Link from 'next/link'

interface NavigationLinkProps {
  href: string
  children: React.ReactNode
  className?: string
  buttonStyle?: boolean
}

export const NavigationLink: React.FC<NavigationLinkProps> = ({
  href,
  children,
  className,
  buttonStyle = false,
}) => {
  const isActive =
    typeof window !== 'undefined' && window.location.pathname === href

  return (
    <Link
      href={href}
      className={`${className} ${buttonStyle ? 'px-4 py-2 text-base font-medium border border-zinc-800 text-zinc-200 rounded-lg' : 'text-base font-medium text-gray-400'} ${buttonStyle && isActive ? 'bg-red-500' : ''}`.trim()}
      style={{
        color: isActive && !buttonStyle ? '#E5E5E7' : undefined,
      }}
    >
      {children}
    </Link>
  )
}
