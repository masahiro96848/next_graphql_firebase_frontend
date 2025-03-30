import type { Folder } from '@/components/pages/todo/TaskApp'
import { Button } from '@/components/atoms/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import TaskFolder from '@/components/pages/todo/TaskFolder'
import { cn } from '@/lib/utils'

type SidebarProps = {
  isOpen: boolean
  folders: Folder[]
}

export default function Sidebar({ isOpen, folders }: SidebarProps) {
  return (
    <div
      className={cn(
        'border-r bg-white transition-all duration-300 ease-in-out',
        isOpen ? 'w-64' : 'w-0 overflow-hidden'
      )}
    >
      <ScrollArea className="h-full">
        <div className="p-4">
          <div className="flex items-center gap-2 p-4 border-b mb-4">
            <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
              <span className="text-xs">ゲスト</span>
            </div>
            <div className="text-sm">ゲストユーザー</div>
          </div>

          <Button
            variant="outline"
            className="mb-4 w-full justify-start text-blue-500 border-blue-500"
          >
            <span className="mr-2">+</span>
            新しいフォルダを追加
          </Button>

          <div className="space-y-2">
            {folders.map((folder) => (
              <TaskFolder key={folder.id} folder={folder} />
            ))}
          </div>
        </div>
      </ScrollArea>
    </div>
  )
}
