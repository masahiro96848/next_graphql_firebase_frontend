import { PageRootLayout } from '@/components/organisms/layout/PageRootLayout'
import React from 'react'
import { TaskAppPresenter } from '@/components/pages/todo/presenter'

const TodoPage = () => {
  return (
    <PageRootLayout>
      <TaskAppPresenter />
    </PageRootLayout>
  )
}

export default TodoPage
