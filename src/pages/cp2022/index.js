import * as React from "react"

import TicketForm from "../../components/cp2021Form"
import Layout from "../../components/Layout"
import Seo from "../../components/SEO"

const cp2022IndexPage = () => (
  <Layout>
    <Seo title="Holiday Party 2022!" />

    <h1 class="center">Get your tickets for the party today!</h1><br/>
    <h2>Details</h2>
    <ul>
      <li>Where: Derrek VanLith's Apartment Building Party Room (200 University Ave SE, Minneapolis, MN)</li>
      <li>When: December 10, 2022 5:30-10pm</li>
      <li>What: A chance to enjoy some brotherhood with some guests. We will have beer, wine, selzers, and hearty appetizers (all included in ticket price)</li>
      </ul>
    <h2>Purchase</h2>
    <p>Please use the form below to purchase your tickets. Please select whether you are a dues paying member, brother, or guest. This is a rudimentary form, if you are a brother bringing a guest, please select your status and then change quantity to 2.</p><br/>
    <TicketForm />


  </Layout>
)

export default cp2022IndexPage