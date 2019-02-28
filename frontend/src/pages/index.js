import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

import Layout from '../components/layout'
import User from '../containers/User'
import Signin from '../containers/Signin'
import Error from '../components/Error'
import Spinner from '../components/styles/Spinner'
import Container from '../components/styles/Container'
import Button from '../components/styles/Button'
import Form from '../components/styles/Form'

const GET_IS_SESSION_TICKING = gql`
  {
    isSessionTicking @client
  }
`

const IndexPage = () => (
  <Layout>
    <Query query={GET_IS_SESSION_TICKING}>
      {({ data: { isSessionTicking }, client }) => (
        <User>
          {({ data: { me }, loading, error }) => {
            if (loading) return <Spinner />
            if (error) return <Error error={error} />
            if (!me) return <Signin />
            return (
              <Container>
                <h4>Time today</h4>
                <h1>1:50:01</h1>
                <Form
                  onSubmit={e => {
                    e.preventDefault()
                  }}
                >
                  <label>
                    Choose a category
                    <select>
                      {me.categories.map(category => (
                        <option key={category.id} value={category.name}>
                          {category.name}
                        </option>
                      ))}
                    </select>
                  </label>
                  <Button
                    type="submit"
                    onClick={() =>
                      client.writeData({
                        data: { isSessionTicking: !isSessionTicking },
                      })
                    }
                  >
                    {isSessionTicking ? 'Stop' : 'Start'}
                  </Button>
                </Form>
              </Container>
            )
          }}
        </User>
      )}
    </Query>
  </Layout>
)

export default IndexPage
