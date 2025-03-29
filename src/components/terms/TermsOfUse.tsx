'use client'
import * as React from 'react'
import { TermsSection } from './TermsSection'
import { LastUpdated } from './LastUpdated'
import { FontLoader } from './FontLoader'

export const TermsOfUse: React.FC = () => {
  const termsData = [
    {
      title: '1. Agreement to Terms',
      content:
        'By accessing and using this portfolio application, you agree to be bound by these Terms of Use. This is a non-commercial demonstration project created to showcase development skills with Next.js and Tailwind CSS.',
    },
    {
      title: '2. Intellectual Property',
      content:
        'All content, features, and functionality of this application are owned by the developer and are protected by international copyright, trademark, and other intellectual property laws. This is a portfolio piece and may not be used for commercial purposes.',
    },
    {
      title: '3. Use License',
      content:
        'Permission is granted to temporarily view and interact with this application for portfolio demonstration purposes only. This is the grant of a license, not a transfer of title.',
    },
    {
      title: '4. Disclaimer',
      content:
        "This application is provided on an 'as is' basis. No warranties of any kind are expressed or implied. The developer does not warrant that the application will be error-free or uninterrupted.",
    },
    {
      title: '5. Limitations',
      content:
        'In no event shall the developer be liable for any damages arising out of the use or inability to use this application. This is a demonstration project and should not be used for critical operations.',
    },
    {
      title: '6. Contact Information',
      content:
        'For any questions about these Terms of Use, please contact the developer through the provided contact information in the portfolio.',
    },
  ]

  return (
    <>
      <main className="flex flex-col p-8 w-full bg-zinc-950 text-zinc-200">
        <div className="mx-auto w-full max-w-[800px]">
          <header>
            <h1 className="mb-8 text-3xl font-bold">Terms of Use</h1>
          </header>
          <section className="flex flex-col gap-8">
            {termsData.map((term, index) => (
              <TermsSection
                key={index}
                title={term.title}
                content={term.content}
              />
            ))}
            <LastUpdated />
          </section>
        </div>
      </main>
      <FontLoader />
    </>
  )
}

export default TermsOfUse
