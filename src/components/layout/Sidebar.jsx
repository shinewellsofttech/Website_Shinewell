import { Link, useLocation } from 'react-router-dom'
import './Sidebar.css'

const Sidebar = ({ isOpen, onClose }) => {
  const location = useLocation()

  const menuItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
    { path: '/dashboard', label: 'Dashboard' },
  ]

  return (
    <>
      {isOpen && <div className="sidebar-overlay" onClick={onClose} />}
      <aside className={`sidebar ${isOpen ? 'sidebar-open' : ''}`}>
        <div className="sidebar-header">
          <h3>Menu</h3>
          <button className="sidebar-close" onClick={onClose}>×</button>
        </div>
        <nav className="sidebar-nav">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`sidebar-link ${location.pathname === item.path ? 'active' : ''}`}
              onClick={onClose}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </aside>
    </>
  )
}

export default Sidebar

