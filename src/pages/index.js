import React from "react"
import { Grommet } from "grommet"

import Landing from "../components/landing"
import { theme } from "../styles/theme"

const IndexPage = () => (
  <Grommet theme={theme}>
    <Landing />
  </Grommet>
  //   <SEO title="Home" />

  //   <Heading tag="h1">
  //     <strong>Welcome</strong>
  //   </Heading>
  //   <Paragraph>Please log in</Paragraph>
  //   <Button icon={<Notification />} onClick={() => {}} />

  //   <h1>Hi people</h1>
  //   <p>Welcome to your new Gatsby site.</p>
  //   <p>Now go build something great.</p>
  //   <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
  //     <Image />
  //   </div>
  //   <Link to="/page-2/">Go to page 2</Link>
  // </Layout>
)

export default IndexPage
