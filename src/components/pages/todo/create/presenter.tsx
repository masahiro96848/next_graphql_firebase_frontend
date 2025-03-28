import React from 'react'
import { useCreateTodo } from '@/components/pages/todo/create/hooks/useCreateTodo'
import { TodoCreateForm } from '@/components/pages/todo/create/components/TodoCreateForm'

export const TodoCreatePresenter = () => {
  const { handleCreateTodo } = useCreateTodo()
  return <TodoCreateForm handleCreateTodo={handleCreateTodo} />
}
