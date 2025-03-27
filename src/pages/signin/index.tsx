import { NonSignInPageLayout } from '@/components/organisms/layout/NonSignInPageLayout'
import { SignInForm } from '@/components/SignInForm'

export default function SignInPage() {
  return (
    <NonSignInPageLayout>
      <SignInForm />
    </NonSignInPageLayout>
  )
}
