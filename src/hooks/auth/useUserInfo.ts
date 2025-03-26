import { userFirebaseApp } from '@/lib/firebase/firebase'
import { AuthUserProps } from '@/provider/auth/AuthUserContext'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { useEffect, useState } from 'react'

type useUserInfo = () => {
  authUser: AuthUserProps['authUser'] | null
}

export const useUserInfo: useUserInfo = () => {
  const userAuth = getAuth(userFirebaseApp)
  const [authUser, setAuthUser] = useState<AuthUserProps['authUser'] | null>(
    null
  )

  useEffect(() => {
    const unsubscribed = onAuthStateChanged(userAuth, async (user) => {
      if (user) {
        setAuthUser(user)
      } else {
        setAuthUser(false)
      }
    })
    return () => {
      unsubscribed()
    }
  }, [userAuth])

  return { authUser }
}
