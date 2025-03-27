import { useDeleteTodoMutation, useTodosQuery } from '@/generated/graphql'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
import { useRouter } from 'next/router'

export const TodoList = () => {
  const [deleteTodo] = useDeleteTodoMutation()
  const [todos, setTodos] = useState<{ id: string; title: string }[]>([])
  const [filterTodos, setFilterTodos] = useState('')

  const { data } = useTodosQuery()
  const router = useRouter()

  const handleDeleteTodo = (id: string) => {
    if (confirm('本当に削除しますか？')) {
      deleteTodo({ variables: { id } })
    }
  }

  const filterTodo = todos.filter((todo) =>
    todo.title.toLowerCase().includes(filterTodos.toLowerCase())
  )

  useEffect(() => {
    if (data?.todos) {
      setTodos(data.todos)
    }
  }, [data])

  return (
    <div className="w-full max-w-md mx-auto pt-16">
      <Link href="/todo/create">
        <button className="w-full bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition">
          Todoを作成
        </button>
      </Link>
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
            className="flex justify-between items-center p-4 border border-gray-300 rounded-md hover:bg-gray-50 cursor-pointer"
            onClick={() => router.push(`/todo/${todo.id}`)}
          >
            <span className="flex-grow text-lg">{todo.title}</span>
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
