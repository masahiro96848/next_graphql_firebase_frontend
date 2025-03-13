import { Header } from '@/components/nav/Header'
import { SignInForm } from '@/components/SignInForm'

export default function SignInPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center p-8">
        <SignInForm />
      </main>
    </div>
  )
}
