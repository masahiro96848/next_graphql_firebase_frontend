import React from 'react'

type Props = {
  children: React.ReactNode
}
export const PageLayout = ({ children }: Props) => {
  return <div>{children}</div>
}
