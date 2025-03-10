import { getAuth, signOut } from 'firebase/auth'
import { useRouter } from 'next/router'

export const useSignIn = () => {
  const router = useRouter()
  const auth = getAuth()
  const unsubscribed = auth.onAuthStateChanged((user) => {
    if (user === null) {
      router.push('/signin')
    }
  })
  unsubscribed()
}

export const useSignOut = () => {
  const router = useRouter()
  const auth = getAuth()

  const logout = async () => {
    await signOut(auth)
      .then(() => {
        router.push('/signin')
      })
      .catch((e) => {})
  }

  return { logout }
}
