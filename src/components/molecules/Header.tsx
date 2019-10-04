import React from "react"
import { Link } from "gatsby"
import ToggleMode from "../atoms/ToggleMode"
import styled from "styled-components"

import Highlight from "../atoms/Highlight"

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
  height: 2.7rem;
  flex-direction: row;
  justify-content: center;

  button {
    background: transparent;
    color: inherit;
    border: none;
  }
`

const Menu = styled.ul`
  list-style: none;

  li {
    display: inline-block;
    margin: 0 0.5rem;

    a {
      padding: 0px 0.25rem;
      &::after {
        content: "";
        display: block;
        height: 10px;
        width: 0%;
        margin-top: -10px;
        background: #e94e1b;
        transition: all 0.5s ease 0s;
      }
      &:hover {
        border-bottom: none;
        &::after {
          width: 110%;
        }
      }
    }
  }
`

const Header = () => {
  return (
    <Head>
      <h1>
        &lt;Jacob Herper <Highlight>/</Highlight>&gt;
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
        </Menu>
        <ToggleMode />
      </Navigation>
    </Head>
  )
}

export default Header
