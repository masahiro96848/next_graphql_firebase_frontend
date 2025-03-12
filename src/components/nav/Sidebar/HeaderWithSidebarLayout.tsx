import React from 'react'
import { Sidebar, SidebarProvider, SidebarTrigger } from '../../ui/sidebar'
import { AppSidebar } from './AppSidebar'

type Props = {
  children: React.ReactNode
}
export const SidebarLayout = ({ children }: Props) => {
  return (
    <SidebarProvider>
      <Sidebar>
        <AppSidebar />
      </Sidebar>
      <main>
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  )
}
