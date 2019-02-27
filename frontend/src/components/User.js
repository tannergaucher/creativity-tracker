import React from "react"
import { Query } from "react-apollo"
import gql from "graphql-tag"
import PropTypes from "prop-types"

const CURRENT_USER_QUERY = gql`
  query {
    me {
      name
      id
    }
  }
`

const User = props => (
  <Query {...props} query={CURRENT_USER_QUERY}>
    {payload => props.children(payload)}
  </Query>
)

export default User

User.propTypes = {
  children: PropTypes.func.isRequired,
}

export { CURRENT_USER_QUERY }
