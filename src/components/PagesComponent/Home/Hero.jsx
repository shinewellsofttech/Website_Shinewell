import { useEffect, useRef } from 'react'
import './Hero.css'
import * as THREE from 'three'

const Hero = () => {
  const vantaRef = useRef(null)
  const vantaEffect = useRef(null)
  const heroRef = useRef(null)
  const heroContentRef = useRef(null)
  const heroTextRef = useRef(null)
  const heroVisualRef = useRef(null)

  useEffect(() => {
    // Destroy existing effect if it exists
    if (vantaEffect.current) {
      vantaEffect.current.destroy()
      vantaEffect.current = null
    }

    const cssColor = "#20CCEF";
    const vantaColor = Number(cssColor.replace("#", "0x"));

    if (vantaRef.current) {
      import('vanta/dist/vanta.net.min.js').then((VANTA) => {
        if (vantaRef.current) {
          vantaEffect.current = VANTA.default({
            el: vantaRef.current,
            THREE: THREE,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            color: 0x20CCEF,
            backgroundColor: 0xE0F7FA,
            points: 9.00,
            maxDistance: 20.00,
            spacing: 18.00,
            showDots: true,
            backgroundAlpha: 0.2
          })
        }
      }).catch((error) => {
        console.error('Error loading Vanta.js:', error)
      })
    }

    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy()
        vantaEffect.current = null
      }
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const heroRect = heroRef.current.getBoundingClientRect()
        const heroHeight = heroRect.height
        const scrollPosition = window.scrollY
        const heroTop = heroRect.top + scrollPosition
        const heroBottom = heroTop + heroHeight
        
        // Only apply parallax when hero section is visible
        const isHeroVisible = scrollPosition < heroBottom
        
        if (isHeroVisible) {
          // Calculate scroll progress within hero section (0 to 1)
          const progress = Math.max(0, Math.min(1, (scrollPosition - heroTop) / heroHeight))
          
          // Apply parallax transforms only within hero section
          if (vantaRef.current) {
            const parallaxSpeed = 0.3
            const translateY = (scrollPosition - heroTop) * parallaxSpeed
            vantaRef.current.style.transform = `translate3d(0, ${translateY}px, 0)`
          }

          if (heroContentRef.current) {
            const contentSpeed = 0.15
            const translateY = (scrollPosition - heroTop) * contentSpeed
            heroContentRef.current.style.transform = `translate3d(0, ${translateY}px, 0)`
          }

          if (heroTextRef.current) {
            const textSpeed = 0.1
            const translateY = (scrollPosition - heroTop) * textSpeed
            const opacity = Math.max(0.3, 1 - progress * 0.7)
            heroTextRef.current.style.transform = `translate3d(0, ${translateY}px, 0)`
            heroTextRef.current.style.opacity = opacity
          }

          if (heroVisualRef.current) {
            const visualSpeed = 0.1
            const translateY = (scrollPosition - heroTop) * visualSpeed
            heroVisualRef.current.style.transform = `translate3d(0, ${translateY}px, 0)`
            heroVisualRef.current.style.opacity = 1
          }
        } else {
          // Reset transforms when hero section is scrolled past
          if (vantaRef.current) {
            vantaRef.current.style.transform = 'translate3d(0, 0, 0)'
          }
          if (heroContentRef.current) {
            heroContentRef.current.style.transform = 'translate3d(0, 0, 0)'
          }
          if (heroTextRef.current) {
            heroTextRef.current.style.transform = 'translate3d(0, 0, 0)'
            heroTextRef.current.style.opacity = 0.3
          }
          if (heroVisualRef.current) {
            heroVisualRef.current.style.transform = 'translate3d(0, 0, 0)'
            heroVisualRef.current.style.opacity = 1
          }
        }
      }
    }

    // Throttle scroll events for better performance
    let ticking = false
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    handleScroll() // Initial call

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <section ref={heroRef} className="hero d-flex align-items-center justify-content-center position-relative overflow-hidden">
      <div ref={vantaRef} className="hero-background position-absolute top-0 start-0 w-100 h-100">
        <div className="hero-overlay position-absolute top-0 start-0 w-100 h-100"></div>
        <div className="hero-text-overlay position-absolute top-0 start-0 w-100 h-100"></div>
      </div>
      
      <div ref={heroContentRef} className="container position-relative hero-content-wrapper">
        <div className="row justify-content-center">
          <div ref={heroTextRef} className="col-12 col-lg-10 col-xl-8 hero-text text-center">
            <h1 className="hero-title">
              <span className="hero-title-line d-block">SMART SOFTWARE</span>
              <span className="hero-title-line hero-title-accent d-block">SMARTER BUSINESS</span>
            </h1>
            
            <p className="hero-description mt-3 mx-auto">
              Building cutting-edge software solutions for a smarter business and 
              innovative products that transform businesses and drive digital success.
            </p>
          </div>
          
          <div ref={heroVisualRef} className="col-12 col-lg-10 col-xl-8 hero-visual mt-3">
            <div className="hero-features d-flex flex-column flex-md-row justify-content-center align-items-center gap-3">
              <div className="hero-feature-item d-flex flex-column align-items-center text-center">
                <div className="hero-feature-icon d-flex align-items-center justify-content-center mb-3">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="hero-feature-content">
                  <h3 className="hero-feature-title mb-2">Innovation</h3>
                  <p className="hero-feature-desc mb-0">Cutting-edge solutions</p>
                </div>
              </div>
              
              <div className="hero-feature-item d-flex flex-column align-items-center text-center">
                <div className="hero-feature-icon d-flex align-items-center justify-content-center mb-3">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 8V12L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="hero-feature-content">
                  <h3 className="hero-feature-title mb-2">Reliability</h3>
                  <p className="hero-feature-desc mb-0">24/7 support & uptime</p>
                </div>
              </div>
              
              <div className="hero-feature-item d-flex flex-column align-items-center text-center">
                <div className="hero-feature-icon d-flex align-items-center justify-content-center mb-3">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="hero-feature-content">
                  <h3 className="hero-feature-title mb-2">Scalability</h3>
                  <p className="hero-feature-desc mb-0">Grows with your business</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

