import { useTodoQuery } from '@/generated/graphql'
import { useRouter } from 'next/router'

export const useTodo = () => {
  const router = useRouter()
  const { id } = router.query
  const { data, loading } = useTodoQuery({
    variables: { id: id as string },
  })

  return {
    todo: data?.todo ?? null,
    loading,
  }
}
