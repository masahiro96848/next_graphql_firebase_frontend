import { useUpdateTodoMutation } from '@/generated/graphql'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import { TodoFormType } from '@/common/types'

type TodoEditFormProps = {
  todo: TodoFormType
}

export const TodoEditForm = ({ todo }: TodoEditFormProps) => {
  const router = useRouter()
  const [updateTodo] = useUpdateTodoMutation()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TodoFormType>({
    defaultValues: todo,
  })

  const handleUpdateTodo = async (data: TodoFormType) => {
    try {
      await updateTodo({
        variables: {
          id: todo.id as string,
          input: {
            title: data.title,
            description: data.description,
          },
        },
      })
      router.push('/todo')
    } catch (e) {
      if (e) {
        console.log(e)
      }
    }
  }

  return (
    <div className="w-full max-w-md bg-white p-8 shadow-md rounded-lg">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
        Todo編集
      </h2>
      <form onSubmit={handleSubmit(handleUpdateTodo)} className="space-y-4">
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
          更新する
        </button>
      </form>
    </div>
  )
}
