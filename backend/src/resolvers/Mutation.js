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

    context.response.cookie('token', token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 365,
    })

    return {
      user,
      token,
    }
  },
  signout: (parent, { id }, context) => {
    context.response.clearCookie('token')

    return { message: 'Goodbye' }
  },
  createCategory: async (parent, { name }, context) => {
    const userId = getUserId(context)

    if (!userId) {
      return null
    }

    return context.prisma.createCategory({
      name,
      user: { connect: { id: userId } },
    })
  },
  updateCategory: async (parent, { id, name }, context) => {
    const userId = getUserId(context)

    if (!userId) {
      return null
    }

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

    return context.prisma.deleteCategory({ id })
  },
  createSession: async (parent, { length, categoryId }, context) => {
    //get userId
    const userId = getUserId(context)

    if (!userId) {
      return null
    }

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
    const userId = getUserId(context)

    if (!userId) {
      return null
    }
    return context.prisma.createDay({
      rating,
      description,
      taskForTomorrow,
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
