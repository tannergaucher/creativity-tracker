import React from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'

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
          <form
            onSubmit={async e => {
              e.preventDefault()
              signup()
            }}
          >
            <fieldset disabled={loading} aria-busy={loading}>
              <h1>Sign up</h1>
              <Error error={error} />
              <label htmlFor="email">
                email
                <input
                  name="email"
                  type="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
              </label>

              <label htmlFor="password">
                password
                <input
                  name="password"
                  type="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                />
              </label>

              <label htmlFor="name">
                name
                <input
                  name="name"
                  type="name"
                  value={this.state.name}
                  onChange={this.handleChange}
                />
              </label>
              <button>Sign up</button>
            </fieldset>
          </form>
        )}
      </Mutation>
    )
  }
}

export default Signup
