import { useState } from 'react'
import './Navbar.css'

const ChevronDown = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="chevron-icon">
    <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { label: 'Personal', hasDropdown: true },
    { label: 'Business', hasDropdown: true },
    { label: 'Partners', hasDropdown: true },
    { label: 'Useful Info', hasDropdown: true },
  ]

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          <a href="/" className="navbar-logo">
            <img src="/paypal-icon.svg" alt="PayPal" className="paypal-logo-img" />
          </a>
          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.label} className="nav-link-item">
                <a href="#" className="nav-link">
                  {link.label}
                  {link.hasDropdown && <ChevronDown />}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="navbar-right">
          <button className="btn-login">Log In</button>
          <button className="btn-signup">Sign Up</button>
        </div>

        <button
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`hamburger ${mobileMenuOpen ? 'open' : ''}`}></span>
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="mobile-menu">
          <ul className="mobile-nav-links">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a href="#" className="mobile-nav-link">
                  {link.label}
                  {link.hasDropdown && <ChevronDown />}
                </a>
              </li>
            ))}
          </ul>
          <div className="mobile-nav-actions">
            <button className="btn-login">Log In</button>
            <button className="btn-signup">Sign Up</button>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar

