import React from "react"
import { Mutation } from "react-apollo"
import gql from "graphql-tag"

import Error from "./Error"
import { client } from "../apollo/client"

const SIGNIN_MUTATION = gql`
  mutation SIGNIN_MUTATION($email: String!, $password: String!) {
    signin(email: $email, password: $password) {
      token
      user {
        id
        name
        email
      }
    }
  }
`

class Signin extends React.Component {
  state = {
    email: "",
    password: "",
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    return (
      <Mutation
        mutation={SIGNIN_MUTATION}
        variables={this.state}
        onCompleted={({ signin }) => {
          localStorage.setItem("token", signin)
          client.writeData({ data: { isLoggedIn: true } })
        }}
      >
        {(signin, { loading, error }) => {
          return (
            <>
              <form
                onSubmit={async e => {
                  console.log("sign in")
                  e.preventDefault()
                  const res = await signin()
                  console.log("RES", res)
                }}
              >
                <fieldset disabled={loading} aria-busy={loading}>
                  <h1>Sign In</h1>
                  <Error error={error} />
                  <input
                    name="email"
                    type="email"
                    placeholder="email"
                    autoComplete="current-password"
                    value={this.state.email}
                    onChange={this.handleChange}
                  />
                  <input
                    name="password"
                    type="password"
                    placeholder="password"
                    autoComplete="current-password"
                    value={this.state.password}
                    onChange={this.handleChange}
                  />

                  <button type="submit">submit</button>
                </fieldset>
              </form>
            </>
          )
        }}
      </Mutation>
    )
  }
}

export default Signin
