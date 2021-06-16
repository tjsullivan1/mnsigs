import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <form method="post" action="https://mnsigs-contact.azurewebsites.net/api/contact?code=DC287c4iya8GoR0KlNNbA/qa7iL6Qhv39ZN57NqtV7rGMKEhHoD/vA==">
      <label>
        Name
        <input type="text" name="name" id="name" />
      </label>
      <label>
        Email
        <input type="email" name="email" id="email" />
      </label>
      <label>
        Phone
        <input type="phone" name="phone" id="phone" />
      </label>
      <label>
        Subject
        <input type="text" name="subject" id="subject" />
      </label>
      <label>
        Message
        <textarea name="message" id="message" rows="5" />
      </label>
      <button type="submit">Send</button>
      <input type="reset" value="Clear" />
    </form>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default ContactPage
