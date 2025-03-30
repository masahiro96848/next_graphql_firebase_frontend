import { PageRootLayout } from '@/components/organisms/layout/PageRootLayout'
import React from 'react'
import { TaskAppPresenter } from '@/components/pages/task/index/presenter'

const TaskPage = () => {
  return (
    <PageRootLayout>
      <TaskAppPresenter />
    </PageRootLayout>
  )
}

export default TaskPage
