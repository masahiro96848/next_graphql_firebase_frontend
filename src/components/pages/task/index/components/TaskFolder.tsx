import { Edit, Settings } from 'lucide-react'
import type { Folder } from './TaskApp'
import { Button } from '@/components/atoms/button'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/atoms/tooltip'

interface TaskFolderProps {
  folder: Folder
}

export default function TaskFolder({ folder }: TaskFolderProps) {
  return (
    <div className="flex items-center justify-between p-2 hover:bg-gray-100 rounded">
      <div className="flex items-center">
        <span className="mr-2">≡</span>
        <span>{folder.name}</span>
      </div>
      <div className="flex space-x-1">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Edit size={16} />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>編集</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Settings size={16} />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>設定</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  )
}
