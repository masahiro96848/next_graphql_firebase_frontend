import {
  useDeleteTodoMutation,
  useTodosQuery,
  useUpdateCompletedMutation,
} from '@/generated/graphql'
import { useEffect, useState } from 'react'

type TabType = 'all' | 'completed' | 'active'

export const useTodos = () => {
  const { data, loading, error } = useTodosQuery()
  const [deleteTodo] = useDeleteTodoMutation()
  const [updateCompleted] = useUpdateCompletedMutation()
  const [todos, setTodos] = useState<
    { id: string; title: string; completed: boolean }[]
  >([])
  const [filterTodos, setFilterTodos] = useState('')
  const [activeTab, setActiveTab] = useState<TabType>('all')

  const handleDeleteTodo = (id: string) => {
    if (confirm('本当に削除しますか？')) {
      deleteTodo({ variables: { id } })
    }
  }

  const handleToggleCompleted = async (
    id: string,
    currentCompleted: boolean
  ) => {
    try {
      await updateCompleted({
        variables: { id, completed: !currentCompleted },
      })
      if (!currentCompleted) {
        setActiveTab('completed')
      }
    } catch (error) {
      console.error('完了状態の更新に失敗しました:', error)
    }
  }

  const filterTodo = todos
    .filter((todo) =>
      todo.title.toLowerCase().includes(filterTodos.toLowerCase())
    )
    .filter((todo) => {
      if (activeTab === 'all') return true
      if (activeTab === 'completed') return todo.completed
      if (activeTab === 'active') return !todo.completed
      return true
    })

  useEffect(() => {
    if (data?.todos) {
      const todosWithCompleted = data.todos.map((todo) => ({
        ...todo,
        completed: todo.completed ?? false,
      }))
      setTodos(todosWithCompleted)
    }
  }, [data])

  return {
    todos: filterTodo,
    loading,
    error,
    handleDeleteTodo,
    handleToggleCompleted,
    setFilterTodos,
    setActiveTab,
    activeTab,
  }
}
