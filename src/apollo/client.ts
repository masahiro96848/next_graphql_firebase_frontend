import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

export const createClient = () => {
  const httpLink = createHttpLink({
    uri: 'http://localhost:8080/graphql',
    credentials: 'include',
  })

  const authLink = setContext(async (_, { headers }) => {
    return new Promise((resolve) => {
      const auth = getAuth()

      // Firebase Auth の初期化を待つ
      const unsubscribe = onAuthStateChanged(auth, async (user) => {
        unsubscribe() // 一度だけ実行

        if (user) {
          try {
            const token = await user.getIdToken()
            resolve({
              headers: {
                ...headers,
                authorization: `Bearer ${token}`,
              },
            })
          } catch (error) {
            console.error('認証トークンの取得に失敗しました:', error)
            resolve({
              headers: {
                ...headers,
              },
            })
          }
        } else {
          resolve({
            headers: {
              ...headers,
            },
          })
        }
      })
    })
  })

  return new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
    defaultOptions: {
      watchQuery: {
        fetchPolicy: 'network-only',
      },
      query: {
        fetchPolicy: 'network-only',
      },
    },
  })
}
