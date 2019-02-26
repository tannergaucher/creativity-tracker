import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import gql from "graphql-tag"
import { Query } from "react-apollo"

import Header from "../components/header"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <main>{children}</main>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
