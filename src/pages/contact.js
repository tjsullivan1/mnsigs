import * as React from "react"
import { Link } from "gatsby"
import MailchimpForm from "../components/MailchimpForm"

import Layout from "../components/Layout"
import Seo from "../components/SEO"

const ContactPage = () => (
  <Layout>
    <Seo title="Contact" />
    <h1 class="center">Subscribe to our mailing list!</h1><br />
      <MailchimpForm/>
    <h1 class="center">Questions or Comments? Let us know!</h1><br />
    <h3>Send us a message</h3>
    <form method="post" action="https://mnsigs-contact.azurewebsites.net/api/contact?code=DC287c4iya8GoR0KlNNbA/qa7iL6Qhv39ZN57NqtV7rGMKEhHoD/vA==">
        <label>Name <strong style={{ color:'red' }}>*</strong></label>
        <input type="text" name="name" id="name" />

        <label>Email <strong style={{ color:'red' }}>*</strong></label>
        <input type="email" name="email" id="email" />

        <label>Phone</label>
        <input type="phone" name="phone" id="phone" />

        <label>Subject <strong style={{ color:'red' }}>*</strong></label>
        <input type="text" name="subject" id="subject" />

        <label>Message <strong style={{ color:'red' }}>*</strong></label>
        <textarea name="message" id="message" rows="5" /><br/>

        <button type="submit">Send</button>
        <input type="reset" value="Clear" />
    </form>
  </Layout>
)

export default ContactPage
