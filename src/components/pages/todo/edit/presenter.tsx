import React from 'react'
import { TodoEditForm } from '@/components/pages/todo/edit/components/TodoEditForm'
import { useUpdateTodo } from '@/components/pages/todo/edit/hooks/useUpdateTodo'
import { useTodo } from '../detail/hooks/useTodo'

export const TodoEditPresenter = () => {
  const { todo } = useTodo()
  const { handleUpdateTodo } = useUpdateTodo()
  return <TodoEditForm todo={todo} handleUpdateTodo={handleUpdateTodo} />
}
