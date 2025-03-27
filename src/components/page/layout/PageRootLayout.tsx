import { Header } from '@/components/nav/Header'
import React from 'react'

type Props = {
  children: React.ReactNode
}

export const PageRootLayout = ({ children }: Props) => {
  return (
    <>
      <Header />
      {children}
    </>
  )
}
