import * as React from 'react'

interface PolicySectionProps {
  title: string
  content: string
}

export function PolicySection({ title, content }: PolicySectionProps) {
  return (
    <section className="p-6 rounded-xl bg-zinc-900">
      <h2 className="mb-4 text-xl font-semibold">{title}</h2>
      <p className="leading-relaxed text-gray-400">{content}</p>
    </section>
  )
}
