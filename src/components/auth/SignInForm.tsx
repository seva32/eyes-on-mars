'use client'
import React, { useState, useEffect } from 'react'
import { InputField } from './InputField'
import { PasswordInput } from './PasswordInput'
import { Divider } from './Divider'
import { GoogleButton } from './GoogleButton'
import { useRouter } from 'next/router'
import { signIn, useSession } from 'next-auth/react'
import Link from 'next/link'

export default function SignUpForm() {
  const { status: sessionStatus } = useSession()
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

  useEffect(() => {
    if (sessionStatus === 'authenticated') {
      router.push('/user/profile')
    }
  }, [sessionStatus, router])

  const handleChange = (e) => {
    if (status.error) {
      setStatus({ ...status, error: '' })
    }
    setFormData({ ...formData, [e.target.id]: e.target.value })
  }

  const handleSignin = async (e: React.FormEvent) => {
    e.preventDefault()
    const { email, password } = formData

    if (!email || !password) {
      setStatus({ ...status, error: 'Email and password are required.' })
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setStatus({ ...status, error: 'Invalid email format.' })
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
    <main className="flex justify-center items-center w-screen bg-zinc-950 min-h-[screen]">
      <section className="p-8 rounded-xl border bg-zinc-900 border-zinc-800 w-[420px]">
        <h1 className="mb-6 text-2xl font-semibold text-zinc-200">
          Enter to your account
        </h1>
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
        <form className="flex flex-col gap-4">
          <InputField
            id="email"
            label="Email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <PasswordInput
            id="password"
            label="Password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button
            type="button"
            className={`mt-2 w-full h-12 text-base font-semibold text-white rounded-lg ${
              status.loading || status.error
                ? 'bg-gray-500 cursor-not-allowed'
                : 'bg-red-500 cursor-pointer'
            }`}
            onClick={handleSignin}
            disabled={status.loading || !!status.error}
          >
            Sign in
          </button>
          <Divider />
          <GoogleButton />
          <p className="mt-6 text-sm text-center text-gray-400">
            Don&apos;t have an account?{' '}
            <Link href="/auth/signup" className="font-semibold text-red-500">
              Sign up
            </Link>
          </p>
        </form>
      </section>
    </main>
  )
}
