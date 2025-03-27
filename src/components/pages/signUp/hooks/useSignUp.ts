import { useForm } from 'react-hook-form'
import { useSignUpMutation } from '@/generated/graphql'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { useRouter } from 'next/router'

type SignUpFormValues = {
  email: string
  password: string
  confirmPassword: string
}

export const useSignUp = () => {
  const router = useRouter()
  const [signUp] = useSignUpMutation()
  const form = useForm<SignUpFormValues>({
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
  })

  const handleSignUp = async (data: SignUpFormValues) => {
    try {
      if (data.password !== data.confirmPassword) {
        form.setError('confirmPassword', {
          type: 'manual',
          message: 'パスワードが一致しません',
        })
        return
      }

      const auth = getAuth()
      // firebaseでユーザー作成
      await createUserWithEmailAndPassword(auth, data.email, data.password)

      await signUp({
        variables: {
          input: {
            name: '', // データはないので空文字
            email: data.email,
            password: data.password,
            firebaseUId: auth.currentUser?.uid ?? '',
          },
        },
      })
      router.push('/')
    } catch (error) {
      console.error(error)
    }
  }

  return {
    form,
    handleSignUp,
  }
}
