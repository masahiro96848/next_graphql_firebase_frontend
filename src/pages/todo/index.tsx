import { TodoList } from '@/components/pages/todo/index/components/list/TodoList'
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
