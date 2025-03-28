export type Todo = {
  id: string
  title: string
  description?: string | null
  completed: boolean
}

export type TodoTabType = 'all' | 'completed' | 'active'
