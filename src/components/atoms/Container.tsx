import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  width: 1140px;
  max-width: 94%;
  margin: 0 auto;
`

const Container = ({ children }: any) => {
  return <Wrapper>{children}</Wrapper>
}

export default Container
