import * as React from 'react'

export function ContactSection() {
  return (
    <section className="p-6 rounded-xl bg-zinc-900">
      <h2 className="mb-4 text-xl font-semibold">Contact Us</h2>
      <p className="leading-relaxed text-gray-400">
        If you have any questions about this Privacy Policy, please contact us
        at:
      </p>
      <div className="mt-3">
        <a href="mailto:privacy@example.com" className="text-red-500 underline">
          privacy@example.com
        </a>
      </div>
    </section>
  )
}
