import React from 'react'

import Layout from '../components/layout'
import Signin from '../containers/Signin'
import Signup from '../containers/Signin'

const signin = () => {
  return (
    <Layout>
      <Signin />
      <Signup />
    </Layout>
  )
}

export default signin
