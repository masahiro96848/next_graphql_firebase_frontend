import { ApolloProvider } from '@apollo/client'
import { FC, useMemo } from 'react'
import { createClient } from './apolloClient'

type Props = {
  children: React.ReactNode
}
export const AppApolloProvider: FC<Props> = ({ children }) => {
  const client = useMemo(() => createClient(), [])

  return <ApolloProvider client={client}>{children}</ApolloProvider>
}
