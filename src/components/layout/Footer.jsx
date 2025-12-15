import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      {/* Decorative Top Border */}
      <div className="footer-top-border"></div>
      
      <div className="container">
        <div className="footer-content">
          {/* Company Info Section */}
          <div className="footer-section footer-company">
            <div className="footer-logo-wrapper mb-4">
              <Link to="/" className="footer-logo">
                <img src="/logo.png" alt="Shinewell Softech" className="footer-logo-img" />
                {/* <span className="footer-logo-text">Shinewell Softech</span> */}
              </Link>
            </div>
            <p className="footer-description">
              Building innovative software solutions for the future. We transform businesses with cutting-edge technology and expert development services.
            </p>
            
            {/* Social Media Links */}
            <div className="footer-social mt-4">
              <a href="#" className="social-link" aria-label="Facebook">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="#" className="social-link" aria-label="Twitter">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23 3A10.9 10.9 0 0 1 20.08 4.61A4.5 4.5 0 0 0 22.46 2A9 9 0 0 1 19.26 1.46A4.5 4.5 0 0 0 15.88 3A4.5 4.5 0 0 0 3 7.46A12.81 12.81 0 0 1 1.61 6.19A4.5 4.5 0 0 0 3.5 11.5A4.5 4.5 0 0 1 1 11A4.5 4.5 0 0 0 4.5 16A4.5 4.5 0 0 1 1 15.46A4.5 4.5 0 0 0 7.5 20A9.1 9.1 0 0 1 1 21.46A12.8 12.8 0 0 0 8.5 23C16.97 23 21.89 15.46 21.89 8.79C21.89 8.6 21.89 8.42 21.88 8.23A12.9 12.9 0 0 0 23 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="#" className="social-link" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 8A6 6 0 0 1 22 14V21H18V14A2 2 0 0 0 16 12A2 2 0 0 0 14 14V21H10V8H14V9.5A4 4 0 0 1 16 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <rect x="2" y="8" width="4" height="13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="#" className="social-link" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="footer-section">
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              <li>
                <Link to="/" className="footer-link">
                  <span className="link-icon">→</span>
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link to="/about" className="footer-link">
                  <span className="link-icon">→</span>
                  <span>About</span>
                </Link>
              </li>
              <li>
                <Link to="/products" className="footer-link">
                  <span className="link-icon">→</span>
                  <span>Products</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="footer-link">
                  <span className="link-icon">→</span>
                  <span>Contact</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Section */}
          <div className="footer-section">
            <h4 className="footer-title">Services</h4>
            <ul className="footer-links">
              <li>
                <Link to="/services" className="footer-link">
                  <span className="link-icon">→</span>
                  <span>Custom Software</span>
                </Link>
              </li>
              <li>
                <Link to="/services" className="footer-link">
                  <span className="link-icon">→</span>
                  <span>Web Applications</span>
                </Link>
              </li>
              <li>
                <Link to="/services" className="footer-link">
                  <span className="link-icon">→</span>
                  <span>Mobile Apps</span>
                </Link>
              </li>
              <li>
                <Link to="/services" className="footer-link">
                  <span className="link-icon">→</span>
                  <span>Enterprise Solutions</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info Section */}
          <div className="footer-section">
            <h4 className="footer-title">Contact Info</h4>
            <ul className="footer-contact">
              <li className="contact-item">
                <div className="contact-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span>Your Office Address, City, State</span>
              </li>
              <li className="contact-item">
                <div className="contact-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="L22 6L12 13L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <a href="mailto:contact@shinewellsoftech.com">contact@shinewellsoftech.com</a>
              </li>
              <li className="contact-item">
                <div className="contact-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 16.92V19.92C22.0011 20.1985 21.9441 20.4742 21.8325 20.7292C21.7209 20.9841 21.5573 21.2128 21.35 21.4C21.2278 21.5107 21.086 21.6002 20.9311 21.6642C20.7762 21.7283 20.6107 21.7659 20.443 21.775C20.1573 21.7833 19.871 21.7833 19.585 21.775C16.8751 21.5358 14.2671 20.7404 11.9 19.43C9.77982 18.3356 7.88787 16.8112 6.34 14.94C4.95258 13.2696 3.92517 11.3138 3.32 9.2C2.15338 6.33119 2.15338 3.16881 3.32 0.3C3.44115 0.106854 3.61128 -0.0508774 3.81119 -0.152803C4.0111 -0.254728 4.23366 -0.306998 4.46 -0.305H7.46C8.04568 -0.302952 8.61572 -0.111008 9.08238 0.252803C9.54904 0.616614 9.88721 1.10869 10.05 1.66C10.3763 2.90237 10.8437 4.1035 11.44 5.24C11.7238 5.78087 11.8129 6.39759 11.6929 6.98957C11.5729 7.58155 11.2502 8.11479 10.78 8.5L9.18 10.1C11.0426 12.9776 13.7224 15.6574 16.6 17.52L18.19 15.93C18.5852 15.4469 19.1232 15.0875 19.73 14.9C20.3368 14.7125 20.9846 14.7051 21.595 14.8788C22.2054 15.0525 22.7519 15.4006 23.16 15.88L22 16.92Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <a href="tel:+1123456789">+1 123 456 789</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="copyright">
              &copy; {currentYear} <span className="copyright-brand">Shinewell Softech</span>. All rights reserved.
            </p>
            <div className="footer-legal">
              <Link to="/privacy" className="legal-link">Privacy Policy</Link>
              <span className="legal-separator">•</span>
              <Link to="/terms" className="legal-link">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

