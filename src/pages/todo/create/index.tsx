import { PageRootLayout } from '@/components/organisms/layout/PageRootLayout'
import { TodoCreatePresenter } from '@/components/pages/todo/create/presenter'

const TodoCreatePage = () => {
  return (
    <PageRootLayout>
      <TodoCreatePresenter />
    </PageRootLayout>
  )
}

export default TodoCreatePage
