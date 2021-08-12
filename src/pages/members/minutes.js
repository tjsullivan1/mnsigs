import * as React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

const MinutesPage = () => (
  <Layout>
    <SEO title="Minutes" />
    <p>Here are the chapter minutes...</p>
    <a href="{process.env.GATSBY_URL_1}" class="overrideLiAInteraction">Test File 3</a>
    <p>Hello, {process.env.GATSBY_URL_1}, what about {process.env.NODE_ENV}</p>
  </Layout>
)

export default MinutesPage