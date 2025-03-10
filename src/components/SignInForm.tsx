import Link from 'next/link'
import { useForm } from 'react-hook-form'

export const SignInForm = () => {
  const { register } = useForm()

  return (
    <div className="w-full max-w-md bg-white p-8 shadow-md rounded-lg">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
        ログイン
      </h2>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            メールアドレス
          </label>
          <input
            type="email"
            {...register('email', { required: true })}
            className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
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
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
        >
          ログイン
        </button>
      </form>
      <div className="text-center mt-4">
        <Link href="/signup" className="text-blue-500 hover:underline">
          アカウントをお持ちでない方はこちら
        </Link>
      </div>
    </div>
  )
}
