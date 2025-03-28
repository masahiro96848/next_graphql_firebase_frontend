import React from 'react'
import { TodoEditForm } from '@/components/pages/todo/edit/components/TodoEditForm'
import { useUpdateTodo } from '@/components/pages/todo/edit/hooks/useUpdateTodo'
import { useEditTodo } from './hooks/useEditTodo'

export const TodoEditPresenter = () => {
  const { todo, loading } = useEditTodo()
  const { handleUpdateTodo } = useUpdateTodo()

  if (loading) {
    return <div>Loading...</div>
  }

  return <TodoEditForm todo={todo} handleUpdateTodo={handleUpdateTodo} />
}
