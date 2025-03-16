import { AuthContextState, ReactNodeProps, UserType } from '@/common/types'
import { createContext, useContext, useEffect, useState } from 'react'
import { getFirebaseApp } from '@/lib/firebase/firebase'
import { getAuth, getRedirectResult } from 'firebase/auth'
import { useRouter } from 'next/router'

const AuthContext = createContext<AuthContextState>({
  currentUser: null,
})

// 認証プロバイダ
const AuthProvider = ({ children }: ReactNodeProps) => {
  const [currentUser, setCurrentUser] = useState<UserType | null>(null)

  const firebaseApp = getFirebaseApp()
  const auth = getAuth(firebaseApp)
  const router = useRouter()

  // authはnullの可能性があるので、useEffectの第二引数にauthを指定しておく
  useEffect(() => {
    const unsubscribed = auth.onAuthStateChanged((user) => {
      if (user) {
        setCurrentUser(user)
      } else {
        router.push('/signin') // 認証情報がない場合は/signinにリダイレクト
      }
      getRedirectResult(getAuth(firebaseApp))
    })
    return () => {
      // onAuthStateChangedはfirebase.Unsubscribeを返すので、ComponentがUnmountされるタイミングでUnsubscribe(登録解除)しておく
      unsubscribed()
    }
  }, [auth, firebaseApp, router])

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider }

export const useAuthContext = () => useContext(AuthContext)
