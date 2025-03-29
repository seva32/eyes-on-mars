'use client'
import React, { useState } from 'react'
import { ReadMoreButton } from './ReadMoreButton'
import Image from 'next/image'

export const MissionOverview: React.FC = () => {
  const [showFullDescription, setShowFullDescription] = useState(false)

  return (
    <div className="flex items-start gap-[32px] max-sm:flex-col flex-wrap">
      <h2 className="text-[24px] font-semibold text-[#E5E5E7] mb-4 w-full">
        Mission Overview
      </h2>
      <p className="text-[#9CA3AF] text-[16px] leading-[1.6] mb-4">
        The Mars Photo Explorer provides unprecedented access to the visual data
        collected by NASA&#39;s Mars rovers. This tool allows researchers,
        enthusiasts, and the general public to explore the Martian landscape
        through the eyes of Curiosity, Opportunity, and Spirit rovers.
      </p>
      {showFullDescription && (
        <>
          <Image
            src="https://res.cloudinary.com/seva32/image/upload/v1742855141/uploads-eom/akgb6pu9l1irwqzhycys.png"
            alt="Mars Rover"
            width={400}
            height={300}
            className="rounded-[12px] w-[400px] max-sm:w-full object-cover self-end m-auto"
          />
          <p className="text-[#9CA3AF] text-[16px] leading-[1.6]">
            Each rover is equipped with specialized cameras that capture
            different aspects of Mars&#39; geology, atmosphere, and terrain.
            From microscopic detail to panoramic vistas, these images help
            scientists understand Mars&#39; past and present conditions while
            searching for signs of ancient microbial life.
          </p>
        </>
      )}
      <div className="flex justify-center mt-4 w-full">
        <ReadMoreButton
          isExpanded={showFullDescription}
          onClick={() => setShowFullDescription(!showFullDescription)}
        />
      </div>
    </div>
  )
}
