const { verify } = require('jsonwebtoken')

class AuthError extends Error {
  constructor() {
    super('Not authorized')
  }
}

function getUserId(context) {
  const { token } = context.request.cookies

  if (token) {
    const verifiedToken = verify(token, process.env.APP_SECRET)

    return verifiedToken && verifiedToken.userId
  }
}

module.exports = {
  getUserId,
}
