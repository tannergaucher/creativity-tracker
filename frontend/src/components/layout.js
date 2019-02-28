import React from 'react'
import PropTypes from 'prop-types'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { Grommet } from 'grommet'

import Bar from '../components/Bar'

const theme = {
  spacing: '1em',
}

const GlobalStyles = createGlobalStyle`
 @import url('https://fonts.googleapis.com/css?family=Karla:400,700');
  *, *:before, *:after {
	box-sizing: border-box;
  }
  html {
    margin: 0;
  }
  body {
    margin: 0;
    font-family: 'Karla', sans-serif;
    font-size: 18px;
    overscroll-behavior: none;
  }
`

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyles />
      <Grommet>
        <main>{children}</main>
        <Bar />
      </Grommet>
    </>
  </ThemeProvider>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
