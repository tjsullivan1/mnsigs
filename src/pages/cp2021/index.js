import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import TicketForm from "../../components/Cp2021Form"
import Layout from "../../components/Layout"
import Seo from "../../components/SEO"

const cp2021IndexPage = () => (
  <Layout>
    <Seo title="Christmas Party 2021!" />

    <h1 class="center">Get your tickets for the party today!</h1><br/>
    <p>Please use the form below to purchase your tickets. Please select whether you are a dues paying member, brother, or guest. This is a rudimentary form, if you are a brother bringing a guest, please select your status and then change quantity to 2.</p><br/>
    <TicketForm />


  </Layout>
)

export default cp2021IndexPage