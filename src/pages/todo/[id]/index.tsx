import { PageRootLayout } from '@/components/organisms/layout/PageRootLayout'
import { TodoDetailPresenter } from '@/components/pages/todo/detail/presenter'
import React from 'react'

const TodoDetailPage = () => {
  return (
    <PageRootLayout>
      <TodoDetailPresenter />
    </PageRootLayout>
  )
}

export default TodoDetailPage
