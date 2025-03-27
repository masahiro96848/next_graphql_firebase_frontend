import { useSignUp } from '@/components/pages/signUp/hooks/useSignUp'
import { SignUpForm } from '@/components/pages/signUp/components/form/SignUpForm'

export const SignUpPresenter = () => {
  const { form, handleSignUp } = useSignUp()

  return <SignUpForm form={form} onSubmit={handleSignUp} />
}
