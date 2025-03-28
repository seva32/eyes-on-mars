'use client'

import * as React from 'react'
import { Header } from './Header'
import { Footer } from './Footer'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col w-full min-h-screen bg-zinc-950">
      <Header />
      <main className="flex-1 px-6 py-12 mx-auto mt-20 w-full max-w-[1400px] flex flex-col">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
