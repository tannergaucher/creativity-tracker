import React from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'

import { Box, TextInput, FormField, Button } from 'grommet'

const SIGNUP_MUTATION = gql`
  mutation SIGNUP_MUTATION(
    $email: String!
    $password: String!
    $name: String!
  ) {
    signup(email: $email, password: $password, name: $name) {
      token
      user {
        name
        id
        email
      }
    }
  }
`

class Signup extends React.Component {
  state = {
    email: '',
    password: '',
    name: '',
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    return (
      <Mutation mutation={SIGNUP_MUTATION} variables={this.state}>
        {(signup, { loading, error }) => (
          <Box pad="small">
            <form
              onSubmit={async e => {
                e.preventDefault()
                const res = await signup()
              }}
            >
              <h1>Sign up</h1>

              <FormField label="Email">
                <TextInput
                  name="email"
                  type="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
              </FormField>

              <FormField label="password">
                <TextInput
                  name="password"
                  type="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                />
              </FormField>

              <FormField label="Name">
                <TextInput
                  name="name"
                  type="name"
                  value={this.state.name}
                  onChange={this.handleChange}
                />
              </FormField>
              <Button label="Sign up" disabled={loading} />
            </form>
          </Box>
        )}
      </Mutation>
    )
  }
}

export default Signup
