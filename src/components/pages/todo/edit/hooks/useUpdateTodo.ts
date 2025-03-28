import { TodoFormType } from '@/common/types'
import { useUpdateTodoMutation } from '@/generated/graphql'
import { useRouter } from 'next/router'
import { useCallback } from 'react'

export const useUpdateTodo = () => {
  const router = useRouter()
  const [updateTodo] = useUpdateTodoMutation()

  const handleUpdateTodo = useCallback(
    async (input: TodoFormType) => {
      try {
        await updateTodo({
          variables: {
            id: input.id as string,
            input: {
              title: input.title,
              description: input.description,
            },
          },
        })
        router.push('/todo')
      } catch (e) {
        if (e) {
          console.log(e)
        }
      }
    },
    [updateTodo, router]
  )

  return { handleUpdateTodo }
}
