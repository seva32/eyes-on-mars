'use client'
import * as React from 'react'
import { useState, useEffect } from 'react'
import { MarsOrb } from './MarsOrb'
import { RoverSVG } from './RoverSVG'
import { StatusIndicators } from './StatusIndicators'
import { GridBackground } from './GridBackground'
import { GradientLines } from './GradientLines'

export default function MarsExplorer() {
  const [showRover, setShowRover] = useState(false)
  const [showMars, setShowMars] = useState(false)

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setShowMars(true)
      const timer2 = setTimeout(() => setShowRover(true), 800)
      return () => clearTimeout(timer2)
    }, 400)
    return () => clearTimeout(timer1)
  }, [])

  return (
    <main className="flex overflow-hidden flex-col justify-center items-center w-screen bg-zinc-950 min-h-[screen] text-zinc-200">
      <section className="flex relative flex-col items-center w-full max-w-[1200px]">
        <h1 className="relative mb-4 text-7xl font-black text-center max-sm:text-4xl">
          <span className="bg-[clip-text]">Mars Explorer</span>
        </h1>
        <p className="mb-16 text-2xl text-center text-gray-400 max-w-[600px] max-sm:text-lg">
          Journey through the red planet&#39;s landscape through the eyes of our
          robotic explorers
        </p>

        <div className="relative w-full h-[600px] max-sm:h-[400px]">
          <MarsOrb show={showMars} />
          <RoverSVG show={showRover} />
          <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t h-[100px]" />
        </div>

        <div className="flex flex-col gap-8 items-center mt-8">
          <button className="px-6 py-3 text-xl font-bold bg-red-500 rounded-lg transition-transform duration-300 ease-in-out hover:scale-98 focus:scale-98">
            Begin Your Journey
          </button>
          <StatusIndicators />
        </div>

        <GradientLines />
        <GridBackground />
      </section>
    </main>
  )
}
