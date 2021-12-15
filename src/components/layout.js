/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link, navigate } from "gatsby"

import Header from "./header"
import "../styles/style.scss"

const Layout = ({ children }) => {
  const [menuOpen, setMenuOpen] = React.useState(false)

  const closeMenuRedirect = (e, link) => {
    e.preventDefault()
    setMenuOpen(!menuOpen)
    setTimeout(() => navigate(link), 600)
  }

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className={`content ${menuOpen && "is-menu-open"}`}>
      <div className={`menu-mobile ${menuOpen && "open"}`}>
        <ul className="menu-mobile-nav">
          <li className="menu-mobile-nav-item">
            <a href="" onClick={e => closeMenuRedirect(e, "/")}>
              Accueil
            </a>
          </li>
          <li className="menu-mobile-nav-item">
            <a onClick={e => closeMenuRedirect(e, "/services")}>Services</a>
          </li>
          <li className="menu-mobile-nav-item">
            <a href="" onClick={e => closeMenuRedirect(e, "/portfolio")}>
              Portfolio
            </a>
          </li>
          <li className="menu-mobile-nav-item">
            <a href="" onClick={e => closeMenuRedirect(e, "/contact")}>
              Contact
            </a>
          </li>
          <li className="btn filled white">
            <a
              href=""
              onClick={e => closeMenuRedirect(e, "/demander-un-devis")}
            >
              Demander un devis
            </a>
          </li>
        </ul>
      </div>
      <Header
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        siteTitle={data.site.siteMetadata?.title || `Title`}
      />
      <main>{children}</main>
      <footer
        style={{
          marginTop: `2rem`,
        }}
      >
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
