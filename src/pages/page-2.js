import React from "react"
import { Link, graphql } from "gatsby"
import { Box, Heading, Paragraph } from "grommet"

import SEO from "../components/seo"

const SecondPage = ({ data }) => {
  console.log(data)
  return (
    <>
      <SEO title="About" />
      <Box basis="full" height="100vh" align="center" justify="center">
        <Box
          round="xsmall"
          pad="large"
          elevation="small"
          background="neutral-1"
          animation={{
            type: "fadeIn",
            delay: 0,
            duration: 1000,
            size: "xlarge",
          }}
        >
          <Link to="/">Back</Link>
        </Box>
      </Box>
    </>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default SecondPage
