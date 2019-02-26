const User = {
  categories: ({ id }, args, context) => {
    return context.prisma.user({ id }).categories()
  },
  days: ({ id }, args, context) => {
    return context.prisma.user({ id }).days()
  },
}

module.exports = {
  User,
}
