import React from 'react'
import { signOut } from 'next-auth/react'
import { Button } from 'eyes-on-mars-ds'
import Layout from '../../components/Layout'

export function Logout() {
  return (
    <Layout>
      <h1>Logout</h1>
      <Button
        variant="primary"
        onClick={() => signOut({ redirect: false, callbackUrl: '/' })}
      >
        Signout
      </Button>
    </Layout>
  )
}

export default Logout
