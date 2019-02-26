const Session = {
  category: ({ id }, args, context) => {
    return context.prisma.session({ id }).category()
  },
}

module.exports = {
  Session,
}
