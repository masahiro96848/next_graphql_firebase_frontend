import { useTodoQuery } from '@/generated/graphql'
import { useRouter } from 'next/router'

export const useEditTodo = () => {
  const router = useRouter()
  const { id } = router.query
  const { data, loading } = useTodoQuery({
    variables: { id: id as string },
    skip: !id, // idが存在しない場合はクエリを実行しない
  })

  return {
    todo: data?.todo ?? null,
    loading,
  }
}
