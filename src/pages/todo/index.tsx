import { TodoList } from '@/components/TodoList'
import React from 'react'

const TodoPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <TodoList />
    </div>
  )
}

export default TodoPage
