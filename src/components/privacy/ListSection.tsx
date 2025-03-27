import * as React from 'react'

interface ListSectionProps {
  title: string
  description: string
  items: string[]
}

export function ListSection({ title, description, items }: ListSectionProps) {
  return (
    <section className="p-6 rounded-xl bg-zinc-900">
      <h2 className="mb-4 text-xl font-semibold">{title}</h2>
      <p className="leading-relaxed text-gray-400">{description}</p>
      <ul className="mt-3 ml-6 list-disc text-gray-400">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </section>
  )
}
