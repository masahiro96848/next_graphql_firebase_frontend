import { useSignOut } from '@/hooks/useAuth'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Home() {
  const auth = getAuth()
  const [email, setEmail] = useState<string | null>(null)
  const { logout } = useSignOut()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setEmail(user.email)
      } else {
        setEmail(null)
      }
    })

    return () => unsubscribe()
  }, [auth])

  return (
    <div>
      <h1>Hello World</h1>
      {email}
      <Link href="/todo/create">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
          Todoを作成
        </button>
        <button
          className="bg-black text-white px-4 py-2 rounded-md"
          onClick={logout}
        >
          ログアウト
        </button>
      </Link>
    </div>
  )
}
