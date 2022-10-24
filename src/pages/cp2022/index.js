import * as React from "react"

import TicketForm from "../../components/Cp2021Form"
import Layout from "../../components/Layout"
import Seo from "../../components/SEO"

const cp2022IndexPage = () => (
  <Layout>
    <Seo title="Holiday Party 2022!" />

    <h1 class="center">Get your tickets for the party today!</h1><br/>
    <h2>Details</h2>
    <ul>
      <li>Where: Derrek VanLith's Apartment Building Party Room (200 University Ave SE, Minneapolis, MN)</li>
      <li>When: December 10, 2022 5:30-9pm</li>
      <li>What: A chance to enjoy some brotherhood with some guests. We will have beer, wine, selzers, and hearty appetizers (all included in ticket price)</li>
      </ul>
    <h2>Purchase</h2>
    <p>Please use the form below to purchase your tickets. Please select whether you are a dues paying member, brother, or guest. This is a rudimentary form, if you are a brother bringing a guest, please select your status and then change quantity to 2.</p><br/>
    <TicketForm />
    <h2>On Pricing</h2>
    <p>We have heard some feedback on the pricing for this event, and in the spirit of transparency we do want to clarify several things. This event is intended to deliver you a significant amount of value, but we do charge a premium to use this as a fundraiser for chapter operations and long-term growth. You should expect to be seeing about $25-$30 worth of value on your ticket. We do not want the pricing to be an impediment to any brothers attanedance, so if this is the case for you, please reach out to one of the members of the executive committee.</p>
    <p>Regarding dues-paying vs. non-dues paying, we've strategically discounted this event to be $10 cheaper per person attending on a dues-paying member's bill. The rationale here is to incentivize the paying of dues to the Alumni Chapter. This $10 discount represents half of your dues annaully, and if you bring a guest, your dues pay for themselves! If you haven't paid your dues yet, but would like to see this discount - please reach out to Tim!</p>
  </Layout>
)

export default cp2022IndexPage