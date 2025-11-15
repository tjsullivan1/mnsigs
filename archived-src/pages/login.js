import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/SEO"

const LoginPage = () => (
  <Layout>
    <Seo title="login" />

    <h1 class="center">Login</h1>
    <ul>
        <li><Link to="https://mnsigs.com/.auth/login/google" class="overrideLiAInteraction">Login with Google</Link></li>
        <li><Link to="https://mnsigs.com/.auth/login/aad" class="overrideLiAInteraction">Login with Email</Link></li>
        <li><Link to="https://mnsigs.com/.auth/login/github" class="overrideLiAInteraction">Login with GitHub</Link></li>
        <li><Link to="https://mnsigs.com/.auth/login/twitter" class="overrideLiAInteraction">Login with Twitter</Link></li>
    </ul>

    <p>If you have not yet registered, please send a message through the contact page above.</p>

  </Layout>
)

export default LoginPage