import { TodoListPresenter } from '@/components/pages/todo/index/presenter'
import { PageRootLayout } from '@/components/organisms/layout/PageRootLayout'
import React from 'react'

const TodoPage = () => {
  return (
    <PageRootLayout>
      <TodoListPresenter />
    </PageRootLayout>
  )
}

export default TodoPage
