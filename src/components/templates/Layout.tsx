import React from "react"
import { ThemeProvider, createGlobalStyle } from "styled-components"
import style from "styled-theming"

import useTheme from "../../hooks/useTheme"
import Header from "../molecules/Header"
import Footer from "../molecules/Footer"

const getBackground = style("mode", {
  light: "#d6deeb",
  dark: "#011627",
})

const getTextColor = style("mode", {
  light: "#011627",
  dark: "#d6deeb",
})

const Style = createGlobalStyle`
    body {
        background-color: ${getBackground};
        color: ${getTextColor};
        font-family: "brandon-grotesque", sans-serif;
        transition: 0.5s;
    }

    a {
      color: inherit;
      text-decoration: none;
      transition: 0.5s;
      &:hover {
        line-height: 0.5;
      }
    }
`

const Layout = ({ children }: any) => {
  const theme = useTheme()

  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <Style />
        <Header />
        {children}
        <Footer />
      </React.Fragment>
    </ThemeProvider>
  )
}

export default Layout
