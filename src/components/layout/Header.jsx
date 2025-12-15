import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Header.css'

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/products', label: 'Products' },
    { path: '/career', label: 'Career' },
    { path: '/contact', label: 'Contact' },
  ]

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <header className="header navbar navbar-expand-lg sticky-top">
      <div className="container">
        <Link to="/" className="navbar-brand logo">
          <img src="/logo.png" alt="Shinewell Softech" className="logo-img me-2" />
          {/* <span className="logo-text">Shinewell Softech</span> */}
        </Link>
        
        <button 
          className="navbar-toggler mobile-menu-toggle"
          type="button"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
        >
          <span className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>

        <nav className={`navbar-collapse collapse nav ${isMobileMenuOpen ? 'show nav-open' : ''}`}>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {navLinks.map((link) => (
              <li key={link.path} className="nav-item">
                <Link
                  to={link.path}
                  className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header

