import { useSignOut } from '@/hooks/useAuth'
import Link from 'next/link'

export default function Home() {
  const { logout } = useSignOut()

  return (
    <div>
      <h1>Hello World</h1>

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
