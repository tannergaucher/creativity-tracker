import React from 'react'

import Layout from '../components/layout'
import Signin from '../containers/Signin'
import Signout from '../containers/Signout'
import User from '../containers/User'
import Container from '../components/styles/Container'
import Spinner from '../components/styles/Spinner'

const me = () => {
  return (
    <Layout>
      <Container>
        <User>
          {({ data, loading, error }) => {
            if (loading) return <Spinner />
            if (error) return <p>{error.message}</p>
            if (!data.me) return <Signin />
            return (
              <>
                <h2>Hey, {data.me.name}</h2>
                <Signout />
              </>
            )
          }}
        </User>
      </Container>
    </Layout>
  )
}

export default me
