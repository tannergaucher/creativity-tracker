const User = {
  // connecting a user to categories
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

// const RelationshipType = {
//   fieldname: ({id}, args, context) => {
//     return context.prisma.relationshipType({id}).fieldname()
//   }
// }
