import { NonSignInPageLayout } from '@/components/organisms/layout/NonSignInPageLayout'
import { SignUpForm } from '@/components/SignUpForm'

export default function SignUpPage() {
  return (
    <NonSignInPageLayout>
      <SignUpForm />
    </NonSignInPageLayout>
  )
}
