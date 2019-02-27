import React from "react"
import { Query } from "react-apollo"
import { CURRENT_USER_QUERY } from "../components/User"

const Categories = () => (
  <Query query={CURRENT_USER_QUERY}>
    {({ data, loading, error }) => {
      if (loading) return <p>loading</p>
      if (error) return <p>{error.message}</p>

      if (!data.me) return <p>no user</p>

      return <p>{data.me.name}</p>
    }}
  </Query>
)

export default Categories
