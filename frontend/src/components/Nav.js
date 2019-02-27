import React from "react"
import styled from "styled-components"
import Link from "gatsby-link"

import Signout from "../components/Signout"
import User from "../components/User"

const Styled = styled.div`
  height: 60px;
  background: #fafafa;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.2);
`

const Nav = () => (
  <Styled>
    <User>
      {({ data, loading, error }) => {
        if (loading) return <p>loading</p>
        if (error) return <p>error</p>
        if (!data.me) return <Link to="/signin">Sign in</Link>
        return <Signout />
      }}
    </User>
  </Styled>
)

export default Nav
