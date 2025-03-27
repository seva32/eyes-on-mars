'use client'

import * as React from 'react'
import { Header } from './Header'
import { Footer } from './Footer'

export const MainLayout: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false)

  return (
    <>
      <div className="flex flex-col w-screen bg-zinc-950 min-h-[screen]">
        <Header
          isAuthenticated={isAuthenticated}
          onSignOut={() => setIsAuthenticated(false)}
        />
        <main className="flex-1 px-6 py-8 mx-auto mt-20 w-full max-w-[1400px]">
          <div className="text-zinc-200">Your page content goes here</div>
        </main>
        <Footer />
      </div>
      <div>
        <div
          dangerouslySetInnerHTML={{
            __html:
              '<link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet">',
          }}
        />
      </div>
    </>
  )
}

export default MainLayout
