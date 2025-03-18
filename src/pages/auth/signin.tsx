import React, { useState } from 'react'
import { Button } from 'eyes-on-mars-ds'
import Layout from '../../components/Layout'
import { InputField } from '../../components/common/Input'
import { useRouter } from 'next/router'
import { signIn } from 'next-auth/react'

function SignIn() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    username: '',
  })
  const [status, setStatus] = useState({
    loading: false,
    error: '',
    success: '',
  })
  const router = useRouter()

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value })
  }

  const handleSignin = async (e: React.FormEvent) => {
    e.preventDefault()
    const { email, password, username } = formData

    if (!email || !password) {
      setStatus({ ...status, error: 'Email and password are required.' })
      return
    }

    setStatus({ loading: true, error: '', success: '' })

    try {
      const response = await signIn('credentials', {
        email,
        password,
        username,
        redirect: false,
        callbackUrl: `${process.env.NEXT_PUBLIC_NEXTAUTH_URL}`,
      })

      if (response?.error) {
        console.error('Sign in', response.error)
        setStatus({
          loading: false,
          error: 'Invalid credentials. Please try again.',
          success: '',
        })
      } else {
        setStatus({
          loading: false,
          error: '',
          success: 'Sign in successful!',
        })
        router.push('/user/profile')
      }
    } catch {
      setStatus({
        loading: false,
        error: 'An error occurred. Please try again.',
        success: '',
      })
    }
  }

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center h-screen px-4">
        <h1 className="text-2xl font-bold mb-6">Sign In</h1>

        {status.error && (
          <p className="text-red-500 mb-4" role="alert" aria-live="assertive">
            {status.error}
          </p>
        )}
        {status.success && (
          <p className="text-green-500 mb-4" role="status" aria-live="polite">
            {status.success}
          </p>
        )}

        <div className="w-full max-w-sm">
          <InputField
            id="email"
            label="Email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <InputField
            id="username"
            label="Username"
            value={formData.username}
            onChange={handleChange}
          />
          <InputField
            id="password"
            label="Password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <div className="mb-10" />

          <Button
            variant="primary"
            onClick={handleSignin}
            disabled={status.loading}
            style={{ width: '100%' }}
          >
            {status.loading ? 'Signing in...' : 'Sign In'}
          </Button>
        </div>
        <p className="mt-5 mb-5">Or</p>
        <Button variant="secondary" onClick={() => signIn('google')}>
          Sign In with Google
        </Button>
      </div>
    </Layout>
  )
}

export default SignIn
