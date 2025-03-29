import type { Task } from './TaskApp'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Edit, X } from 'lucide-react'
import { Button } from '@/components/atoms/button'

interface TaskListProps {
  tasks: Task[]
}

export default function TaskList({ tasks }: TaskListProps) {
  // 日付をフォーマットする関数
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date
      .toLocaleString('ja-JP', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      })
      .replace(/\//g, '-')
  }

  return (
    <ScrollArea className="h-full">
      {tasks.map((task) => (
        <div key={task.id} className="p-3 border-b hover:bg-gray-50">
          <div className="flex items-center justify-between mb-1">
            <div className="flex items-center gap-2">
              <span className="text-lg">≡</span>
              <span className="text-sm">{task.title}</span>
            </div>
            <div className="flex items-center gap-1">
              <Button
                variant="ghost"
                size="icon"
                className="h-7 w-7 text-gray-400 hover:text-gray-600"
              >
                <Edit size={16} />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-7 w-7 text-gray-400 hover:text-gray-600"
              >
                <X size={16} />
              </Button>
            </div>
          </div>
          <div className="text-xs text-gray-500 ml-6">
            {formatDate(task.date)}
          </div>
        </div>
      ))}
    </ScrollArea>
  )
}
