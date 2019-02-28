import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import Container from '../components/styles/Container'
import Signout from '../components/Signout'

import User from '../components/User'

// query me

// if me, return signout

// if !me, return signin

const me = () => {
  return (
    <Layout>
      <Container>
        <Signout />
      </Container>
    </Layout>
  )
}

export default me
