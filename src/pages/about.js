import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <h1>About the Chapter</h1>
    <p>The Greater Minnesota Alumni Chapter was founded in 2019 as the Greater Minnesota Alumni Club. It received
    official recognition as an Association of the Sigma Chi Fraternity in October of 2019. In February of 2021, the
     chapter was chartereed and recognized as an official alumni chapter of the Sigma Chi Fraternity</p>
     <Link to="https://www.sigmachi.org">Learn more about Sigma Chi</Link>
     #TODO: Find the actual link for a search for this. If it doesn't exist, talk to James Jones about building one.
     <Link to="https://www.sigmachi.org/alumnichapters">Find an alumni chapter in your area!</Link>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default AboutPage
