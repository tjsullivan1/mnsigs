import * as React from "react"
import { Link } from "gatsby"

import Layout from "../../components/Layout.js"
import Seo from "../../components/SEO.js"

const UploadsPage = () => (
  <Layout>
    <Seo title="Uploads" />
    <p>Please use this form to upload photos or meeting minutes...</p>
    <form method="post" action="###REPLACE_WITH_LOGIC_APP_ENDPOINT###" enctype="multipart/form-data">
        <label>File Name <strong style={{ color:'red' }}>*</strong></label>
        <input type="file" name="file-name" id="file" />

        <label>Minutes or Photo <strong style={{ color:'red' }}>*</strong></label>
        <input type="radio" name="file-type" id="file-type" value="minutes" checked/>
        <input type="radio" name="file-type" id="file-type" value="photo"/>

        <button type="submit">Send</button>
        <input type="reset" value="Clear" />
    </form>
  </Layout>
)

export default UploadsPage
