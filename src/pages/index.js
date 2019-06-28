import React from "react"
import { Grommet } from "grommet"

import Landing from "../components/landing"
import { theme } from "../styles/theme"

import SEO from "../components/seo"

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <Grommet theme={theme}>
      <Landing />
    </Grommet>
  </>
)

export default IndexPage
