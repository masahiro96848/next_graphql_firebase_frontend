import { useSignIn } from '@/components/pages/signIn/form/hooks/useSignIn'
import { SignInForm } from './form/components/SignInForm'

export const SignInPresenter = () => {
  const { form, handleSignIn } = useSignIn()

  return <SignInForm form={form} onSubmit={handleSignIn} />
}
