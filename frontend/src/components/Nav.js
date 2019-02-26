import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import { Query } from "react-apollo"

import { IS_LOGGED_IN } from "./layout"
import Signout from "../components/Signout"

const Nav = ({ siteTitle }) => (
  <header>
    <Link to="/">{siteTitle}</Link>
    <Query query={IS_LOGGED_IN}>
      {({ data }) => (data.isLoggedIn ? <Signout /> : null)}
    </Query>
  </header>
)

Nav.propTypes = {
  siteTitle: PropTypes.string,
}

Nav.defaultProps = {
  siteTitle: ``,
}

export default Nav
