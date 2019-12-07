import React from "react"
import styled from "styled-components"

const Listing = styled.article`
  border-bottom: 1px solid #000;
  padding-bottom: 2rem;
  margin-bottom: 1rem;
  break-inside: avoid;

  h1 {
    margin: 0 0 0.5rem;
  }
  h2 {
    font-weight: normal;
    font-size: 1rem;
    margin: 0 0 0.5rem;
  }
`

const Job = ({
  children,
  title,
  company: { name: companyName, url: companyUrl },
  place,
  from,
  to,
}: any) => {
  return (
    <Listing>
      <h1>{title}</h1>
      <h2>
        <strong>
          <a href={companyUrl} target="_blank">
            {companyName}
          </a>
        </strong>{" "}
        (in {place})
      </h2>
      {children}
      <small>
        {from} to {to}
      </small>
    </Listing>
  )
}

export default Job
