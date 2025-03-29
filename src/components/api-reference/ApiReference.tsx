'use client'

import React, { useEffect } from 'react'
import { useState } from 'react'
import { NavigationSidebar } from './NavigationSidebar'
import { ApiSection } from './ApiSection'

export default function ApiReference() {
  const [currentSection, setCurrentSection] = useState<string | null>(null)
  const [copyEndpoint, setCopyEndpoint] = useState<string | null>(null)

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(
      () => {
        alert('Copied to clipboard')
      },
      (err) => {
        console.error('Failed to copy text:', err)
      },
    )
  }

  useEffect(() => {
    if (copyEndpoint) {
      copyToClipboard(copyEndpoint)
    }
  }, [copyEndpoint])

  return (
    <main className="flex flex-col w-full bg-[#0A0A0F]">
      <div className="w-full max-w-[1200px] mx-auto p-8">
        <header className="mb-12">
          <h1 className="text-[32px] font-bold text-[#E5E5E7]">
            API Reference
          </h1>
          <p className="text-[#9CA3AF] mt-2">
            Complete documentation for the Mars Rover API
          </p>
        </header>

        <div className="flex gap-8">
          <NavigationSidebar
            currentSection={currentSection}
            onSectionChange={setCurrentSection}
          />

          <ApiSection
            currentSection={currentSection}
            onCopy={setCopyEndpoint}
          />
        </div>
      </div>
    </main>
  )
}
