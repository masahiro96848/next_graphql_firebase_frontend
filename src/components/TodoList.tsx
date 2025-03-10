import { useTodoQuery } from '@/generated/graphql'
import Link from 'next/link'
import { useState } from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'

export const TodoList = () => {
  const [todos, setTodos] = useState<{ title: string }[]>([
    { title: 'ダミーTodo 1' },
    { title: 'ダミーTodo 2' },
    { title: 'ダミーTodo 3' },
  ])
  const [searchTerm, setSearchTerm] = useState('')

  const { data } = useTodoQuery()

  const handleDelete = (index: number) => {
    const newTodos = todos.filter((_, i) => i !== index)
    setTodos(newTodos)
  }

  const filteredTodos = todos.filter((todo) =>
    todo.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="w-full max-w-md mx-auto">
      <Link href="/todo/create">
        <button className="w-full bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition">
          Todoを作成
        </button>
      </Link>
      <input
        type="text"
        placeholder="検索"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mt-4 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <ul className="mt-4 space-y-2">
        {filteredTodos.map((todo, index) => (
          <li
            key={index}
            className="flex justify-between items-center p-2 border border-gray-300 rounded-md"
          >
            <span>{todo.title}</span>
            <div className="flex space-x-2">
              <FaEdit className="text-blue-500 cursor-pointer" />
              <FaTrash
                className="text-red-500 cursor-pointer"
                onClick={() => handleDelete(index)}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
