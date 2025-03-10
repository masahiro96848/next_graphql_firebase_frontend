import { AppApolloProvider } from '@/apollo/provider'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppApolloProvider>
      <Component {...pageProps} />;
    </AppApolloProvider>
  )
}
