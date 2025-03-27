import Link from 'next/link'
import { Button } from '@/components/atoms/button'
import { useAuth } from '@/hooks/useAuth'
import { useAuthUserContext } from '@/provider/auth/AuthUserContext'

export const Header = () => {
  const { authUser } = useAuthUserContext()
  const { firebaseSignOut } = useAuth()

  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold">
          YourLogo
        </Link>
        <nav className="flex items-center gap-4">
          {authUser ? (
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
