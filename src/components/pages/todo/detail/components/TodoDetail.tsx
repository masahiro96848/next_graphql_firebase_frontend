import { Todo } from '@/models/todo'
import React from 'react'

type TodoDetailProps = {
  todo: Todo | null
}

export const TodoDetail = ({ todo }: TodoDetailProps) => {
  return (
    <div className="w-full max-w-md bg-white p-8 shadow-md rounded-lg mx-auto mt-8 mb-8">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
        Todo詳細
      </h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            タイトル
          </label>
          <div className="mt-1 w-full p-2 border border-gray-300 rounded-md bg-gray-50">
            {todo?.title}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            内容
          </label>
          <div className="mt-1 w-full p-2 border border-gray-300 rounded-md bg-gray-50 min-h-[100px]">
            {todo?.description}
          </div>
        </div>
      </div>
    </div>
  )
}
