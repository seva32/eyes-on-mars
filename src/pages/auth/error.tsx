import React from 'react'
import { useRouter } from 'next/router'
import { Button } from 'eyes-on-mars-ds'
import Layout from '../../components/Layout'

const ErrorPage = () => {
  const router = useRouter()
  const { error } = router.query

  const errorMessage = () => {
    switch (error) {
      case 'CredentialsSignin':
        return 'Sign in failed. Check the details you provided are correct.'
      case 'OAuthSignin':
        return 'Sign in failed. Try again later.'
      case 'OAuthCallback':
        return 'Sign in failed. Try again later.'
      case 'OAuthCreateAccount':
        return 'Sign in failed. Try again later.'
      case 'EmailCreateAccount':
        return 'Sign in failed. Try again later.'
      case 'Callback':
        return 'Sign in failed. Try again later.'
      case 'OAuthAccountNotLinked':
        return 'To confirm your identity, sign in with the same account you used originally.'
      case 'EmailSignin':
        return 'Check your email inbox for the sign in link.'
      case 'CredentialsSignin':
        return 'Sign in failed. Check the details you provided are correct.'
      case 'SessionRequired':
        return 'Please sign in to access this page.'
      default:
        return 'An unknown error occurred. Please try again later.'
    }
  }

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-2xl font-bold mb-4">Error</h1>
        <p className="text-red-500 mb-4">{errorMessage()}</p>
        <Button variant="primary" onClick={() => router.push('/auth/signin')}>
          Go to Sign In
        </Button>
      </div>
    </Layout>
  )
}

export default ErrorPage
