import { useForm } from 'react-hook-form'
import { useSignInMutation } from '@/generated/graphql'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { useRouter } from 'next/router'

type SignInFormValues = {
  email: string
  password: string
}

export const useSignIn = () => {
  const router = useRouter()
  const [signIn] = useSignInMutation()
  const form = useForm<SignInFormValues>({
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const handleSignIn = async (data: SignInFormValues) => {
    try {
      const auth = getAuth()
      // firebaseでログイン
      await signInWithEmailAndPassword(auth, data.email, data.password)

      await signIn({
        variables: { email: data.email, password: data.password },
      })
      router.push('/')
    } catch (error) {
      console.error(error)
    }
  }

  return {
    form,
    handleSignIn,
  }
}
