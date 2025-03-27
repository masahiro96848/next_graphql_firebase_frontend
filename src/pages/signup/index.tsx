import { NonSignInPageLayout } from '@/components/organisms/layout/NonSignInPageLayout'
import { SignUpPresenter } from '@/components/pages/signUp/presenter'

export default function SignUpPage() {
  return (
    <NonSignInPageLayout>
      <SignUpPresenter />
    </NonSignInPageLayout>
  )
}
