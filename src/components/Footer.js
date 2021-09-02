import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Footer = () => (
    <footer class="footer" style={{ marginTop: `2rem`}} >
        <hr/>
        <div class="center">
            © {new Date().getFullYear()} - <Link to="/">Home</Link> - <Link to="/contact">Contact</Link>
        </div>
    </footer>
)

export default Footer