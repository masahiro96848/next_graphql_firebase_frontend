import { PageRootLayout } from '@/components/page/layout/PageRootLayout'
import { TodoDetailForm } from '@/components/TodoDetailForm'
import { useRouter } from 'next/router'
import React from 'react'

const TodoDetailPage = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <PageRootLayout>
      <TodoDetailForm id={id as string} />
    </PageRootLayout>
  )
}

export default TodoDetailPage
