import { useEffect } from 'react'
import { signOut } from 'next-auth/react'

const Logout = () => {
  useEffect(() => {
    signOut({ redirect: true, callbackUrl: '/' })
  }, [])

  return null
}

export default Logout
