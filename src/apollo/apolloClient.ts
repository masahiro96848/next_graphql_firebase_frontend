import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'

export const createClient = () => {
  const httpLink = createHttpLink({
    uri: 'http://localhost:8080/graphql',
    fetchOptions: {
      credentials: 'include',
    },
  })

  const authLink = setContext((_, prevContext) => {
    const token = localStorage.getItem('token')
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
