import { TodoFormType } from '@/common/types'
import { TodoForm } from '../../../../../shared/todo/form/TodoForm'

type TodoCreateFormProps = {
  handleCreateTodo: (input: TodoFormType) => Promise<void>
}
export const TodoCreateForm = ({ handleCreateTodo }: TodoCreateFormProps) => {
  return (
    <TodoForm
      onSubmit={handleCreateTodo}
      submitButtonText="投稿する"
      title="Todo作成"
    />
  )
}
