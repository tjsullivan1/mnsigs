import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const OfficersPage = () => (
  <Layout>
        <SEO title="Officers" />
        <h1 class="center">About our Officers</h1>
        <ul>
            <li>President</li>
            <li>Vice-President</li>
            <li>Secretary</li>
            <li>Treasurer</li>
            <li>Communications Officer</li>
            <li>Undergraduate Liaison</li>
        </ul>
  </Layout>
)

export default OfficersPage