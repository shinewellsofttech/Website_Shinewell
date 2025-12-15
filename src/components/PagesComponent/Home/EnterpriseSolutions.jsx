import './EnterpriseSolutions.css'

const EnterpriseSolutions = () => {
  return (
    <section className="enterprise-section py-5">
      <div className="container">
        <div className="row align-items-center g-5">
          {/* Left Section - Text Content */}
          <div className="col-lg-6">
            <div className="enterprise-content">
              <div className="enterprise-label mb-4">
                <span className="bracket">[</span>
                <span className="label-text">Enterprise</span>
                <span className="bracket">]</span>
              </div>
              
              <h2 className="enterprise-title mb-4">
                SOLUTIONS
              </h2>
              
              <h3 className="enterprise-subtitle mb-4">
                Design. Build. Deliver
              </h3>
              
              <p className="enterprise-description mb-4">
                The world is changing faster than ever. To keep pace with competition & stay ahead of competitors, businesses need to adopt new technologies & tools. Shinewell Softech's specialized software development expertise will power your digital transformation journey with smart & future-ready Enterprise Solutions including custom software, web applications, and scalable IT infrastructure.
              </p>
              
              {/* <div className="enterprise-cta">
                <span className="cta-text">Find your solution here..?</span>
              </div> */}
            </div>
          </div>
          
          {/* Right Section - Rotating Image */}
          <div className="col-lg-6">
            <div className="enterprise-image-wrapper">
              <img 
                src="/rotate.png" 
                alt="Enterprise Solutions" 
                className="enterprise-image rotating-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EnterpriseSolutions

