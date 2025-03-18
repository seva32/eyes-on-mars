import { useEffect } from 'react'
import { signOut } from 'next-auth/react'

const SignOut = () => {
  useEffect(() => {
    signOut({ redirect: true, callbackUrl: '/' })
  }, [])

  return null
}

export default SignOut
