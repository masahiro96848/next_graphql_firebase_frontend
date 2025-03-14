import Link from 'next/link'
import { Button } from '@/components/ui/button'

export const Header = () => {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold">
          YourLogo
        </Link>
        <nav className="flex items-center gap-4">
          <Button size="sm">
            <Link href="/signin">ログイン</Link>
          </Button>
          <Button variant="outline" size="sm">
            <Link href="/signup">サインアップ</Link>
          </Button>
        </nav>
      </div>
    </header>
  )
}
