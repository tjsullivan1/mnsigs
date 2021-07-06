import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const GalleryPage = () => (
    <Layout>        
        <SEO title="Gallery" />
        <div class="gallery">
        <a target="_blank" href="https://samnsigs001.blob.core.windows.net/media/photos/dj_harrelson_philips.jpg">
            <StaticImage
            src="https://samnsigs001.blob.core.windows.net/media/photos/dj_harrelson_philips.jpg"
            width={600}
            quality={400}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Dj, Woody, Rep. Phillips"
            style={{ marginBottom: `1.45rem` }}
            />
        </a>
        <div class="desc">Brother DJ Gries (Greater Minnesota Alumni Chapter President, 2021-2023) with Significant Sigs Woody Harrelson and Rep. Dean Phillips</div>
        </div>
        <div class="gallery">
        <a target="_blank" href="https://samnsigs001.blob.core.windows.net/media/photos/gc_2021.jpg">
        <StaticImage
            src="https://samnsigs001.blob.core.windows.net/media/photos/gc_2021.jpg"
            width={600}
            quality={400}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Brothers at the 83rd Grand Chapter in Phoenix"
            style={{ marginBottom: `1.45rem` }}
            />
        </a>
        <div class="desc">Brothers at the 83rd Grand Chapter in Phoenix</div>
        </div>
        <div class="gallery">
        <a target="_blank" href="https://samnsigs001.blob.core.windows.net/media/photos/province-2020.jpg">
        <StaticImage
            src="https://samnsigs001.blob.core.windows.net/media/photos/province-2020.jpg"
            width={600}
            quality={400}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Brothers after the 2020 North Central Province Conference"
            style={{ marginBottom: `1.45rem` }}
            />
        </a>
        <div class="desc">Brothers after the 2020 North Central Province Conference</div>
        </div>
        <Link to="/">Go back to the homepage</Link>
    </Layout>
)

export default GalleryPage


