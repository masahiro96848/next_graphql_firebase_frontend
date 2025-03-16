import { TodoCreateForm } from '@/components/TodoCreateForm'
import { SignInedPageLayout } from '@/components/page/layout/SignInedPageLayout'
import React from 'react'

const TodoPage = () => {
  return (
    <SignInedPageLayout>
      <TodoCreateForm />
    </SignInedPageLayout>
  )
}

export default TodoPage
