import { Header } from '@/components/organisms/layout/Header'
import React from 'react'

type Props = {
  children: React.ReactNode
}
export const NonSignInPageLayout = ({ children }: Props) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center">
        {children}
      </main>
    </div>
  )
}
