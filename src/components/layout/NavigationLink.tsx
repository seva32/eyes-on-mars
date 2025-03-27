'use client'

import * as React from 'react'

interface NavigationLinkProps {
  href: string
  children: React.ReactNode
  className?: string
}

export const NavigationLink: React.FC<NavigationLinkProps> = ({
  href,
  children,
  className = 'text-base font-medium text-gray-400',
}) => {
  const isActive =
    typeof window !== 'undefined' && window.location.pathname === href

  return (
    <a
      href={href}
      className={className}
      style={{
        color: isActive ? '#E5E5E7' : undefined,
      }}
    >
      {children}
    </a>
  )
}
