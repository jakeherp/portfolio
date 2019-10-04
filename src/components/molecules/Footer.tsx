import React from "react"
import styled from "styled-components"

const Foot = styled.footer`
  padding: 0 3%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const Footer = () => {
  return (
    <Foot>
      <div>
        &copy; 2019 Jacob Herper
        <br />
        Proudly built with{" "}
        <a href="https://gatsbyjs.org/" target="_blank">
          Gatsby
        </a>
        .
      </div>
      <div>Social Links ...</div>
    </Foot>
  )
}

export default Footer
