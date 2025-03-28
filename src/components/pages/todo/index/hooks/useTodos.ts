import {
  useDeleteTodoMutation,
  useTodosQuery,
  useUpdateCompletedMutation,
} from '@/generated/graphql'
import { Todo, TodoTabType } from '@/models/todo'
import { useCallback, useEffect, useState, useMemo } from 'react'

export const useTodos = () => {
  const { data, loading } = useTodosQuery()
  const [deleteTodo] = useDeleteTodoMutation()
  const [updateCompleted] = useUpdateCompletedMutation()
  const [todos, setTodos] = useState<Todo[]>([])
  const [filterTodos, setFilterTodos] = useState('')
  const [activeTab, setActiveTab] = useState<TodoTabType>('all')

  const handleDeleteTodo = useCallback(
    (id: string) => {
      if (confirm('本当に削除しますか？')) {
        deleteTodo({ variables: { id } })
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id))
      }
    },
    [deleteTodo]
  )

  const handleToggleCompleted = useCallback(
    async (id: string, currentCompleted: boolean) => {
      try {
        await updateCompleted({
          variables: { id, completed: !currentCompleted },
        })
      } catch (error) {
        console.error('完了状態の更新に失敗しました:', error)
      }
    },
    [updateCompleted]
  )

  const filterTodo = useMemo(() => {
    const searchTerm = filterTodos.toLowerCase()
    return todos.filter((todo) => {
      const matchesSearch = todo.title.toLowerCase().includes(searchTerm)
      if (!matchesSearch) return false

      switch (activeTab) {
        case 'completed':
          return todo.completed
        case 'active':
          return !todo.completed
        default:
          return true
      }
    })
  }, [todos, filterTodos, activeTab])

  const processedTodos = useMemo(() => {
    if (!data?.todos) return []
    return data.todos.map((todo) => ({
      ...todo,
      completed: todo.completed ?? false,
    }))
  }, [data?.todos])

  useEffect(() => {
    if (processedTodos.length > 0) {
      setTodos(processedTodos)
    }
  }, [processedTodos])

  return {
    todos: filterTodo,
    loading,
    activeTab,
    handleDeleteTodo,
    handleToggleCompleted,
    setFilterTodos,
    setActiveTab,
  }
}
