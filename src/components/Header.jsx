import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  const toggleMenu = () => setMenuOpen(prev => !prev)

  return (
    <>
      <header className={`header${scrolled ? ' scrolled' : ''}`} id="mainHeader">
        <Link to="/">
          <img src="/img/Krisna_Logo-removebg-preview.png" alt="Krisna IVF Center Logo" className="header-logo-img" />
        </Link>

        <nav className="desktop-nav">
          <Link to="/">Home</Link>
          <Link to="/aboutus">About Us</Link>
          <div className="dropdown">
            <a href="#">Services <i className="fa-solid fa-angle-down" style={{ fontSize: '12px', marginLeft: '4px' }}></i></a>
            <div className="dropdown-menu">
              <Link to="/ivf">IVF Treatment</Link>
              <Link to="/iui">IUI Procedure</Link>
              <Link to="/icsi">ICSI</Link>
              <Link to="/donor">Donor Programs</Link>
              <Link to="/fertility_surgery">Fertility Surgery</Link>
            </div>
          </div>
          <Link to="/faq">FAQ</Link>
          <Link to="/success">Success Stories</Link>
          <Link to="/blog">Blogs</Link>
          <Link to="/contact">Contact</Link>
          <a href="https://crm-ebon-two.vercel.app/login" className="btn-primary" style={{ padding: '10px 25px', borderRadius: '8px', color: '#fff' }}>Login</a>
        </nav>

        <div className="mobile-toggle" onClick={toggleMenu} aria-label="Open Menu">
          <i className="fa-solid fa-bars"></i>
        </div>
      </header>

      <div className={`offcanvas-overlay${menuOpen ? ' active' : ''}`} onClick={toggleMenu}></div>
      <div className={`offcanvas-menu${menuOpen ? ' active' : ''}`} id="mobileMenu">
        <div className="offcanvas-header">
          <img src="/img/Krisna_Logo-removebg-preview.png" alt="Krisna IVF Logo" style={{ height: '40px' }} />
          <div className="close-btn" onClick={toggleMenu}>&times;</div>
        </div>
        <div className="mobile-links">
          <Link to="/">Home</Link>
          <Link to="/aboutus">About Us</Link>
          <div>
            <span className="mobile-sub-group-title">Treatments</span>
            <div className="mobile-sub-links">
              <Link to="/ivf">IVF Treatment</Link>
              <Link to="/iui">IUI Procedure</Link>
              <Link to="/icsi">ICSI</Link>
              <Link to="/donor">Donor Services</Link>
              <Link to="/fertility_surgery">Fertility Surgery</Link>
            </div>
          </div>
          <Link to="/faq">FAQ</Link>
          <Link to="/success">Success Stories</Link>
          <Link to="/blog">Blogs</Link>
          <Link to="/contact">Contact Us</Link>
          <a href="https://crm-ebon-two.vercel.app/login" style={{ color: 'var(--brand-pink)' }}>Patient Login</a>
        </div>
      </div>
    </>
  )
}
