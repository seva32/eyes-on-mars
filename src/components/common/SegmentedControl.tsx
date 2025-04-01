'use client'

import * as React from 'react'
import { useState } from 'react'
import { SegmentedControlButton } from './SegmentedControlButton'

export const SegmentedControl: React.FC = () => {
  const [selected, setSelected] = useState<string>('daily')
  const [items] = useState<string[]>([
    'daily',
    'weekly',
    'monthly',
    'quarterly',
    'yearly',
  ])
  const [hover, setHover] = useState<string | null>(null)

  const buttonWidth = `${100 / items.length}%`

  return (
    <section className="flex justify-center items-center w-full bg-zinc-950">
      <div
        className="flex relative p-0.5 rounded-lg border bg-zinc-900 border-zinc-800"
        role="tablist"
        aria-label="Time period selection"
      >
        <div
          className="absolute bg-red-500 rounded-md transition-transform duration-200 ease-in-out h-[calc(100%-4px)]"
          style={{
            transform: `translateX(${items.indexOf(selected) * 100}%)`,
            width: buttonWidth,
          }}
          aria-hidden="true"
        />
        {items.map((item) => (
          <SegmentedControlButton
            key={item}
            item={item}
            isSelected={selected === item}
            isHovered={hover === item}
            width={buttonWidth}
            onClick={() => setSelected(item)}
            onMouseEnter={() => setHover(item)}
            onMouseLeave={() => setHover(null)}
          />
        ))}
      </div>
    </section>
  )
}

export default SegmentedControl
