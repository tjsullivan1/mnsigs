import * as React from "react"
import FlannelForm from "../components/Flannel.js"

import Layout from "../components/Layout.js"
import Seo from "../components/SEO.js"

const FlannelsPage = () => (
  <Layout>
    <Seo title="Flannels" />
    <p>Here are the flannels...</p>
    <div class="col">
                <a target="_blank" rel="noreferrer" href="https://samnsigs001.blob.core.windows.net/media/photos/flannel_mock.jpg">
                    <img src="https://samnsigs001.blob.core.windows.net/media/photos/flannel_mock.jpg" alt="GMAC 2022 Winter Flannel, red and black flannel pattern"/>
                </a>
                <div class="desc">GMAC 2022 Winter Flannel</div>
            </div>

    <FlannelForm />
  </Layout>
)

export default FlannelsPage
