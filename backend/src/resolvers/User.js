const User = {
  // connecting a user to categories
  categories: ({ id }, args, context) => {
    return context.prisma.user({ id }).categories()
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
