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
          <Link href="/">ホーム</Link>
          <Link href="/about">会社概要</Link>
          <Link href="/contact">お問い合わせ</Link>
          <Button variant="outline" size="sm">
            サインアップ
          </Button>
        </nav>
      </div>
    </header>
  )
}
