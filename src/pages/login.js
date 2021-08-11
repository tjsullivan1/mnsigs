import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="login" />

    <h1 class="center">Login</h1>
    <ul>
        <li><Link to="https://mnsigs.com/.auth/login/aad" class="overrideLiAInteraction">Login with Email</Link></li>
        <li><Link to="https://mnsigs.com/.auth/login/github" class="overrideLiAInteraction">Login with GitHub</Link></li>
        <li><Link to="https://mnsigs.com/.auth/login/twitter" class="overrideLiAInteraction">Login with Twitter</Link></li>
    </ul>

  </Layout>
)

export default IndexPage