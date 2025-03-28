import React from 'react'
import { TodoList } from '@/components/pages/todo/index/components/list/TodoList'
import { useTodos } from '@/components/pages/todo/index/hooks/useTodos'

export const TodoListPresenter = () => {
  const {
    todos,
    loading,
    activeTab,
    handleDeleteTodo,
    handleToggleCompleted,
    setFilterTodos,
    setActiveTab,
  } = useTodos()
  return (
    <TodoList
      todos={todos}
      loading={loading}
      activeTab={activeTab}
      handleDeleteTodo={handleDeleteTodo}
      handleToggleCompleted={handleToggleCompleted}
      setFilterTodos={setFilterTodos}
      setActiveTab={setActiveTab}
    />
  )
}
