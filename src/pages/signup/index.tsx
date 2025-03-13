import { Header } from '@/components/nav/Header'
import { SignUpForm } from '@/components/SignUpForm'

export default function SignUpPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center p-8">
        <SignUpForm />
      </main>
    </div>
  )
}
