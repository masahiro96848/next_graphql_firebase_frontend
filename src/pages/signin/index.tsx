import { NonSignInPageLayout } from '@/components/page/layout/SignInPageLayout'
import { SignInForm } from '@/components/SignInForm'

export default function SignInPage() {
  return (
    <NonSignInPageLayout>
      <SignInForm />
    </NonSignInPageLayout>
  )
}
