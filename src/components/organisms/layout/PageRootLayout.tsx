import { Header } from '@/components/organisms/layout/Header'
import React, { useState } from 'react'
import TaskApp from '@/components/pages/todo/TaskApp'

type Props = {
  children: React.ReactNode
}

export const PageRootLayout = ({ children }: Props) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  return (
    <>
      <Header toggleSidebar={toggleSidebar} />
      <TaskApp isSidebarOpen={isSidebarOpen} />
    </>
  )
}
