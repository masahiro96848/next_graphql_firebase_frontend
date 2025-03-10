import { SignUpFormType } from '@/common/types'
import { useCreateUserMutation } from '@/generated/graphql'
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'

export const SignUpForm = () => {
  const router = useRouter()

  const [createUser] = useCreateUserMutation()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormType>()

  const handleCreateUser = async (data: SignUpFormType) => {
    try {
      const auth = getAuth()
      await createUserWithEmailAndPassword(auth, data.email, data.password)
      await createUser({
        variables: {
          input: {
            email: data.email,
            name: data.name,
            firebaseUId: auth.currentUser?.uid || '',
            password: data.password,
          },
        },
      })
      router.push('/')
    } catch (e) {
      if (e) {
        console.log(e)
      }
    }
  }

  return (
    <div className="w-full max-w-md bg-white p-8 shadow-md rounded-lg">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
        新規登録
      </h2>
      <form onSubmit={handleSubmit(handleCreateUser)} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            ユーザー名
          </label>
          <input
            type="text"
            {...register('name', { required: true })}
            className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        </div>
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
            <p className="text-red-500">{errors.email.message}</p>
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
            <p className="text-red-500">{errors.password.message}</p>
          )}
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
        >
          新規登録
        </button>
        <div className="text-center mt-4">
          <Link href="/signin" className="text-blue-500 hover:underline">
            既にアカウントをお持ちですか？ログイン
          </Link>
        </div>
      </form>
    </div>
  )
}
