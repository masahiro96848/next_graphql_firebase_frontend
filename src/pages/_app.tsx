import { AppApolloProvider } from '@/apollo/provider'
import { AuthRouterProvider } from '@/provider/auth/AuthRouterContext'
import { UserRouterProvider } from '@/provider/auth/UserRouterProvider'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthRouterProvider>
      <AppApolloProvider>
        <UserRouterProvider>
          <Component {...pageProps} />
        </UserRouterProvider>
      </AppApolloProvider>
    </AuthRouterProvider>
  )
}
