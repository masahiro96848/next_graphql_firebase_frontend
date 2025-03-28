import { PageRootLayout } from '@/components/organisms/layout/PageRootLayout'
import { TodoEditPresenter } from '@/components/pages/todo/edit/presenter'
import React from 'react'

const TodoEditPage = () => {
  return (
    <PageRootLayout>
      <TodoEditPresenter />
    </PageRootLayout>
  )
}

export default TodoEditPage
