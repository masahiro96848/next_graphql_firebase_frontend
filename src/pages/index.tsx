import { PageRootLayout } from '@/components/organisms/layout/PageRootLayout'
import { Button } from '@/components/ui/button'
import { getAuth, signOut } from 'firebase/auth'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Page() {
  const router = useRouter()
  const auth = getAuth()

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        router.push('/signin')
      })
      .catch((error) => {
        console.error(error)
      })
  }
  return (
    <PageRootLayout>
      <div className="flex flex-col gap-8 mt-8">
        <div className="flex items-center gap-8">
          <h1>Home</h1>
          <Link href="/todo">Todo</Link>
        </div>
        <Button onClick={handleSignOut} className="w-fit">
          ログアウト
        </Button>
      </div>
    </PageRootLayout>
  )
}
