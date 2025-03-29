import React from 'react'

interface ReadMoreButtonProps {
  isExpanded: boolean
  onClick: () => void
}

export const ReadMoreButton: React.FC<ReadMoreButtonProps> = ({
  isExpanded,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className="bg-[#FF4D4D] text-white font-semibold px-6 py-3 rounded-[8px] text-[16px] cursor-pointer"
      aria-expanded={isExpanded}
    >
      {isExpanded ? 'Show Less' : 'Read More'}
    </button>
  )
}
