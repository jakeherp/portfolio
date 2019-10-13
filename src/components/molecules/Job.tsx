import React from "react"
import styled from "styled-components"

const Listing = styled.article`
  border-bottom: 1px solid #000;
  padding-bottom: 2rem;
  margin-bottom: 1rem;
  break-inside: avoid;

  h1 {
    margin: 0 0 0.5rem;

    small {
      font-weight: normal;
    }
  }
`

const Job = ({ children, title, company, place, from, to }: any) => {
  return (
    <Listing>
      <h1>
        {title} at {company} -{" "}
        <small>
          {from} to {to}
        </small>
      </h1>
      {children}
      <small>{place}</small>
    </Listing>
  )
}

export default Job
