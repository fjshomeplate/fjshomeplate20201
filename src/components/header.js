import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: '#F34336',
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <h2>
      <Link
      to="/#wwa"
      style={{
        color: `white`,
        textDecoration: `none`,
      }}
      >
      Who We Are
      </Link>
      </h2>
      <h2>
      <Link
      to="/#wwd"
      style={{
        color: `white`,
        textDecoration: `none`,
      }}
      >
      What We Do
      </Link>
      </h2>
      <button id="getstarted"href="">Get Started</button>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
