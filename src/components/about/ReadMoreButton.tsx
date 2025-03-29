import React from 'react'
import { Button } from 'eyes-on-mars-ds'

interface ReadMoreButtonProps {
  isExpanded: boolean
  onClick: () => void
}

export const ReadMoreButton: React.FC<ReadMoreButtonProps> = ({
  isExpanded,
  onClick,
}) => {
  return (
    <Button
      onClick={onClick}
      // className="bg-[#FF4D4D] text-white font-semibold px-6 py-3 rounded-[8px] text-[16px] cursor-pointer"
      aria-expanded={isExpanded}
      size="lg"
    >
      {isExpanded ? 'Show Less' : 'Read More'}
    </Button>
  )
}
