'use client'

import * as React from 'react'

interface NavigationSidebarProps {
  currentSection: string | null
  onSectionChange: (section: string) => void
}

export function NavigationSidebar({
  currentSection,
  onSectionChange,
}: NavigationSidebarProps) {
  const sections = [
    { id: 'authentication', label: 'Authentication' },
    { id: 'rovers', label: 'Rovers' },
    { id: 'photos', label: 'Photos' },
    { id: 'cameras', label: 'Cameras' },
  ]

  return (
    <nav className="w-[240px] flex-shrink-0">
      <div className="sticky top-8">
        <div className="flex flex-col gap-2" role="tablist">
          {sections.map((section) => (
            <button
              key={section.id}
              className="text-left py-2 text-[14px] hover:opacity-80"
              role="tab"
              aria-selected={currentSection === section.id}
              onClick={() => onSectionChange(section.id)}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault()
                  onSectionChange(section.id)
                }
              }}
              style={{
                color: currentSection === section.id ? '#FF4D4D' : '#9CA3AF',
              }}
            >
              {section.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}
