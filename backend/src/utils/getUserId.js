const { verify } = require('jsonwebtoken')

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
