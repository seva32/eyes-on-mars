import React from 'react'

interface ActivityCardProps {
  icon: React.ReactNode
  title: string
  time: string
}

export const ActivityCard: React.FC<ActivityCardProps> = ({
  icon,
  title,
  time,
}) => {
  return (
    <div className="bg-[#252529] p-4 rounded-[12px] border-[1px] border-[#333]">
      <div className="flex items-center gap-3">
        <div className="w-[40px] h-[40px] rounded-[8px] bg-[#FF4D4D] flex items-center justify-center">
          {icon}
        </div>
        <div>
          <p className="text-[14px]">{title}</p>
          <p className="text-[12px] text-[#9CA3AF]">{time}</p>
        </div>
      </div>
    </div>
  )
}
