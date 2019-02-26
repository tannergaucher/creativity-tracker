const { Query } = require('./Query')
const { Mutation } = require('./Mutation')
const { User } = require('./User')
const { Category } = require('./Category')
const { Session } = require('./Session')
const { Day } = require('./Day')

const resolvers = {
  Query,
  Mutation,
  User,
  Category,
  Session,
  Day,
}

module.exports = {
  resolvers,
}
