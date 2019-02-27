import React from "react"
import { Mutation } from "react-apollo"
import gql from "graphql-tag"
import { client } from "../apollo/client"
import { Button } from "grommet"

const SIGN_OUT_MUTATION = gql`
  mutation SIGN_OUT_MUTATION {
    signout {
      message
    }
  }
`

const Signout = () => {
  return (
    <Mutation
      mutation={SIGN_OUT_MUTATION}
      onCompleted={({ signout }) => {
        localStorage.clear()
        client.writeData({ data: { isLoggedIn: false } })
      }}
    >
      {signout => <Button label="Sign out" onClick={signout} />}
    </Mutation>
  )
}

export default Signout
