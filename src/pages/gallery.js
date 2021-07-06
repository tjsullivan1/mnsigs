import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const GalleryPage = () => (
    <Layout>        
        <SEO title="Gallery" />
        <div class="gallery">
        <a target="_blank" href="../imgages/gallery/dj_harrelson_phillips.jpg">
            <img src="../imgages/gallery/dj_harrelson_phillips.jpg" alt="Dj, Woody, Rep. Phillips" width="600" height="400">
        </a>
        <div class="desc">Brother DJ Gries (Greater Minnesota Alumni Chapter President, 2021-2023) with Significant Sigs Woody Harrelson and Rep. Dean Phillips</div>
        </div>
        <div class="gallery">
        <a target="_blank" href="../imgages/gallery/gc_2021.jpg">
            <img src="../imgages/gallery/gc_2021.jpg" alt="Brothers at the 83rd Grand Chapter in Phoenix" width="600" height="400">
        </a>
        <div class="desc">Brothers at the 83rd Grand Chapter in Phoenix</div>
        </div>
        <div class="gallery">
        <a target="_blank" href="../imgages/gallery/province_2020.jpg">
            <img src="../imgages/gallery/province_2020.jpg" alt="Brothers after the 2020 North Central Province Conference" width="600" height="400">
        </a>
        <div class="desc">Brothers after the 2020 North Central Province Conference</div>
        </div>
        <Link to="/">Go back to the homepage</Link>
    </Layout>
)

export default GalleryPage