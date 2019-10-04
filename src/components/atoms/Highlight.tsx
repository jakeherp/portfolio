import React from "react"
import styled from "styled-components"

const Accent = styled.span`
  color: #e94e1b;
`

const Highlight = ({ children }: any) => {
  return <Accent>{children}</Accent>
}

export default Highlight
