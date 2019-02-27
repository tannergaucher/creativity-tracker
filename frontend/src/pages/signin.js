import React from "react"

import Layout from "../components/layout"
import Signin from "../components/Signin"
import Signup from "../components/Signup"

const signin = () => {
  return (
    <Layout>
      <Signin />
      <Signup />
    </Layout>
  )
}

export default signin
