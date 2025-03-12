import { AuthContextState, ReactNodeProps, UserType } from '@/common/types'
import { createContext, useContext, useEffect, useState } from 'react'
import { getFirebaseApp } from '../firebase'
import { getAuth, getRedirectResult } from 'firebase/auth'
import { useRouter } from 'next/router'

const FirebaseAuthContext = createContext<AuthContextState>({
  currentUser: null,
})

// 認証プロバイダ
const FirebaseAuthProvider = ({ children }: ReactNodeProps) => {
  const [currentUser, setCurrentUser] = useState<UserType | null>(null)

  const firebaseApp = getFirebaseApp()
  const auth = getAuth(firebaseApp)
  const router = useRouter()

  // authはnullの可能性があるので、useEffectの第二引数にauthを指定しておく
  useEffect(() => {
    const unsubscribed = auth.onAuthStateChanged((user) => {
      if (user) {
        setCurrentUser(user)
      }
      getRedirectResult(getAuth(firebaseApp))
    })
    return () => {
      // onAuthStateChangedはfirebase.Unsubscribeを返すので、ComponentがUnmountされるタイミングでUnsubscribe(登録解除)しておく
      unsubscribed()
    }
  }, [auth, firebaseApp, router])

  return (
    <FirebaseAuthContext.Provider value={{ currentUser }}>
      {children}
    </FirebaseAuthContext.Provider>
  )
}

export { FirebaseAuthContext, FirebaseAuthProvider }

export const useFirebaseAuthContext = () => useContext(FirebaseAuthContext)
