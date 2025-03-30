import { Edit, Settings } from 'lucide-react'
import type { Folder } from '@/components/pages/task/index/components/TaskApp'
import { Button } from '@/components/atoms/button'

interface FolderSidebarProps {
  folders: Folder[]
}

export default function FolderSidebar({ folders }: FolderSidebarProps) {
  return (
    <div className="w-64 border-r bg-white p-4 flex flex-col overflow-y-auto">
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
          <div
            key={folder.id}
            className="flex items-center justify-between p-2 hover:bg-gray-100 rounded"
          >
            <div className="flex items-center">
              <span className="mr-2">≡</span>
              <span>{folder.name}</span>
            </div>
            <div className="flex space-x-1">
              <button className="p-1 hover:bg-gray-200 rounded">
                <Edit size={16} />
              </button>
              <button className="p-1 hover:bg-gray-200 rounded">
                <Settings size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
