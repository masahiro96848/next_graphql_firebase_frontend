import React from 'react'
import { useTodo } from './hooks/useTodo'
import { TodoDetail } from '@/components/pages/todo/detail/components/TodoDetail'

export const TodoDetailPresenter = () => {
  const { todo } = useTodo()
  return <TodoDetail todo={todo} />
}
