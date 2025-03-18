import React from 'react'
import { SessionProvider, useSession, getSession } from 'next-auth/react'

import type { AppProps } from 'next/app'
import type { NextComponentType } from 'next'

import '../styles/globals.css'

function Auth({ children }) {
  const { status } = useSession({ required: true })

  if (status === 'loading') {
    return <div>Loading...</div>
  }

  return children
}

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps & { Component: NextComponentType & { auth?: boolean } }) {
  return (
    <SessionProvider
      session={session}
      refetchInterval={5 * 60}
      refetchOnWindowFocus={true}
    >
      {Component.auth ? (
        <Auth>
          <Component {...pageProps} />
        </Auth>
      ) : (
        <Component {...pageProps} />
      )}
    </SessionProvider>
  )
}

App.getInitialProps = async ({ ctx }) => {
  const session = await getSession(ctx)
  return {
    pageProps: {
      session,
    },
  }
}
