import { useForm } from 'react-hook-form'
import { TaskFormType } from '@/common/types'

type TaskFormProps = {
  onSubmit: (data: TaskFormType) => Promise<void>
  defaultValues?: TaskFormType
  submitButtonText: string
  title: string
}

export const TaskForm = ({
  onSubmit,
  defaultValues,
  submitButtonText,
  title,
}: TaskFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TaskFormType>({
    defaultValues,
  })

  return (
    <div className="w-full max-w-md bg-white p-8 shadow-md rounded-lg mx-auto mt-8 mb-8">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
        {title}
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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
          {submitButtonText}
        </button>
      </form>
    </div>
  )
}
