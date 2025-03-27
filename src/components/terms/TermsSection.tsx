import * as React from 'react'

interface TermsSectionProps {
  title: string
  content: string
}

export const TermsSection: React.FC<TermsSectionProps> = ({
  title,
  content,
}) => {
  return (
    <article className="p-6 rounded-xl bg-zinc-900">
      <h2 className="mb-4 text-xl font-semibold">{title}</h2>
      <p className="leading-relaxed text-gray-400">{content}</p>
    </article>
  )
}
