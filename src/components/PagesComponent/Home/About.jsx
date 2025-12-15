import { useState, useEffect, useRef } from 'react'
import './About.css'

const About = () => {
  const [counts, setCounts] = useState({
    clients: 0,
    websites: 0,
    satisfied: 0,
    experience: 0
  })
  const [hasAnimated, setHasAnimated] = useState(false)
  const aboutRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true)
            animateNumbers()
          }
        })
      },
      { threshold: 0.3 }
    )

    if (aboutRef.current) {
      observer.observe(aboutRef.current)
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current)
      }
    }
  }, [hasAnimated])

  const animateNumbers = () => {
    const targets = {
      clients: 150,
      websites: 100,
      satisfied: 200,
      experience: 28
    }

    const duration = 2000 // 2 seconds
    const steps = 60
    const stepDuration = duration / steps

    let currentStep = 0

    const interval = setInterval(() => {
      currentStep++
      const progress = currentStep / steps

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)

      setCounts({
        clients: Math.floor(targets.clients * easeOutQuart),
        websites: Math.floor(targets.websites * easeOutQuart),
        satisfied: Math.floor(targets.satisfied * easeOutQuart),
        experience: Math.floor(targets.experience * easeOutQuart)
      })

      if (currentStep >= steps) {
        // Set final values
        setCounts(targets)
        clearInterval(interval)
      }
    }, stepDuration)
  }

  return (
    <section ref={aboutRef} className="about-section py-5">
      <div className="container position-relative" style={{ zIndex: 2 }}>
        <div className="row align-items-center g-5">
          {/* Left Section - Text Content */}
          <div className="col-lg-7">
            <div className="about-content">
              <div className="about-label mb-4">
                <span className="bracket">[</span>
                <span className="label-text">About the Company</span>
                <span className="bracket">]</span>
              </div>
              
              <h2 className="about-title mb-4">
                Transforming Businesses with{' '}
                <span className="title-accent">Innovative Software</span>
                <br />
                <span className="title-accent">Solutions</span>
              </h2>
              
              <p className="about-description mb-4">
                We are a leading software development company specializing in creating 
                cutting-edge digital solutions that drive business growth and digital transformation. 
                Our expert team delivers custom software, web applications, and innovative 
                technology solutions tailored to your business needs.
              </p>
              
              <ul className="about-features list-unstyled">
                <li className="feature-item d-flex align-items-start mb-3">
                  <span className="check-icon me-3">✓</span>
                  <span className="feature-text">Custom software development and web solutions</span>
                </li>
                <li className="feature-item d-flex align-items-start mb-3">
                  <span className="check-icon me-3">✓</span>
                  <span className="feature-text">Expert team with years of industry experience</span>
                </li>
                <li className="feature-item d-flex align-items-start">
                  <span className="check-icon me-3">✓</span>
                  <span className="feature-text">End-to-end project delivery and support</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Right Section - Stats Cards Grid */}
          <div className="col-lg-5">
            <div className="about-visual position-relative">
              {/* Stats Cards Grid */}
              <div className="stats-grid">
                <div className="stat-card-glass stat-card-item-1">
                  <div className="stat-number-large">{counts.clients}+</div>
                  <div className="stat-label-large">
                    COOPERATIVE<br />SOCIETY CLIENTS
                  </div>
                  <div className="card-glow glow-top-left"></div>
                </div>
                
                <div className="stat-card-glass stat-card-item-2">
                  <div className="stat-number-large">{counts.websites}+</div>
                  <div className="stat-label-large">
                    WEBSITES<br />DELIVERED
                  </div>
                  <div className="card-glow glow-bottom-center"></div>
                </div>
                
                <div className="stat-card-glass stat-card-item-3">
                  <div className="stat-number-large">{counts.satisfied}+</div>
                  <div className="stat-label-large">
                    SATISFIED<br />CLIENTS
                  </div>
                  <div className="card-glow glow-top-right"></div>
                </div>
                
                <div className="stat-card-glass stat-card-item-4">
                  <div className="stat-number-large">{counts.experience}+</div>
                  <div className="stat-label-large">
                    YEARS<br />EXPERIENCE
                  </div>
                  <div className="card-glow glow-center"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

