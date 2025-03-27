import {
  useDeleteTodoMutation,
  useTodosQuery,
  useUpdateCompletedMutation,
} from '@/generated/graphql'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
import { useRouter } from 'next/router'

type TabType = 'all' | 'completed' | 'active'

export const TodoList = () => {
  const [deleteTodo] = useDeleteTodoMutation()
  const [updateCompleted] = useUpdateCompletedMutation()
  const [todos, setTodos] = useState<
    { id: string; title: string; completed: boolean }[]
  >([])
  const [filterTodos, setFilterTodos] = useState('')
  const [activeTab, setActiveTab] = useState<TabType>('all')

  const { data } = useTodosQuery()
  const router = useRouter()

  const handleDeleteTodo = (id: string) => {
    if (confirm('本当に削除しますか？')) {
      deleteTodo({ variables: { id } })
    }
  }

  const handleToggleCompleted = async (
    id: string,
    currentCompleted: boolean
  ) => {
    try {
      await updateCompleted({
        variables: { id, completed: !currentCompleted },
      })
      if (!currentCompleted) {
        setActiveTab('completed')
      }
    } catch (error) {
      console.error('完了状態の更新に失敗しました:', error)
    }
  }

  const filterTodo = todos
    .filter((todo) =>
      todo.title.toLowerCase().includes(filterTodos.toLowerCase())
    )
    .filter((todo) => {
      if (activeTab === 'all') return true
      if (activeTab === 'completed') return todo.completed
      if (activeTab === 'active') return !todo.completed
      return true
    })

  useEffect(() => {
    if (data?.todos) {
      const todosWithCompleted = data.todos.map((todo) => ({
        ...todo,
        completed: todo.completed ?? false,
      }))
      setTodos(todosWithCompleted)
    }
  }, [data])

  return (
    <div className="w-full max-w-md mx-auto pt-16">
      <Link href="/todo/create">
        <button className="w-full bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition">
          Todoを作成
        </button>
      </Link>
      <div className="flex space-x-2 mt-4">
        <button
          className={`flex-1 py-2 px-4 rounded-md transition ${
            activeTab === 'all'
              ? 'bg-black text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
          onClick={() => setActiveTab('all')}
        >
          すべて
        </button>
        <button
          className={`flex-1 py-2 px-4 rounded-md transition ${
            activeTab === 'active'
              ? 'bg-black text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
          onClick={() => setActiveTab('active')}
        >
          未完了
        </button>
        <button
          className={`flex-1 py-2 px-4 rounded-md transition ${
            activeTab === 'completed'
              ? 'bg-black text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
          onClick={() => setActiveTab('completed')}
        >
          完了
        </button>
      </div>
      <input
        type="text"
        placeholder="検索"
        value={filterTodos}
        onChange={(e) => setFilterTodos(e.target.value)}
        className="mt-4 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <ul className="mt-4 space-y-2">
        {filterTodo.map((todo, index) => (
          <li
            key={index}
            className="flex justify-between items-center p-4 border border-gray-300 rounded-md hover:bg-gray-50"
          >
            <div className="flex items-center space-x-4 flex-grow">
              <div className="flex-shrink-0">
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() =>
                    handleToggleCompleted(todo.id, todo.completed)
                  }
                  className="w-5 h-5 rounded border-gray-300 text-black focus:ring-black"
                />
              </div>
              <div
                className="flex-grow cursor-pointer"
                onClick={() => router.push(`/todo/${todo.id}`)}
              >
                <span
                  className={`text-lg ${
                    todo.completed ? 'line-through text-gray-500' : ''
                  }`}
                >
                  {todo.title}
                </span>
              </div>
            </div>
            <div className="flex space-x-4">
              <Link
                href={`/todo/edit/${todo.id}`}
                onClick={(e) => e.stopPropagation()}
              >
                <FaEdit className="text-blue-500 cursor-pointer text-2xl hover:text-blue-600" />
              </Link>
              <FaTrash
                className="text-red-500 cursor-pointer text-2xl hover:text-red-600"
                onClick={(e) => {
                  e.stopPropagation()
                  handleDeleteTodo(todo.id)
                }}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
