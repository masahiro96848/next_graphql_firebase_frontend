import { PageRootLayout } from '@/components/organisms/layout/PageRootLayout'
import { TodoEditForm } from '@/components/TodoEditForm'
import { useTodoQuery } from '@/generated/graphql'
import { useRouter } from 'next/router'
import React from 'react'

const TodoEditPage = () => {
  const router = useRouter()
  const { data, loading } = useTodoQuery({
    variables: {
      id: router.query.id as string,
    },
  })
  if (loading) return <div>Loading...</div>
  if (!data?.todo) return <div>Todo not found</div>

  return (
    <PageRootLayout>
      <TodoEditForm todo={data.todo} />
    </PageRootLayout>
  )
}

export default TodoEditPage
