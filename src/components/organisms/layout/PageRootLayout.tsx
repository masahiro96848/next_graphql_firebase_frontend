import { Header } from '@/components/organisms/layout/Header'
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
