const { hash, compare } = require('bcrypt')
const { sign } = require('jsonwebtoken')

const { getUserId } = require('../utils/getUserId')

const Mutation = {
  signup: async (parent, { name, email, password }, context) => {
    const hashedPassword = await hash(password, 10)
    const user = await context.prisma.createUser({
      name,
      email,
      password: hashedPassword,
    })

    const token = sign({ userId: user.id }, process.env.APP_SECRET)

    return {
      token,
      user,
    }
  },
  signin: async (parent, { email, password }, context) => {
    const user = await context.prisma.user({ email })

    if (!user) {
      throw new Error(`No user found for this email`)
    }

    const passwordValid = await compare(password, user.password)
    if (!passwordValid) {
      throw new Error(`Invalid Password`)
    }

    const token = sign({ userId: user.id }, process.env.APP_SECRET)

    return {
      token,
      user,
    }
  },
  signout: (parent, { id }, context) => {
    return { message: 'Goodbye' }
  },
  createCategory: async (parent, { name }, context) => {
    // get userId
    const userId = getUserId(context)

    if (!userId) {
      return null
    }

    // create category w/ name arg
    return context.prisma.createCategory({
      name,
      // connect to the user
      user: { connect: { id: userId } },
    })
  },
  updateCategory: async (parent, { id, name }, context) => {
    // get userId
    const userId = getUserId(context)

    if (!userId) {
      return null
    }

    // update that category with name
    return context.prisma.updateCategory({
      where: { id },
      data: { name },
    })
  },
  deleteCategory: async (parent, { id }, context) => {
    const userId = getUserId(context)
    if (!userId) {
      return null
    }
    //delete category with given id
    return context.prisma.deleteCategory({ id })
  },
  createSession: async (parent, { length, categoryId }, context) => {
    //get userId
    const userId = getUserId(context)

    if (!userId) {
      return null
    }
    // create a session with given length
    // connect to gategory of given categoryId
    // connect to user of given userId
    return context.prisma.createSession({
      length,
      category: { connect: { id: categoryId } },
      user: { connect: { id: userId } },
    })
  },
  createDay: async (
    parent,
    { rating, description, taskForTomorrow },
    context
  ) => {
    // get userId
    const userId = getUserId(context)

    if (!userId) {
      return null
    }
    return context.prisma.createDay({
      // create a day with given inputs; rating, description, taskForTomorrow
      rating,
      description,
      taskForTomorrow,
      //contect to a user
      user: { connect: { id: userId } },
    })
  },
  updateDay: async (
    parent,
    { id, rating, description, taskForTomorrow },
    context
  ) => {
    const userId = getUserId(context)

    if (!userId) {
      return null
    }

    return context.prisma.updateDay({
      where: { id },
      data: { rating, description, taskForTomorrow },
    })
  },
}

module.exports = {
  Mutation,
}
