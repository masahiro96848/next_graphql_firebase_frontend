import { TodoCreateForm } from '@/components/TodoCreateForm'
import { PageRootLayout } from '@/components/page/layout/PageRootLayout'
import React from 'react'

const TodoPage = () => {
  return (
    <PageRootLayout>
      <TodoCreateForm />
    </PageRootLayout>
  )
}

export default TodoPage
