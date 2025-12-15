import './Services.css'

const Services = () => {
  const services = [
    {
      title: 'Custom Websites & Applications',
      description: 'Build tailored web solutions that perfectly fit your business needs and drive digital transformation.',
      image: '/images/custom-websites.jpg'
    },
    {
      title: 'Mobile App Development',
      description: 'Create powerful, scalable mobile applications for iOS and Android with modern technologies.',
      image: '/images/mobile-app.jpg'
    },
    {
      title: 'React.js & .NET Development',
      description: 'Expert development services using React.js for frontend and .NET for robust backend solutions.',
      image: '/images/react-dotnet.jpg'
    },
    {
      title: 'Creative Graphic Design',
      description: 'Professional graphic design services to create stunning visuals and brand identity for your business.',
      image: '/images/graphic-design.jpg'
    },
    {
      title: 'Advanced Payment Gateway Integration',
      description: 'Seamlessly integrate secure payment gateways to enable smooth transactions and enhance user experience.',
      image: '/images/payment-gateway.jpg'
    },
    {
      title: 'Business Automation Tools',
      description: 'Streamline your business processes with custom automation tools that increase efficiency and productivity.',
      image: '/images/automation.jpg'
    }
  ]

  return (
    <section className="services-section py-5">
      <div className="container position-relative" style={{ zIndex: 2 }}>
        <div className="services-header text-center mb-5">
          <div className="services-label mb-4">
            <span className="bracket">[</span>
            <span className="label-text">Our Services</span>
            <span className="bracket">]</span>
          </div>
          
          <h2 className="services-title mb-4">
            What We Offer
          </h2>
          
          <p className="services-description mx-auto">
            Partner with us to leverage cutting-edge technology solutions that transform 
            your business operations and drive sustainable growth in the digital era.
          </p>
        </div>

        <div className="row g-4">
          {services.map((service, index) => (
            <div key={index} className="col-md-6 col-lg-4">
              <div className="service-card">
                <div className="service-image-wrapper">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="service-image"
                    onError={(e) => {
                      // Fallback to placeholder if image doesn't exist
                      e.target.style.display = 'none'
                      e.target.nextSibling.style.display = 'flex'
                    }}
                  />
                  <div className="service-image-fallback" style={{ display: 'none' }}>
                    <div className="fallback-icon">📷</div>
                  </div>
                </div>
                <div className="service-content">
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-desc">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services

