import { GuestPageLayout } from '@/components/page/layout/GuestPageLayout'
import { Button } from '@/components/ui/button'
import { getAuth, signOut } from 'firebase/auth'
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
    <GuestPageLayout>
      <h1>Home</h1>
      <Button onClick={handleSignOut}>ログアウト</Button>
    </GuestPageLayout>
  )
}
