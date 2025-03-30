import { useState } from 'react'
import Sidebar from '@/components/organisms/layout/Sidebar'
import TaskCard from '@/components/pages/task/index/components/TaskCard'
import { Button } from '@/components/atoms/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export type Folder = {
  id: string
  name: string
}

export type Task = {
  id: string
  title: string
  date: string
}

export type TaskCardType = {
  id: string
  title: string
  count: number
  tasks: Task[]
}

type Props = {
  isSidebarOpen: boolean
}

export default function TaskApp({ isSidebarOpen }: Props) {
  const [folders] = useState<Folder[]>([
    { id: '1', name: '重要なことにやるリスト' },
    { id: '2', name: '重要・緊急' },
    { id: '3', name: 'フォルダー' },
    { id: '4', name: '新しい' },
    { id: '5', name: 'プライベート' },
  ])

  const [taskCards] = useState<TaskCardType[]>([
    {
      id: '1',
      title: 'JavaScript',
      count: 4,
      tasks: [
        { id: '1-1', title: '新しいタスクを追加', date: '2021-04-22 06:45:29' },
        { id: '1-2', title: 'prototypeについて', date: '2021-04-22 06:45:29' },
        { id: '1-3', title: 'Promiseを復習', date: '2021-04-22 06:43:33' },
        { id: '1-4', title: 'Proxyについて', date: '2021-08-01 06:15:54' },
        { id: '1-5', title: 'ループス', date: '2020-08-11 06:15:54' },
      ],
    },
    {
      id: '2',
      title: 'CSS',
      count: 2,
      tasks: [
        { id: '2-1', title: '新しいタスクを追加', date: '2021-04-22 06:43:33' },
        { id: '2-2', title: 'flexboxについて', date: '2021-04-22 06:43:33' },
        { id: '2-3', title: '中央寄せについて', date: '2020-08-11 06:18:54' },
      ],
    },
    {
      id: '3',
      title: 'インフラ',
      count: 2,
      tasks: [
        { id: '3-1', title: '新しいタスクを追加', date: '2020-11-22 17:19:51' },
        { id: '3-2', title: 'Apacheの設定', date: '2020-11-22 17:19:51' },
        { id: '3-3', title: 'データベース構築', date: '2020-08-11 06:18:54' },
      ],
    },
  ])

  return (
    <div className="flex flex-col h-screen bg-[#f8f6e9]">
      <div className="flex flex-1 overflow-hidden">
        {/* デスクトップ表示時のみサイドバーを表示 */}
        <div className="hidden md:block">
          <Sidebar isOpen={isSidebarOpen} folders={folders} />
        </div>
        <div className="flex-1 p-4 overflow-x-auto">
          {/* モバイル表示時のタブ */}
          <div className="md:hidden mb-4">
            <Tabs defaultValue={folders[0].id} className="w-full">
              <TabsList className="w-full overflow-x-auto">
                {folders.map((folder) => (
                  <TabsTrigger key={folder.id} value={folder.id}>
                    {folder.name}
                  </TabsTrigger>
                ))}
              </TabsList>
              {folders.map((folder) => (
                <TabsContent key={folder.id} value={folder.id}>
                  <div className="flex gap-4">
                    {taskCards.map((card) => (
                      <TaskCard key={card.id} card={card} />
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
          {/* デスクトップ表示時のタスクカード */}
          <div className="hidden md:block">
            <div className="flex justify-between mb-4">
              <div></div>
              <Button variant="ghost" className="text-blue-500 text-sm">
                + 新しいカードを追加
              </Button>
            </div>
            <div className="flex gap-4">
              {taskCards.map((card) => (
                <TaskCard key={card.id} card={card} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
