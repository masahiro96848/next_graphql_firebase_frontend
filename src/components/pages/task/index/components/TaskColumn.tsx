import type { TaskCard as TaskCardType } from '@/components/pages/task/index/components/TaskApp'
import TaskCard from '@/components/pages/task/index/components/TaskCard'

interface TaskColumnsProps {
  taskCards: TaskCardType[]
}

export default function TaskColumns({ taskCards }: TaskColumnsProps) {
  return (
    <div className="flex-1 p-4 overflow-x-auto">
      <div className="flex justify-between mb-4">
        <div></div>
        <button className="text-blue-500 text-sm hover:underline">
          + 新しいカードを追加
        </button>
      </div>
      <div className="flex gap-4">
        {taskCards.map((card) => (
          <TaskCard key={card.id} card={card} />
        ))}
      </div>
    </div>
  )
}
