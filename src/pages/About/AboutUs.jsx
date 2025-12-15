import './AboutUs.css'


const AboutUs = () => {


    

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero d-flex align-items-center justify-content-center position-relative">
        {/* Animated Background Elements */}
        <div className="about-hero-bg-elements">
          <div className="about-bg-circle circle-1"></div>
          <div className="about-bg-circle circle-2"></div>
          <div className="about-bg-circle circle-3"></div>
          <div className="about-bg-pattern"></div>
        </div>
        
        <div className="container position-relative" style={{ zIndex: 2 }}>
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10 col-xl-8 text-center">
              <div className="about-hero-badge mb-4">
                <span className="about-badge-text">Who We Are</span>
              </div>
              <h1 className="about-hero-title">
                <span className="about-title-line">About</span>
                <span className="about-title-line about-title-accent">Shinewell Softech</span>
              </h1>
              <p className="about-hero-description">
                We are a leading software development company dedicated to transforming businesses 
                through innovative technology solutions. With years of expertise, we deliver 
                cutting-edge software that drives growth and digital transformation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutUs

