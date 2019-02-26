const Day = {
  user: ({ id }, args, context) => {
    return context.prisma.day({ id }).user()
  },
}

module.exports = {
  Day,
}
