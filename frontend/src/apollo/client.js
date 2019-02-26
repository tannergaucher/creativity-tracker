import { ApolloClient } from "apollo-client"
import { InMemoryCache } from "apollo-cache-inmemory"

import fetch from "isomorphic-fetch"
import { createHttpLink } from "apollo-link-http"

import { resolvers, typeDefs } from "./resolvers"

// because window.localstorage is not available on gatsby build: https://www.gatsbyjs.org/docs/authentication-tutorial/
const isBrowser = () => typeof window !== "undefined"
const getToken = () => isBrowser() && localStorage.getItem("token")

const link = createHttpLink({
  uri: "http://localhost:4000/",
  credentials: "include",
  headers: {
    authorization: getToken(),
  },
})

const cache = new InMemoryCache()

export const client = new ApolloClient({
  fetch,
  link,
  cache,
  resolvers,
  typeDefs,
})

// this is the 'default' client state
cache.writeData({
  data: {
    isLoggedIn: !!getToken(),
  },
})
