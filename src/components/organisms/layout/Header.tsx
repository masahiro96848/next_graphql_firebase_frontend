import Link from 'next/link'
import { Button } from '@/components/atoms/button'
import { useAuth } from '@/hooks/useAuth'
import { useAuthUserContext } from '@/provider/auth/AuthUserContext'
import { Menu } from 'lucide-react'

type Props = {
  toggleSidebar?: () => void
}

export const Header = ({ toggleSidebar }: Props) => {
  const { authUser } = useAuthUserContext()
  const { firebaseSignOut } = useAuth()

  return (
    <header className="bg-sky-500 text-white p-4">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleSidebar}
            className="text-white"
          >
            <Menu className="h-5 w-5" />
          </Button>
          <div className="text-xl font-bold">ETask</div>
        </div>
        {/* デスクトップ表示時のナビゲーション */}
        <nav className="hidden md:flex items-center gap-4">
          {authUser ? (
            <>
              <Link href="#" className="hover:underline">
                TOP
              </Link>
              <Link href="#" className="hover:underline">
                タスク管理ページ
              </Link>
              <Link href="#" className="hover:underline">
                プロフィール編集
              </Link>
              <Link href="/dashboard">ダッシュボード</Link>
              <Button color="black" size="sm" onClick={() => firebaseSignOut()}>
                ログアウト
              </Button>
            </>
          ) : (
            <>
              <Button size="sm">
                <Link href="/" className="hover:underline">
                  TOP
                </Link>
              </Button>
              <Button size="sm">
                <Link href="/signin">ログイン</Link>
              </Button>
              <Button variant="outline" size="sm">
                <Link href="/signup">サインアップ</Link>
              </Button>
            </>
          )}
        </nav>
        {/* モバイル表示時のログアウトボタン */}
        <div className="md:hidden">
          {authUser && (
            <Button color="black" size="sm" onClick={() => firebaseSignOut()}>
              ログアウト
            </Button>
          )}
        </div>
      </div>
    </header>
  )
}
