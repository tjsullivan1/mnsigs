import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <h1 class="center">About the Chapter</h1>
    <p>The Greater Minnesota Alumni Chapter was founded in 2019 as the Greater Minnesota Alumni Club. It received
       official recognition as an Association of the Sigma Chi Fraternity in October of 2019. In February of 2021, the
       chapter was chartered and recognized as an official alumni chapter of the Sigma Chi Fraternity
    </p>
    <br/><hr/>

    <h1 class="center">Why an official organization?</h1>
    <ol type="A">
        <li>The purpose of this alumni organization shall be:</li>
        <ul>
            <li>Advancing the goals of friendship, justice, and learning.</li>
            <li>Strengthening the name and ideals of the Sigma Chi Fraternity.</li>
            <li>Providing and maintaining a vehicle for all area Sigma Chi alumni to share in the bonds of brotherhood.</li>
            <li>Assisting nearby undergraduate chapters.</li>
            <li>Supporting both financially and through participation, the programs of the Sigma Chi Fraternity and
                Foundation.
            </li>
            <li>Providing career, employment and academic guidance for both alumni and undergraduates.</li>
            <li>Providing a representative voice of area alumni regarding Fraternity issues.</li>
            <li>Contributing to the betterment of society and our communities by fostering healthy community relations and
                undertaking meaningful community service activities.
            </li>
        </ul>
    </ol>

    <br/><hr/>
    <h1 class="center">Get Involved</h1>
    <ul>
        <li><Link to="https://www.sigmachi.org" class="overrideLiAInteraction">Learn more about Sigma Chi</Link></li>
        {/* // #TODO: Find the actual link for a search for this. If it doesn't exist, talk to James Jones about building one. */}
        <li><Link to="https://www.sigmachi.org/alumnichapters" class="overrideLiAInteraction">Find an alumni chapter in your area!</Link></li>
    </ul>
  </Layout>
)

export default AboutPage
