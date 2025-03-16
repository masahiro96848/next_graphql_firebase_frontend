import { getAuth, signOut } from 'firebase/auth'
import { useRouter } from 'next/router'

export const useAuth = () => {
  const router = useRouter()
  const auth = getAuth()

  const useSignIn = () => {
    const unsubscribed = auth.onAuthStateChanged((user) => {
      if (user === null) {
        router.push('/signin')
      }
    })
    unsubscribed()
  }

  const firebaseSignOut = async () => {
    await signOut(auth)
      .then(() => {
        router.push('/signin')
      })
      .catch(() => {})
  }

  return { useSignIn, firebaseSignOut }
}
