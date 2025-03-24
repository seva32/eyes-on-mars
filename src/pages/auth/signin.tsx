import React, { useState } from 'react'
import { Button } from 'eyes-on-mars-ds'
import Layout from '../../components/Layout'
import { InputField } from '../../components/common/Input'
import { useRouter } from 'next/router'
import { signIn } from 'next-auth/react'
import Image from 'next/image'

function SignIn() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
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
    const { email, password } = formData

    if (!email || !password) {
      setStatus({ ...status, error: 'Email and password are required.' })
      return
    }

    setStatus({ loading: true, error: '', success: '' })

    try {
      const response = await signIn('credentials', {
        email,
        password,
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
      <div className="flex flex-col items-center justify-center px-4 bg-transparent w-full">
        <div className="flex flex-col items-center justify-center px-4 bg-white w-fit-content p-8 rounded-lg shadow-lg">
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
          <Button
            variant="secondary"
            onClick={() => signIn('google')}
            className="cursor-pointer flex items-center justify-center border-2 border-indigo-800 p-1.5 w-80 rounded-md mt-12"
          >
            <Image
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAw1BMVEVHcEz////////9/f39/f79/f33+Pj////b3d74+fny8/P19vYAAAD////w8fH////////9/f3///8+fu7ZRCpBmEtNnVXaTDbbUz79/Pz0uCtIm1EqdO2FqPJplvDqpJ282MDifG87l0DW4fvXOBWqzrDvurbt8v55oPLkjIH00Mx0sHuRvpVpq3BrrHL2wEn51Y/4zHbw6eP4uBf86MP0sw6EpvJEhdRSie50prrFrCrsrqfqkSrssavxrDPP48yyx/Yvv4yqAAAAEnRSTlMAWZFT48ytmAumbmsCSV/Uv52LM4rJAAABN0lEQVQokY2SiXKCMBCGEUHBW5qQhGgRKopn7zq9ff+n6mZLNIAz7T/OZDdf8rO7xrL+p749Gg5Hdv8CsoOT7ApqBCU1TNYOKmrX2DpereJ1hf56LhhhjBHCFqazh0lCOOeMwW8e44Z3Nk0Y52TO+ZyQxDRGT7hH3kUQiDjRRSnWVMEH4+ShUnGzcH16/CKfl9pxYb2LomehNvLp9AWULyF2ATqw3kfRLZ6eXKEmNxA7f0Fti/BaCaC2HWNBUTjThRwBqnWsW3mTIS1aWYJtrlvBIWQ0DCne/T4Un8QhWL6K9hIo3e1pKg+TqdrxjcHv4G4o4YhMX43BW11MspRKKSlNM0y7+g9tYSpm281mO8NJBa3zU2hV52owy+oIE4lO+fl5/gkL36s93N7Adx3H9Qe9GioOlNMflcoty3IDwqwAAAAASUVORK5CYII="
              alt="Google Logo"
              width={26}
              height={26}
            />
            Sign In with Google
          </Button>
        </div>
      </div>
    </Layout>
  )
}

export default SignIn
