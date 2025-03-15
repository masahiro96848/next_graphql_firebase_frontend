import { Header } from '@/components/nav/Header'
import React from 'react'

type Props = {
  children: React.ReactNode
}
export const GuestPageLayout = ({ children }: Props) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  )
}
