import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

const Styled = styled.div`
  background: black;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Navlink = styled(Link)`
  text-decoration: none;
  padding: 0.25em 0.5em;
  h4 {
    color: white;
  }
`

const Bar = () => (
  <Styled>
    <Navlink to="/today">
      <h4>Today</h4>
    </Navlink>
    <Navlink to="/">
      <h4>Track</h4>
    </Navlink>
    <Navlink to="/me">
      <h4>Profile</h4>
    </Navlink>
  </Styled>
)

export default Bar
