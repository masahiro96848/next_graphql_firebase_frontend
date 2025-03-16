import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { useAuth } from '@/hooks/useAuth'
import { useAuthContext } from '@/provider/auth/AuthProvider'

export const Header = () => {
  const { currentUser } = useAuthContext()
  const { firebaseSignOut } = useAuth()

  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold">
          YourLogo
        </Link>
        <nav className="flex items-center gap-4">
          {currentUser ? (
            <>
              <Button size="sm">
                <Link href="/dashboard">ダッシュボード</Link>
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => firebaseSignOut()}
              >
                ログアウト
              </Button>
            </>
          ) : (
            <>
              <Button size="sm">
                <Link href="/signin">ログイン</Link>
              </Button>
              <Button variant="outline" size="sm">
                <Link href="/signup">サインアップ</Link>
              </Button>
            </>
          )}
        </nav>
      </div>
    </header>
  )
}
