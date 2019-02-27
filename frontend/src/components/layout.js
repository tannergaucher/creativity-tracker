import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import { createGlobalStyle, ThemeProvider } from "styled-components"

import { Grommet } from "grommet"

import Nav from "../components/Nav"

const theme = {
  spacing: "1em",
}

const GlobalStyles = createGlobalStyle`
 @import url('https://fonts.googleapis.com/css?family=Karla:400,700');
  *, *:before, *:after {
	box-sizing: border-box;
  }
  html {
    min-height: 100vh;
    margin: 0;
  }
  body {
    margin: 0;
    min-height: 100vh;
    font-family: 'Karla', sans-serif;
    font-size: 18px;
  }
`

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyles />
      <Grommet>
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
              <Nav siteTitle={data.site.siteMetadata.title} />
              <main>{children}</main>
            </>
          )}
        />
      </Grommet>
    </>
  </ThemeProvider>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
