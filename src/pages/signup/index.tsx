import { NonSignInPageLayout } from '@/components/page/layout/NonSignInPageLayout'
import { SignUpForm } from '@/components/SignUpForm'

export default function SignUpPage() {
  return (
    <NonSignInPageLayout>
      <SignUpForm />
    </NonSignInPageLayout>
  )
}
