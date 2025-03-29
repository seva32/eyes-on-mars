'use client'
import React from 'react'
import { MissionOverview } from './MissionOverview'
import { FeatureCard } from './FeatureCard'

export const About: React.FC = () => {
  return (
    <main className="min-h-screen w-screen bg-[#0A0A0F] p-8">
      <article className="max-w-[1200px] mx-auto">
        <h1 className="text-[32px] font-bold text-[#E5E5E7] mb-8">
          About Mars Photo Explorer
        </h1>
        <section className="bg-[#1A1A1F] rounded-[12px] p-8">
          <div className="flex flex-col gap-[24px]">
            <MissionOverview />
            <div className="grid grid-cols-3 gap-[24px] max-lg:grid-cols-2 max-sm:grid-cols-1">
              <FeatureCard
                title="Image Database"
                description="Over 1 million photos collected from three Mars rovers spanning nearly two decades of exploration"
              />
              <FeatureCard
                title="Camera Systems"
                description="Multiple specialized camera systems including navigation, hazard avoidance, and high-resolution scientific imaging"
              />
              <FeatureCard
                title="Daily Updates"
                description="New images added daily as rovers continue their mission of exploration and discovery"
              />
            </div>
          </div>
        </section>
      </article>
    </main>
  )
}

export default About
