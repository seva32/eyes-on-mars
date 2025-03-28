import React from 'react'
import { useProfile } from '../../contexts/profileContext'
import { daysFromNow } from '../../utils/daysFromNow'

export const MissionStats = () => {
  const { user } = useProfile()

  return (
    <section className="bg-[#252529] p-6 rounded-[12px] border-[1px] border-[#333]">
      <h3 className="font-semibold mb-4">Mission Stats</h3>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-[#1A1A1F] p-4 rounded-[8px] border-[1px] border-[#333]">
          <p className="text-[#9CA3AF] text-[14px]">Photos Analyzed</p>
          <p className="text-[24px] font-bold">
            {user?.favoritePhotos?.length || 0}
          </p>
        </div>
        <div className="bg-[#1A1A1F] p-4 rounded-[8px] border-[1px] border-[#333]">
          <p className="text-[#9CA3AF] text-[14px]">Sol Days Active</p>
          <p className="text-[24px] font-bold">
            {daysFromNow(user?.createdAt) || '--'}
          </p>
        </div>
      </div>
    </section>
  )
}
