import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import TicketForm from "../../components/Cp2021Form"
import Layout from "../components/Layout"
import Seo from "../components/SEO"

const cp2021IndexPage = () => (
  <Layout>
    <Seo title="Christmas Party 2021!" />

    <h1 class="center">Get your tickets for the party today!</h1><br/>
    <p>This site will host content about us, as well as applications built to support our operations.</p><br/>
    <TicketForm />


  </Layout>
)

export default IndexPage