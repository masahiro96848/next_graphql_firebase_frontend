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

  const authLink = setContext((_, prevContext) => {
    const token = getAuth().currentUser?.getIdToken()
    console.log('==== 開始 ====')
    console.log(token)
    console.log('==== 終了 ====')
    return {
      headers: {
        ...prevContext.headers,
        authorization: token ? `Bearer ${token}` : '',
      },
    }
  })

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  })

  return client
}
