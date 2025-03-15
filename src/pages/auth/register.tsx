import React, { useState } from 'react'
import { Button } from 'eyes-on-mars-ds'
import Layout from '../../components/Layout'

const Signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSignup = async () => {
    setLoading(true)
    const res = await fetch('/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password, username }),
    })
    setLoading(false)
    if (res.ok) alert('Signup successful!')
  }

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-2xl font-bold mb-4">Sign Up</h1>
        <input
          type="email"
          placeholder="Email"
          className="p-2 border rounded mb-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="email"
        />
        <input
          placeholder="Username"
          className="p-2 border rounded mb-2"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          autoComplete="username"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 border rounded mb-2"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button variant="primary" onClick={handleSignup} disabled={loading}>
          {loading ? 'Signing up...' : 'Sign Up'}
        </Button>
      </div>
    </Layout>
  )
}

export default Signup
