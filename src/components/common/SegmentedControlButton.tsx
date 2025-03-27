'use client'

import * as React from 'react'

interface SegmentedControlButtonProps {
  item: string
  isSelected: boolean
  isHovered: boolean
  width: string
  onClick: () => void
  onMouseEnter: () => void
  onMouseLeave: () => void
}

export const SegmentedControlButton: React.FC<SegmentedControlButtonProps> = ({
  item,
  isSelected,
  isHovered,
  width,
  onClick,
  onMouseEnter,
  onMouseLeave,
}) => {
  return (
    <button
      className="relative px-4 py-2 text-sm font-medium capitalize duration-200"
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{
        color: isSelected ? '#FFF' : isHovered ? '#E5E5E7' : '#9CA3AF',
        width,
      }}
      role="tab"
      aria-selected={isSelected}
      aria-label={`Select ${item} view`}
    >
      <span>{item}</span>
    </button>
  )
}
