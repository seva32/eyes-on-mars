'use client'
import * as React from 'react'
import { PolicySection } from './PolicySection'
import { ListSection } from './ListSection'
import { ContactSection } from './ContactSection'
import { UpdateSection } from './UpdateSection'

export default function PrivacyPolicy() {
  return (
    <main className="flex flex-col p-8 w-screen bg-zinc-950 min-h-[screen] text-zinc-200">
      <article className="mx-auto w-full max-w-[800px]">
        <h1 className="mb-8 text-3xl font-bold">Privacy Policy</h1>
        <div className="flex flex-col gap-8">
          <ListSection
            title="Information We Collect"
            description="We collect basic usage data to improve your experience, including:"
            items={[
              'Browser type and version',
              'Operating system',
              'Pages visited and features used',
              'Time spent on pages',
            ]}
          />

          <ListSection
            title="How We Use Your Information"
            description="We use the collected information to:"
            items={[
              'Improve our portfolio features and user experience',
              'Fix bugs and technical issues',
              'Analyze usage patterns to optimize performance',
              'Enhance security and prevent abuse',
            ]}
          />

          <PolicySection
            title="Data Storage & Security"
            content="Your data is stored securely using industry-standard encryption. We implement appropriate technical and organizational measures to protect your information against unauthorized access, alteration, disclosure, or destruction."
          />

          <ListSection
            title="Third-Party Services"
            description="We may use third-party services that collect data, including:"
            items={[
              'Analytics providers',
              'Hosting services',
              'Content delivery networks',
            ]}
          />

          <ListSection
            title="Your Rights"
            description="You have the right to:"
            items={[
              'Access your personal data',
              'Request data deletion',
              'Object to data processing',
              'Request data portability',
            ]}
          />

          <ContactSection />
          <UpdateSection />
        </div>
      </article>
      <div>
        <div
          dangerouslySetInnerHTML={{
            __html:
              '<link href=&quot;https://fonts.googleapis.com/css2?family=Inter&display=swap&quot; rel=&quot;stylesheet&quot;>',
          }}
        />
      </div>
    </main>
  )
}
