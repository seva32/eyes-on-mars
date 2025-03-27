import * as React from 'react'

export const Footer: React.FC = () => {
  return (
    <footer className="mt-auto border bg-zinc-900 border-zinc-800">
      <div className="px-6 py-12 mx-auto max-w-[1400px]">
        <div className="grid grid-cols-1 gap-8 max-sm:gap-12">
          <section className="flex flex-col gap-4">
            <h3 className="text-xl font-bold text-zinc-200">Mars Explorer</h3>
            <p className="text-sm text-gray-400">
              Exploring the red planet through the eyes of NASA&apos;s rovers.
            </p>
          </section>
          <section className="flex flex-col gap-4">
            <h4 className="text-base font-semibold text-zinc-200">Explore</h4>
            <nav className="flex flex-col gap-3">
              <a href="/rovers" className="text-sm text-gray-400">
                Rovers
              </a>
              <a href="/photos" className="text-sm text-gray-400">
                Photos
              </a>
              <a href="/weather" className="text-sm text-gray-400">
                Weather
              </a>
              <a href="/about" className="text-sm text-gray-400">
                About
              </a>
            </nav>
          </section>
          <section className="flex flex-col gap-4">
            <h4 className="text-base font-semibold text-zinc-200">Resources</h4>
            <nav className="flex flex-col gap-3">
              <a href="/api" className="text-sm text-gray-400">
                API
              </a>
              <a href="/docs" className="text-sm text-gray-400">
                Documentation
              </a>
              <a href="/help" className="text-sm text-gray-400">
                Help Center
              </a>
              <a href="/terms" className="text-sm text-gray-400">
                Terms of Use
              </a>
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
              <a href="/contact" className="text-sm text-gray-400">
                Contact
              </a>
              <a href="/feedback" className="text-sm text-gray-400">
                Feedback
              </a>
            </nav>
          </section>
        </div>
        <div className="pt-8 mt-12 border-t border-zinc-800">
          <div className="flex max-sm:flex-col max-sm:gap-4">
            <p className="text-sm text-gray-400">
              © 2024 Mars Explorer. All rights reserved.
            </p>
            <div className="flex gap-6 items-center ml-auto max-sm:ml-0">
              <a href="/privacy" className="text-sm text-gray-400">
                Privacy Policy
              </a>
              <a href="/terms" className="text-sm text-gray-400">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
