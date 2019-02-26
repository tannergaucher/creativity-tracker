import React from "react"
import { Mutation } from "react-apollo"
import gql from "graphql-tag"
import { client } from "../apollo/client"

const SIGN_OUT_MUTATION = gql`
  mutation SIGN_OUT_MUTATION {
    signout {
      message
    }
  }
`

const Signout = ({ name }) => {
  return (
    <Mutation
      mutation={SIGN_OUT_MUTATION}
      onCompleted={({ signout }) => {
        localStorage.clear()
        client.writeData({ data: { isLoggedIn: false } })
      }}
    >
      {signout => <button onClick={signout}>Sign out {name}</button>}
    </Mutation>
  )
}

export default Signout
