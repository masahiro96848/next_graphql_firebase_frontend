import { TodoList } from '@/components/TodoList'
import { SignInedPageLayout } from '@/components/page/layout/SignInedPageLayout'
import React from 'react'

const TodoPage = () => {
  return (
    <SignInedPageLayout>
      <TodoList />
    </SignInedPageLayout>
  )
}

export default TodoPage
