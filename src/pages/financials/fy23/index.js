import * as React from "react"

import TicketForm from "../../../components/Cp2021Form"
import Layout from "../../../components/Layout"
import Seo from "../../../components/SEO"

const fy23FinIndexPage = () => (
  <Layout>
    <Seo title="GMAC Financials FY23" />

    <h1 class="center">Here are our financials for FY23 (July 1, 2022 - June 31, 2023) </h1><br />

    <h2>Proposed Budget</h2>
    <table>
      <thead>
        <tr>
          <th colspan="3">Expenses</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Expense Name</td>
          <td>Amount</td>
          <td>Notes</td>
        </tr>
        <tr>
          <td>July Event</td>
          <td>$-</td>
          <td>Canterbury?</td>
        </tr>
        <tr>
          <td>August Meeting</td>
          <td>$-</td>
          <td>Meeting at bar? If changes to someones house or something, would suggest allocating funds</td>
        </tr>
        <tr>
          <td>September Event</td>
          <td>$125.00</td>
          <td>Twins Tailgate? Burgers/brats/etc.</td>
        </tr>
        <tr>
          <td>October Meeting</td>
          <td>$125.00</td>
          <td>Ritual meeting, bonfire & food</td>
        </tr>
        <tr>
          <td>November Event</td>
          <td>$125.00</td>
          <td>Top Golf, paying for bay time - no food or drink</td>
        </tr>
        <tr>
          <td>December Party	 $900.00 	Budget for 30 people x</td>
          <td>$30/person</td>
          <td></td>
        </tr>
        <tr>
          <td>January Event</td>
          <td>$125.00</td>
          <td>Ice Fishing - money to be used for sides & snacks (fish to hopefully be caught)</td>
        </tr>
        <tr>
          <td>February Meeting</td>
          <td>$-</td>
          <td>Meeting at bar? If changes to someones house or something, would suggest allocating funds</td>
        </tr>
        <tr>
          <td>March Event</td>
          <td>$-</td>
          <td>Timberwolves game - not proposing for chapter to pay anything t that time</td>
        </tr>
        <tr>
          <td>April Meeting</td>
          <td>$125.00</td>
          <td>Ritual meeting, bonfire & food</td>
        </tr>
        <tr>
          <td>May Event</td>
          <td>$-</td>
          <td>Twins??</td>
        </tr>
        <tr>
          <td>June Meeting</td>
          <td>$125.00</td>
          <td>New member welcome meeting! Grilling foods</td>
        </tr>
        <tr>
          <td>Annual Dues</td>
          <td>$250.00</td>
          <td>Required by HQ for us to call ourselves an Alumni chapter</td>
        </tr>
        <tr>
          <td>Mailchimp (paid monthly, but annual total)</td>
          <td>$145</td>
          <td>Currently paid by Tim (Included in member donations below)</td>
        </tr>
        <tr>
          <td>MNSigs.com Domain</td>
          <td>$12.00</td>
          <td>Currently paid by Tim (Included in member donations below)</td>
        </tr>
        <tr>
          <td><b>Total Expenses</b>></td>
          <td>$2057</td>
          <td>Currently paid by Tim (Included in member donations below)</td>
        </tr>
      </tbody>
      <thead>
        <tr>
          <th colspan="3">Income</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Annual Dues</td>
          <td>$400</td>
          <td>Expecting 20 paying members</td>
        </tr>
        <tr>
          <td>Christmas Party</td>
          <td>$1200</td>
          <td>Expecting 30 attendees</td>
        </tr>
        <tr>
          <td>Member Donations</td>
          <td>$457</td>
          <td>This is not necessarily accurate, but is used to show what we need to break even.</td>
        </tr>
      </tbody>
    </table>

  </Layout>
)

export default fy23FinIndexPage