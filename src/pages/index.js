import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />

    <h1 class="center">Welcome to the home of the Greater Minnesota Alumni Chapter</h1><br/>
    <p>This site will host content about us, as well as applications built to support our operations.</p><br/>

  </Layout>
)

export default IndexPage