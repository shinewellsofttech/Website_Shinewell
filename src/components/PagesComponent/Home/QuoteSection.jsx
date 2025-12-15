import './QuoteSection.css'

const QuoteSection = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <section className="quote-section py-5 position-relative">
      {/* Scroll to Top Indicator */}
      <div className="scroll-to-top-indicator" onClick={scrollToTop}>
        <span className="scroll-text">Scroll to top</span>
        <div className="scroll-line"></div>
      </div>

      <div className="container-fluid px-4">
        <div className="row align-items-center g-0">
          {/* Left Side - Portrait/Image */}
          <div className="col-lg-3">
            <div className="quote-portrait-wrapper">
              <div className="portrait-frame">
                <div className="portrait-image">
                  {/* Placeholder for portrait - you can replace with actual image */}
                  <div className="portrait-placeholder">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Quote Content */}
          <div className="col-lg-9">
            <div className="quote-content-wrapper">
              <div className="quote-mark">"</div>
              <blockquote className="quote-text">
                Technology is best when it brings people together. 
                At Shinewell Softech, we don't just build software—we create 
                digital solutions that transform businesses and empower growth. 
                Innovation drives us, and excellence defines us.
              </blockquote>
              <div className="quote-author">
                <span className="author-name">Shinewell Softech</span>
                <span className="author-title">Innovation Team</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="quote-bg-pattern"></div>
    </section>
  )
}

export default QuoteSection

