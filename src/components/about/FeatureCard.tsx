import React from 'react'

interface FeatureCardProps {
  title: string
  description: string
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
}) => {
  return (
    <article className="bg-[#252529] rounded-[12px] p-6">
      <h3 className="text-[#E5E5E7] text-[18px] font-semibold mb-2">{title}</h3>
      <p className="text-[#9CA3AF] text-[14px]">{description}</p>
    </article>
  )
}
