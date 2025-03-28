import { TodoFormType } from '@/common/types'
import { TodoForm } from '@/shared/todo/form/TodoForm'

type TodoEditFormProps = {
  todo: TodoFormType | null
  handleUpdateTodo: (input: TodoFormType) => Promise<void>
}

export const TodoEditForm = ({ todo, handleUpdateTodo }: TodoEditFormProps) => {
  return (
    <TodoForm
      onSubmit={handleUpdateTodo}
      defaultValues={todo ?? undefined}
      submitButtonText="更新する"
      title="Todo編集"
    />
  )
}
