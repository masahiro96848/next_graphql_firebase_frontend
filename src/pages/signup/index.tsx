import { NonSignInPageLayout } from '@/components/page/layout/SignInPageLayout'
import { SignUpForm } from '@/components/SignUpForm'

export default function SignUpPage() {
  return (
    <NonSignInPageLayout>
      <SignUpForm />
    </NonSignInPageLayout>
  )
}
