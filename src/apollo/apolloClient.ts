import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { getAuth } from 'firebase/auth'

export const createClient = () => {
  const httpLink = createHttpLink({
    uri: 'http://localhost:8080/graphql',
    fetchOptions: {
      credentials: 'include',
    },
  })

  const authLink = setContext(async (_, prevContext) => {
    const auth = getAuth()
    const user = auth.currentUser

    if (user) {
      user
        .getIdToken()
        .then((token) => {
          console.log('Bearer ' + token)
          // ここでトークンをAPIリクエストのヘッダーに設定します
          return {
            headers: {
              ...prevContext.headers,
              authorization: token ? `Bearer ${token}` : '',
            },
          }
        })
        .catch((error) => {
          console.error('Error getting token:', error)
          return {
            headers: {
              ...prevContext.headers,
              authorization: '',
            },
          }
        })
    } else {
      return {
        headers: {
          ...prevContext.headers,
          authorization: '',
        },
      }
    }
  })

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  })

  return client
}
