'use client'

import * as React from 'react'
import { EndpointCard } from './EndpointCard'
import { ParameterTable } from './ParameterTable'
import { CameraList } from './CameraList'
import { Button } from 'eyes-on-mars-ds'

interface ApiSectionProps {
  currentSection: string | null
  onCopy: (text: string) => void
}

export function ApiSection({ currentSection, onCopy }: ApiSectionProps) {
  const renderAuthenticationSection = () => (
    <section
      className="bg-[#1A1A1F] rounded-[12px] p-8 mb-6"
      role="tabpanel"
      aria-labelledby="authentication-tab"
      style={{
        display: currentSection === 'authentication' ? 'block' : 'none',
      }}
    >
      <h2 className="text-[#E5E5E7] text-[24px] font-semibold mb-4">
        Authentication
      </h2>
      <p className="text-[#9CA3AF] text-[14px] mb-6">
        All API requests require an API key passed in the Authorization header.
      </p>
      <div className="bg-[#0A0A0F] rounded-[8px] p-4 font-mono text-[14px] text-[#E5E5E7] flex items-center justify-between">
        <code>Authorization: Bearer YOUR_API_KEY</code>
        <Button
          variant="secondary"
          size="xs"
          onClick={() => onCopy('Authorization: Bearer YOUR_API_KEY')}
        >
          Copy
        </Button>
      </div>
    </section>
  )

  const renderRoversSection = () => (
    <section
      className="space-y-6"
      role="tabpanel"
      aria-labelledby="rovers-tab"
      style={{
        display: currentSection === 'rovers' ? 'block' : 'none',
      }}
    >
      <EndpointCard
        method="GET"
        endpoint="/api/v1/rovers"
        description="Returns a list of all Mars rovers and their current status."
        response={`{
  "rovers": [
    {
      "id": 1,
      "name": "Curiosity",
      "landing_date": "2012-08-06",
      "status": "active"
    }
  ]
}`}
        onCopy={onCopy}
      />

      <EndpointCard
        method="GET"
        endpoint="/api/v1/rovers/:id"
        description="Returns detailed information about a specific rover."
        onCopy={onCopy}
      >
        <h3 className="text-[#E5E5E7] text-[16px] font-semibold mb-4">
          Parameters
        </h3>
        <ParameterTable
          parameters={[
            {
              name: 'id',
              type: 'integer',
              description: 'Rover ID',
            },
          ]}
        />
      </EndpointCard>
    </section>
  )

  const renderPhotosSection = () => (
    <section
      className="bg-[#1A1A1F] rounded-[12px] p-8"
      role="tabpanel"
      aria-labelledby="photos-tab"
      style={{
        display: currentSection === 'photos' ? 'block' : 'none',
      }}
    >
      <div className="flex items-center gap-3 mb-6">
        <span className="bg-[#FF4D4D] text-white px-3 py-1 rounded-[4px] text-[12px] font-medium">
          GET
        </span>
        <code className="text-[#E5E5E7] font-mono text-[14px]">
          /api/v1/rovers/:id/photos
        </code>
        <Button
          variant="secondary"
          size="xs"
          onClick={() => onCopy('/api/v1/rovers/:id/photos')}
        >
          Copy
        </Button>
      </div>
      <p className="text-[#9CA3AF] text-[14px] mb-6">
        Returns photos taken by a specific rover.
      </p>
      <h3 className="text-[#E5E5E7] text-[16px] font-semibold mb-4">
        Parameters
      </h3>
      <ParameterTable
        parameters={[
          {
            name: 'sol',
            type: 'integer',
            description: 'Martian sol of photos',
          },
          {
            name: 'camera',
            type: 'string',
            description: 'Camera type (FHAZ, RHAZ, etc)',
          },
        ]}
      />
    </section>
  )

  const renderCamerasSection = () => (
    <section
      className="bg-[#1A1A1F] rounded-[12px] p-8"
      role="tabpanel"
      aria-labelledby="cameras-tab"
      style={{
        display: currentSection === 'cameras' ? 'block' : 'none',
      }}
    >
      <h2 className="text-[#E5E5E7] text-[24px] font-semibold mb-4">
        Available Cameras
      </h2>
      <CameraList
        cameras={[
          {
            code: 'FHAZ',
            name: 'Front Hazard Avoidance Camera',
          },
          {
            code: 'RHAZ',
            name: 'Rear Hazard Avoidance Camera',
          },
          {
            code: 'MAST',
            name: 'Mast Camera',
          },
          {
            code: 'CHEMCAM',
            name: 'Chemistry and Camera Complex',
          },
          {
            code: 'MAHLI',
            name: 'Mars Hand Lens Imager',
          },
          {
            code: 'MARDI',
            name: 'Mars Descent Imager',
          },
          {
            code: 'NAVCAM',
            name: 'Navigation Camera',
          },
        ]}
      />
    </section>
  )

  return (
    <article className="flex-1">
      {renderAuthenticationSection()}
      {renderRoversSection()}
      {renderPhotosSection()}
      {renderCamerasSection()}
    </article>
  )
}
