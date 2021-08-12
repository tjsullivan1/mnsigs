import * as React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

const MinutesPage = () => (
  <Layout>
    <SEO title="Minutes" />
    <a href="{process.env.GATSBY_URL_1}" class="overrideLiAInteraction">Test File</a>
  </Layout>
)

export default MinutesPage