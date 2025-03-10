import { AppApolloProvider } from '@/apollo/provider'
import { FirebaseAuthProvider } from '@/lib/firebase/auth/FirebaseAuthProvider'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppApolloProvider>
      <FirebaseAuthProvider>
        <Component {...pageProps} />
      </FirebaseAuthProvider>
    </AppApolloProvider>
  )
}
