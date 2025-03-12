import { SignInFormType } from '@/common/types'
import { FirebaseError } from 'firebase/app'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import { Button } from './ui/button'

export const SignInForm = () => {
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormType>()

  const handleSignIn = async (data: SignInFormType) => {
    try {
      const auth = getAuth()
      await signInWithEmailAndPassword(auth, data.email, data.password)
      router.push('/todo')
    } catch (e) {
      if (e instanceof FirebaseError) {
        console.log(e)
      }
    }
  }

  return (
    <div className="w-full max-w-md bg-white p-8 shadow-md rounded-lg">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
        ログイン
      </h2>
      <form onSubmit={handleSubmit(handleSignIn)} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            メールアドレス
          </label>
          <input
            type="email"
            {...register('email', { required: true })}
            className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">
              メールアドレスを入力してください
            </p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            パスワード
          </label>
          <input
            type="password"
            {...register('password', { required: true })}
            className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.password && (
            <p className="text-red-500 text-sm">パスワードを入力してください</p>
          )}
        </div>
        <Button>ログイン</Button>
      </form>
      <div className="text-center mt-4">
        <Link href="/signup" className="text-blue-500 hover:underline">
          アカウントをお持ちでない方はこちら
        </Link>
      </div>
    </div>
  )
}
