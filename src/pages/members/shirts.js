import * as React from "react"
import FlannelForm from "../../components/Flannel.js"

import Layout from "../../components/Layout.js"
import Seo from "../../components/SEO.js"

const FlannelsPage = () => (
  <Layout>
    <Seo title="Flannels" />
    <p>Here are the flannels...</p>
    <FlannelForm />
  </Layout>
)

export default FlannelsPage
