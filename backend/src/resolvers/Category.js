const Category = {
  user: ({ id }, args, context) => {
    return context.prisma.category({ id }).user()
  },
  sessions: ({ id }, args, context) => {
    return context.prisma.category({ id }).sessions()
  },
}

module.exports = {
  Category,
}
