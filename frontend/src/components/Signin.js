import React from "react"
import { Mutation } from "react-apollo"
import gql from "graphql-tag"
import { Box, TextInput, Button, FormField } from "grommet"

import Error from "./Error"

import { CURRENT_USER_QUERY } from "../components/User"

const SIGNIN_MUTATION = gql`
  mutation SIGNIN_MUTATION($email: String!, $password: String!) {
    signin(email: $email, password: $password) {
      token
      user {
        id
        name
        email
        categories {
          name
        }
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
        refetchQueries={[{ query: CURRENT_USER_QUERY }]}
      >
        {(signin, { loading, error }) => {
          return (
            <Box pad="small">
              <form
                onSubmit={async e => {
                  console.log("sign in")
                  e.preventDefault()
                  const res = await signin()
                  console.log("RES", res)
                }}
              >
                <h1>Sign In</h1>
                <Error error={error} />

                <FormField label="Email">
                  <TextInput
                    name="email"
                    type="email"
                    autoComplete="current-password"
                    value={this.state.email}
                    onChange={this.handleChange}
                  />
                </FormField>

                <FormField label="Password">
                  <TextInput
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    value={this.state.password}
                    onChange={this.handleChange}
                  />
                </FormField>

                <Button
                  type="submit"
                  label="Submit"
                  disabled={loading}
                  primary={true}
                  alignSelf="center"
                />
              </form>
            </Box>
          )
        }}
      </Mutation>
    )
  }
}

export default Signin
