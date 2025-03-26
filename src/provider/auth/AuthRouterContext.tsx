import { ReactNode } from 'react'
import { AuthUserProvider } from './AuthUserContext'

type PropsType = {
  children: ReactNode
}

export const AuthRouterProvider = ({ children }: PropsType) => {
  return <AuthUserProvider>{children}</AuthUserProvider>
}
