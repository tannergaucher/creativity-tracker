const { Query } = require('./Query')
const { Mutation } = require('./Mutation')
const { User } = require('./User')
const { Category } = require('./Category')

const resolvers = {
  Query,
  Mutation,
  User,
  Category,
}

module.exports = {
  resolvers,
}
