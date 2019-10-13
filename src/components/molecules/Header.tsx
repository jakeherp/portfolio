import React from "react"
import { Link } from "gatsby"
import ToggleMode from "../atoms/ToggleMode"
import styled from "styled-components"

import Highlight from "../atoms/Highlight"
import Menu from "../atoms/Menu"

const Head = styled.header`
  padding: 1rem 3%;
  display: flex;
  justify-content: space-between;

  h1 {
    margin: 0;
    line-height: 1;
  }
`

const Navigation = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 1em;
  line-height: 1;

  button {
    background: transparent;
    color: inherit;
    border: none;
  }
`

const Header = () => {
  return (
    <Head>
      <h1>
        <Link to="/">
          &lt;Jacob Herper <Highlight>/</Highlight>&gt;
        </Link>
      </h1>
      <Navigation>
        <Menu>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about/">About</Link>
          </li>
          <li>
            <Link to="/portfolio/">Portfolio</Link>
          </li>
          <li>
            <Link to="/contact/">Contact</Link>
          </li>
          <li>
            <ToggleMode />
          </li>
        </Menu>
      </Navigation>
    </Head>
  )
}

export default Header
