import { X } from 'lucide-react'
import type { TaskCardType } from './TaskApp'
import TaskList from '@/components/pages/task/index/components/TaskList'
import { Card, CardContent, CardHeader } from '@/components/atoms/card'
import { Button } from '@/components/atoms/button'

interface TaskCardProps {
  card: TaskCardType
}

export default function TaskCard({ card }: TaskCardProps) {
  return (
    <Card className="w-80 flex flex-col">
      <CardHeader className="p-3 border-b flex flex-row items-center justify-between space-y-0">
        <div className="flex items-center gap-2">
          <span className="text-lg">≡</span>
          <h3 className="font-medium">
            {card.title} <span className="text-gray-500">{card.count}</span>
          </h3>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 text-gray-400 hover:text-gray-600"
        >
          <X size={18} />
        </Button>
      </CardHeader>
      <CardContent className="p-0 flex-1 overflow-y-auto max-h-[calc(100vh-200px)]">
        <TaskList tasks={card.tasks} />
      </CardContent>
    </Card>
  )
}
