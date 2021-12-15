import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Logo from "../images/logo.svg"

const Header = ({ siteTitle, menuOpen, setMenuOpen }) => (
  <header>
    <div className="container">
      <div className="menu-wrapper">
        <Link to="/">
          <Logo className="logo" />
        </Link>
        <ul className="menu-desktop">
          <li className="menu-item">
            <Link activeClassName="is-active" to="/">
              Accueil
            </Link>
          </li>
          <li className="menu-item">
            <Link activeClassName="is-active" to="/services">
              Services
            </Link>
          </li>
          <li className="menu-item">
            <Link activeClassName="is-active" to="/portfolio">
              Portfolio
            </Link>
          </li>
          <li className="menu-item">
            <Link activeClassName="is-active" to="/contact">
              Contact
            </Link>
          </li>
          <li className="menu-button">
            <Link className="btn filled blue" to="/demander-un-devis">
              Demander un devis
            </Link>
          </li>
        </ul>
        <div
          onClick={() => setMenuOpen(!menuOpen)}
          className={`menu-burger ${menuOpen && "active"}`}
        >
          <div class="custom-menu-toggle openMenu"></div>
        </div>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  menuOpen: PropTypes.bool,
  setMenuOpen: PropTypes.func,
}

Header.defaultProps = {
  siteTitle: ``,
  menuOpen: false,
  setMenuOpen: () => console.log("Menu unavailable"),
}

export default Header
