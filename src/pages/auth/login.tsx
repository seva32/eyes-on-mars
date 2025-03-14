import React, { useState } from 'react'
import { Button } from 'eyes-on-mars-ds'
import { signIn } from 'next-auth/react'
import Layout from '../../components/Layout'

const Login = () => {
  const [loading, setLoading] = useState(false)

  const handleLogin = async () => {
    setLoading(true)
    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: 'user@example.com', // Replace with actual email input value
        password: 'password123', // Replace with actual password input value
      }),
    })

    if (res.ok) {
      await signIn('credentials', { redirect: true, callbackUrl: '/' })
    } else {
      // Handle login error
      console.error('Login failed')
    }

    setLoading(false)
  }

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-2xl font-bold mb-4">Login into your account</h1>
        <Button variant="primary" onClick={handleLogin} disabled={loading}>
          {loading ? 'Logging in...' : 'Login with Email'}
        </Button>
        <p className="mt-2">Or</p>
        <Button variant="secondary" onClick={() => signIn('google')}>
          Login with Google
        </Button>
      </div>
    </Layout>
  )
}

export default Login
