import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/Layout"
import Seo from "../components/SEO"

const GalleryPage = () => (
    <Layout>
        <SEO title="Gallery" />
        <h1 class="center">Our Brothers</h1><br />
        <div class="row">
            <div class="col">
                <a target="_blank" rel="noreferrer" href="https://samnsigs001.blob.core.windows.net/media/photos/dj_harrelson_philips.jpg">
                    <img src="https://samnsigs001.blob.core.windows.net/media/photos/dj_harrelson_philips.jpg" alt="Dj, Woody, Rep. Phillips"/>
                </a>
                <div class="desc">Brother DJ Gries (Greater Minnesota Alumni Chapter President, 2021-2023) with Significant Sigs Woody Harrelson and Rep. Dean Phillips</div>
            </div>

            <div class="col">
                <a target="_blank" rel="noreferrer" href="https://samnsigs001.blob.core.windows.net/media/photos/gc_2021.jpg">
                    <img src="https://samnsigs001.blob.core.windows.net/media/photos/gc_2021.jpg" alt="Brothers at Grand Chapter 2021"/>
                </a>
                <div class="desc">Brothers at the 83rd Grand Chapter in Phoenix</div>
            </div>

            <div class="col">
                <a target="_blank" rel="noreferrer" href="https://samnsigs001.blob.core.windows.net/media/photos/province-2020.jpg">
                    <img src="https://samnsigs001.blob.core.windows.net/media/photos/province-2020.jpg" alt="Brothers after Province Conference 2020"/>
                </a>
                <div class="desc">Brothers after the 2020 North Central Province Conference</div>
            </div>
        </div>

        <div class="row">
            <div class="col">
                <a target="_blank" rel="noreferrer" href="https://samnsigs001.blob.core.windows.net/media/photos/barnard-phillips-harrelson.jpg">
                    <img src="https://samnsigs001.blob.core.windows.net/media/photos/barnard-phillips-harrelson.jpg" alt=""/>
                </a>
                <div class="desc">Brother DJ Gries (Greater Minnesota Alumni Chapter President, 2021-2023) with Significant Sigs Woody Harrelson and Rep. Dean Phillips</div>
            </div>

            <div class="col">
                <a target="_blank" rel="noreferrer" href="https://samnsigs001.blob.core.windows.net/media/photos/cake.jpg">
                    <img src="https://samnsigs001.blob.core.windows.net/media/photos/cake.jpg" alt=""/>
                </a>
                <div class="desc">Cake</div>
            </div>

            <div class="col">
                <a target="_blank" rel="noreferrer" href="https://samnsigs001.blob.core.windows.net/media/photos/chrsitmas-party.jpg">
                    <img src="https://samnsigs001.blob.core.windows.net/media/photos/chrsitmas-party.jpg" alt=""/>
                </a>
                <div class="desc">Description 3</div>
            </div>
        </div>
    </Layout>
)

export default GalleryPage


