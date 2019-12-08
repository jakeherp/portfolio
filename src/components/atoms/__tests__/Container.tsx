import React from "react"
import renderer from "react-test-renderer"

import Container from "../Container"

it("renders correctly", () => {
  const tree = renderer
    .create(
      <Container>
        <div />
      </Container>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
