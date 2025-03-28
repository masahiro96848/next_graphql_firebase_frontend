import { TodoFormType } from '@/common/types'
import { useCreateTodoMutation } from '@/generated/graphql'
import { useRouter } from 'next/router'
import { useCallback } from 'react'

export const useCreateTodo = () => {
  const router = useRouter()
  const [createTodo] = useCreateTodoMutation()

  const handleCreateTodo = useCallback(
    async (input: TodoFormType) => {
      try {
        await createTodo({
          variables: {
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
    [createTodo, router]
  )

  return { handleCreateTodo }
}
