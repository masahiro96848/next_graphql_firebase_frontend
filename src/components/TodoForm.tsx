import { useCreateTodoMutation } from '@/generated/graphql'
import { getAuth } from 'firebase/auth'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import { TodoType } from '@/common/types'
export const TodoForm = () => {
  const router = useRouter()
  const [createTodo] = useCreateTodoMutation()

  const auth = getAuth()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TodoType>()

  const handleCreateTodo = async (data: TodoType) => {
    try {
      await createTodo({
        variables: {
          input: {
            title: data.title,
            description: data.description,
            userId: auth.currentUser?.uid || '',
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
        Todo作成
      </h2>
      <form onSubmit={handleSubmit(handleCreateTodo)} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            タイトル
          </label>
          <input
            type="text"
            {...register('title', { required: true })}
            className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.title && (
            <p className="text-red-500">{errors.title.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            内容
          </label>
          <textarea
            {...register('description', { required: true })}
            className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.description && (
            <p className="text-red-500">{errors.description.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition"
        >
          投稿する
        </button>
      </form>
    </div>
  )
}
