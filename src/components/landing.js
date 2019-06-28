import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Box, Heading, Paragraph } from "grommet"

import "../styles/layout.css"

const Landing = () => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              subtitle
              landingHeading
              backgroundImage
            }
          }
        }
      }
    }
  `)
  const meta = data.allMarkdownRemark.edges[0].node.frontmatter
  console.log(meta)
  return (
    <Box
      basis="full"
      height="100vh"
      align="center"
      justify="center"
      background={{
        color: "neutral-1",
        dark: true,
        opacity: true,
        position: "center bottom",
        image: `url(${meta.backgroundImage})`,
      }}
    >
      <Box
        pad="medium"
        elevation="small"
        background="neutral-1"
        animation={{
          type: "fadeIn",
          delay: 500,
          duration: 1000,
          size: "xlarge",
        }}
      >
        <Heading>{meta.landingHeading}</Heading>
        <Paragraph>{meta.subtitle}</Paragraph>
      </Box>
    </Box>
  )
}

export default Landing
