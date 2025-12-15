import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import Home from '../pages/Home/Home'
import AboutUs from '../pages/About/AboutUs'
import ContactUs from '../pages/Contact/ContactUs'

const AppRoutes = () => {
  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header />
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default AppRoutes

