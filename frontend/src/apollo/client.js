import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import fetch from 'isomorphic-fetch'
import { createHttpLink } from 'apollo-link-http'
import { resolvers, typeDefs } from './resolvers'

const link = createHttpLink({
  uri: 'http://localhost:4000/',
  credentials: 'include',
})

const cache = new InMemoryCache()

export const client = new ApolloClient({
  fetch,
  link,
  cache,
  resolvers,
  typeDefs,
})

cache.writeData({
  data: {
    selectedCategory: '',
    isSessionTicking: false,
    todaysSessionTime: 0,
  },
})
