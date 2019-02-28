import gql from 'graphql-tag'

export const typeDefs = gql`
  extend type Query {
    isSessionTicking: Boolean!
  }

  extend type Mutation {
    setSelectedCategory(id: ID!): Category
  }
`

export const resolvers = {
  Mutation: {
    // isSessionTicking resolver. B.C. it depends on existing value in the cache; Boolean
  },
}
