import * as React from 'react'
import { NavigationLink } from './NavigationLink'

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()
  return (
    <footer className="mt-auto border bg-zinc-900 border-zinc-800">
      <div className="px-6 py-12 mx-auto max-w-[1400px]">
        <div className="grid grid-cols-4 gap-8 max-sm:gap-12 max-sm:grid-cols-2">
          <section className="flex flex-col gap-4">
            <h3 className="text-xl font-bold text-zinc-200">Eyes on Mars</h3>
            <p className="text-sm text-gray-400">
              Exploring the red planet through the eyes of NASA&apos;s rovers.
            </p>
          </section>
          <section className="flex flex-col gap-4">
            <h4 className="text-base font-semibold text-zinc-200">Explore</h4>
            <nav className="flex flex-col gap-3">
              <NavigationLink
                href="https://science.nasa.gov/mission/mars-2020-perseverance/"
                className="text-sm text-gray-400"
              >
                Rovers
              </NavigationLink>
              <NavigationLink
                href="/user/photo-explorer"
                className="text-sm text-gray-400"
              >
                Photos
              </NavigationLink>
              <NavigationLink href="/about" className="text-sm text-gray-400">
                About
              </NavigationLink>
            </nav>
          </section>
          <section className="flex flex-col gap-4">
            <h4 className="text-base font-semibold text-zinc-200">Resources</h4>
            <nav className="flex flex-col gap-3">
              <NavigationLink
                href="/api-reference"
                className="text-sm text-gray-400"
              >
                API
              </NavigationLink>
              <NavigationLink href="/docs" className="text-sm text-gray-400">
                Documentation
              </NavigationLink>
              <NavigationLink
                href="https://sfantini.us"
                className="text-sm text-gray-400"
              >
                Help Center
              </NavigationLink>
              <NavigationLink href="/terms" className="text-sm text-gray-400">
                Terms of Use
              </NavigationLink>
            </nav>
          </section>
          <section className="flex flex-col gap-4">
            <h4 className="text-base font-semibold text-zinc-200">Connect</h4>
            <nav className="flex flex-col gap-3">
              <a href="https://twitter.com" className="text-sm text-gray-400">
                Twitter
              </a>
              <a href="https://github.com" className="text-sm text-gray-400">
                GitHub
              </a>
              <a href="https://sfantini.us" className="text-sm text-gray-400">
                Contact
              </a>
              <a href="https://sfantini.us" className="text-sm text-gray-400">
                Feedback
              </a>
            </nav>
          </section>
        </div>
        <div className="pt-8 mt-12 border-t border-zinc-800">
          <div className="flex max-sm:flex-col max-sm:gap-4">
            <p className="text-sm text-gray-400">
              © {currentYear} Eyes on Mars. All rights reserved.
            </p>
            <div className="flex gap-6 items-center ml-auto max-sm:ml-0">
              <NavigationLink href="/privacy" className="text-sm text-gray-400">
                Privacy Policy
              </NavigationLink>
              <NavigationLink href="/terms" className="text-sm text-gray-400">
                Terms of Service
              </NavigationLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
