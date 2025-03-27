import { TodoList } from '@/components/TodoList'
import { PageRootLayout } from '@/components/organisms/layout/PageRootLayout'
import React from 'react'

const TodoPage = () => {
  return (
    <PageRootLayout>
      <TodoList />
    </PageRootLayout>
  )
}

export default TodoPage
