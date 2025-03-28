import Link from 'next/link'
import { FaEdit, FaTrash } from 'react-icons/fa'
import { useRouter } from 'next/router'
import { Todo } from '@/models/todo'

type TodoListProps = {
  todos: Todo[]
  loading: boolean
  activeTab: string
  handleDeleteTodo: (id: string) => void
  handleToggleCompleted: (id: string, completed: boolean) => void
  setFilterTodos: (value: string) => void
  setActiveTab: (tab: 'all' | 'active' | 'completed') => void
}

export const TodoList = ({
  todos,
  loading,
  activeTab,
  handleDeleteTodo,
  handleToggleCompleted,
  setFilterTodos,
  setActiveTab,
}: TodoListProps) => {
  const router = useRouter()
  if (loading) return <div>Loading...</div>

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
        onChange={(e) => setFilterTodos(e.target.value)}
        className="mt-4 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <ul className="mt-4 space-y-2">
        {todos.map((todo) => (
          <li
            key={todo.id}
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
