import { AppApolloProvider } from '@/apollo/provider'
import { AuthProvider } from '@/provider/auth/AuthProvider'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppApolloProvider>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </AppApolloProvider>
  )
}
