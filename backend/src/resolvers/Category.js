const Category = {
  user: ({ id }, args, context) => {
    return context.prisma.category({ id }).user()
  },
}

module.exports = {
  Category,
}
