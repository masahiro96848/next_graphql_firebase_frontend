import { useForm } from 'react-hook-form'

export const TodoForm = () => {
  const { register } = useForm()

  return (
    <div className="w-full max-w-md bg-white p-8 shadow-md rounded-lg">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
        Todo作成
      </h2>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            タイトル
          </label>
          <input
            type="text"
            {...register('title', { required: true })}
            className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            内容
          </label>
          <textarea
            {...register('content', { required: true })}
            className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
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
