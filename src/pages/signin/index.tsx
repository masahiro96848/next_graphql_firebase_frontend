import { NonSignInPageLayout } from '@/components/organisms/layout/NonSignInPageLayout'
import { SignInPresenter } from '@/components/pages/signIn/presenter'

export default function SignInPage() {
  return (
    <NonSignInPageLayout>
      <SignInPresenter />
    </NonSignInPageLayout>
  )
}
