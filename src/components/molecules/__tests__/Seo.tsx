import React from "react"
import renderer from "react-test-renderer"
import * as Gatsby from "gatsby"

import Seo from "../Seo"

const useStaticQuery = jest.spyOn(Gatsby, "useStaticQuery")
useStaticQuery.mockImplementation(() => ({
  site: {
    siteMetadata: {
      title: "Exercitation quis excepteur",
      description: "Ex magna ipsum consectetur anim labore.",
      lang: "en",
    },
  },
}))

it("renders correctly", () => {
  const tree = renderer
    .create(<Seo title="Title" description="Description" lang="en" />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
