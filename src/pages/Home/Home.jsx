import Hero from '../../components/PagesComponent/Home/Hero'
import About from '../../components/PagesComponent/Home/About'
import MovingStrips from '../../components/PagesComponent/Home/MovingStrips'
import Services from '../../components/PagesComponent/Home/Services'
import EnterpriseSolutions from '../../components/PagesComponent/Home/EnterpriseSolutions'
import QuoteSection from '../../components/PagesComponent/Home/QuoteSection'
import './Home.css'

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <About />
      <MovingStrips />
      <Services />
      <EnterpriseSolutions />
      <QuoteSection />
    </div>
  )
}

export default Home
