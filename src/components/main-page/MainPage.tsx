'use client'
import * as React from 'react'
import { useState, useEffect } from 'react'
import { MarsOrb } from './MarsOrb'
import { RoverSVG } from './RoverSVG'
import { StatusIndicators } from './StatusIndicators'
import { GridBackground } from './GridBackground'
import { useRouter } from 'next/router'

export default function MarsExplorer() {
  const [showRover, setShowRover] = useState(false)
  const [showMars, setShowMars] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setShowMars(true)
      const timer2 = setTimeout(() => setShowRover(true), 800)
      return () => clearTimeout(timer2)
    }, 400)
    return () => clearTimeout(timer1)
  }, [])

  const handleBegin = () => {
    setShowRover(false)
    setShowMars(false)
    const timer1 = setTimeout(() => {
      router.push('/auth/signin')
    }, 400)
    return () => clearTimeout(timer1)
  }

  return (
    <main className="flex overflow-hidden flex-col justify-center items-center w-screen bg-zinc-950 min-h-[screen] text-zinc-200">
      <section className="flex relative flex-col items-center w-full max-w-[1200px]">
        <h1 className="relative mb-4 text-7xl font-black text-center max-sm:text-4xl">
          <span className="bg-[clip-text]">Eyes on Mars</span>
        </h1>
        <p className="mb-16 text-2xl text-center text-gray-400 max-w-[600px] max-sm:text-lg">
          Journey through the red planet&#39;s landscape through the eyes of our
          robotic explorers
        </p>

        <div className="relative w-full h-[600px] max-sm:h-[400px]">
          <MarsOrb show={showMars} />
          <RoverSVG show={showRover} />
        </div>

        <div className="flex flex-col gap-8 items-center mt-8">
          <button
            onClick={handleBegin}
            className="px-6 py-3 text-xl font-bold bg-red-500 rounded-lg transition-transform duration-300 ease-in-out hover:scale-98 focus:scale-98 cursor-pointer"
          >
            Begin Your Journey
          </button>
          <StatusIndicators />
        </div>

        <div className="max-sm:hidden absolute inset-0 m-auto w-3/4 h-1/2 overflow-hidden">
          <GridBackground />
        </div>
      </section>
    </main>
  )
}
