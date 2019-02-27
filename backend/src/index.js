const cookieParser = require('cookie-parser')
const jwt = require('jsonwebtoken')

const { GraphQLServer } = require('graphql-yoga')
const { prisma } = require('./generated/prisma-client')
const { resolvers } = require('./resolvers')

require('dotenv').config()

const server = new GraphQLServer({
  typeDefs: 'src/schema.graphql',
  resolvers,
  context: request => {
    return {
      ...request,
      prisma,
    }
  },
})

server.express.use(cookieParser())

server.express.use((req, res, next) => {
  const { token } = req.cookies
  if (token) {
    const { userId } = jwt.verify(token, process.env.APP_SECRET)
    req.userId = userId
  }
  next()
})

server.start(
  {
    cors: {
      credentials: true,
      origin: 'http://localhost:8000',
    },
  },
  details => {
    console.log(`Server is running on http://localhost:${details.port}`)
  }
)
