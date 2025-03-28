'use client'
import React, { useState } from 'react'
import { InputField } from './InputField'
import { PasswordInput } from './PasswordInput'
import { Divider } from './Divider'
import { GoogleButton } from './GoogleButton'
import { useRouter } from 'next/router'
import Link from 'next/link'

export default function SignUpForm() {
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
    if (status.error) {
      setStatus({ ...status, error: '' })
    }
    setFormData({ ...formData, [e.target.id]: e.target.value })
  }

  const handleSignup = async () => {
    const { email, password, username } = formData

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
      const res = await fetch('/api/auth-app/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, username }),
      })

      if (res.ok) {
        setStatus({ loading: false, success: 'Signup successful!', error: '' })
        setFormData({ email: '', password: '', username: '' })
        router.push('/user/profile')
      } else {
        const data = await res.json()
        setStatus({
          loading: false,
          error: data.message || 'Signup failed.',
          success: '',
        })
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
    <main className="flex justify-center items-center w-full bg-zinc-950 min-h-[screen]">
      <section className="p-8 rounded-xl border bg-zinc-900 border-zinc-800 w-[420px]">
        <h1 className="mb-6 text-2xl font-semibold text-zinc-200">
          Create your account
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
          <InputField
            id="username"
            label="Username (optional)"
            value={formData.username}
            onChange={handleChange}
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
            onClick={handleSignup}
            disabled={status.loading || !!status.error}
          >
            Create account
          </button>
          <Divider />
          <GoogleButton />
          <p className="mt-6 text-sm text-center text-gray-400">
            Already have an account?{' '}
            <Link href="/auth/signin" className="font-semibold text-red-500">
              Sign in
            </Link>
          </p>
        </form>
      </section>
    </main>
  )
}
