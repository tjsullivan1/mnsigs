import * as React from "react"
import MailchimpForm from "../components/MailchimpForm"

import Layout from "../components/Layout"
import Seo from "../components/SEO"

const ContactPage = () => (
  <Layout>
    <Seo title="Contact" />
    <h1 class="center">Subscribe to our mailing list!</h1><br />
      <MailchimpForm/>

  </Layout>
)

export default ContactPage
