import { useState } from 'react'
import './ContactUs.css'

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    })
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero d-flex align-items-center justify-content-center position-relative">
        {/* Animated Background Elements */}
        <div className="hero-bg-elements">
          <div className="bg-circle circle-1"></div>
          <div className="bg-circle circle-2"></div>
          <div className="bg-circle circle-3"></div>
          <div className="bg-pattern"></div>
        </div>
        
        <div className="container position-relative" style={{ zIndex: 2 }}>
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10 col-xl-8 text-center">
              <div className="hero-badge mb-4">
                <span className="badge-text">Let's Connect</span>
              </div>
              <h1 className="contact-hero-title">
                <span className="title-line">Get In</span>
                <span className="title-line title-accent">Touch</span>
              </h1>
              <p className="contact-hero-description">
                We're here to help you with all your software development needs. Reach out and let's build something amazing together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section py-5">
        <div className="container position-relative">
          {/* Scroll to Top Indicator */}
          {/* <div className="scroll-to-top" onClick={scrollToTop}>
            <span className="scroll-text">Scroll to top</span>
            <div className="scroll-line"></div>
          </div> */}

          <div className="row g-5">
            {/* Left Column - Contact Information */}
            <div className="col-lg-6">
              <div className="contact-info position-relative">
                {/* Decorative Elements */}
                <div className="contact-decor decor-1"></div>
                <div className="contact-decor decor-2"></div>
                
                <div className="contact-label mb-4">
                  <span className="bracket">[</span>
                  <span className="label-text">Get In Touch</span>
                  <span className="bracket">]</span>
                </div>
                
                <h2 className="contact-title mb-4">
                  We're here to answer your questions.
                </h2>
                
                <p className="contact-description mb-5">
                  Have a question, suggestion, or just want to say hi? We're here and happy to hear from you!
                </p>
                
                {/* Contact Details */}
                <div className="contact-details">
                  {/* Location */}
                  <div className="contact-item d-flex align-items-start mb-4">
                    <div className="contact-icon-wrapper">
                      <svg className="contact-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div className="contact-item-content">
                      <h4 className="contact-item-title">Office Location</h4>
                      <p className="contact-item-text">Your Office Address, City, State, ZIP Code</p>
                    </div>
                  </div>
                  
                  {/* Email */}
                  <div className="contact-item d-flex align-items-start mb-4">
                    <div className="contact-icon-wrapper">
                      <svg className="contact-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="L22 6L12 13L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div className="contact-item-content">
                      <h4 className="contact-item-title">Send a Message</h4>
                      <p className="contact-item-text">contact@shinewellsoftech.com</p>
                    </div>
                  </div>
                  
                  {/* Phone */}
                  <div className="contact-item d-flex align-items-start">
                    <div className="contact-icon-wrapper">
                      <svg className="contact-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22 16.92V19.92C22.0011 20.1985 21.9441 20.4742 21.8325 20.7292C21.7209 20.9841 21.5573 21.2128 21.35 21.4C21.2278 21.5107 21.086 21.6002 20.9311 21.6642C20.7762 21.7283 20.6107 21.7659 20.443 21.775C20.1573 21.7833 19.871 21.7833 19.585 21.775C16.8751 21.5358 14.2671 20.7404 11.9 19.43C9.77982 18.3356 7.88787 16.8112 6.34 14.94C4.95258 13.2696 3.92517 11.3138 3.32 9.2C2.15338 6.33119 2.15338 3.16881 3.32 0.3C3.44115 0.106854 3.61128 -0.0508774 3.81119 -0.152803C4.0111 -0.254728 4.23366 -0.306998 4.46 -0.305H7.46C8.04568 -0.302952 8.61572 -0.111008 9.08238 0.252803C9.54904 0.616614 9.88721 1.10869 10.05 1.66C10.3763 2.90237 10.8437 4.1035 11.44 5.24C11.7238 5.78087 11.8129 6.39759 11.6929 6.98957C11.5729 7.58155 11.2502 8.11479 10.78 8.5L9.18 10.1C11.0426 12.9776 13.7224 15.6574 16.6 17.52L18.19 15.93C18.5852 15.4469 19.1232 15.0875 19.73 14.9C20.3368 14.7125 20.9846 14.7051 21.595 14.8788C22.2054 15.0525 22.7519 15.4006 23.16 15.88L22 16.92Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div className="contact-item-content">
                      <h4 className="contact-item-title">Call Us Directly</h4>
                      <p className="contact-item-text">+1 123 456 789</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Column - Contact Form */}
            <div className="col-lg-6">
              <div className="contact-form-wrapper position-relative">
                {/* Form Decorative Elements */}
                <div className="form-decor decor-top"></div>
                <div className="form-decor decor-bottom"></div>
                
                <div className="form-header mb-4">
                  <div className="form-icon-wrapper mb-3">
                    <svg className="form-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h2 className="form-title mb-2">Get In Touch</h2>
                  <p className="form-description">
                    Have a question, suggestion, or just want to say hi? Fill out the form below and we'll get back to you soon.
                  </p>
                </div>
                
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-group mb-4">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      className="form-input"
                      required
                    />
                    <div className="form-underline"></div>
                  </div>
                  
                  <div className="form-group mb-4">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your Email"
                      className="form-input"
                      required
                    />
                    <div className="form-underline"></div>
                  </div>
                  
                  <div className="form-group mb-4">
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Your Phone"
                      className="form-input"
                      required
                    />
                    <div className="form-underline"></div>
                  </div>
                  
                  <div className="form-group mb-4">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your Message"
                      className="form-input form-textarea"
                      rows="5"
                      required
                    ></textarea>
                    <div className="form-underline"></div>
                  </div>
                  
                  <button type="submit" className="submit-button">
                    <span className="button-text">SEND MESSAGE</span>
                    <span className="button-icon">
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22 2L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12">
              <div className="map-header text-center mb-5">
                <h2 className="map-title mb-3">Find Us</h2>
                <p className="map-description">
                  Visit our office or get in touch with us for any queries
                </p>
              </div>
              
              <div className="map-wrapper">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1841321910287!2d-73.98811768459398!3d40.75889597932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                  width="100%"
                  height="450"
                  style={{ border: 0, borderRadius: '24px' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Office Location"
                  className="map-iframe"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactUs

