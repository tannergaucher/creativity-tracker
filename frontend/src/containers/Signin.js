import React from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'

import Error from '../components/Error'

import { CURRENT_USER_QUERY } from './User'

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
    email: '',
    password: '',
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
            <form
              onSubmit={async e => {
                e.preventDefault()
                signin()
              }}
            >
              <fieldset disabled={loading} aria-busy={loading}>
                <h1>Sign In</h1>
                <Error error={error} />
                <label htmlFor="email">
                  email
                  <input
                    name="email"
                    type="email"
                    autoComplete="current-password"
                    value={this.state.email}
                    onChange={this.handleChange}
                  />
                </label>
                <label htmlFor="password">
                  password
                  <input
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    value={this.state.password}
                    onChange={this.handleChange}
                  />
                </label>
                <button type="submit">button</button>
              </fieldset>
            </form>
          )
        }}
      </Mutation>
    )
  }
}

export default Signin
