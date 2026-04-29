import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <img src="/img/Krisna_Logo-removebg-preview.png" style={{ background: '#fff', padding: '10px', borderRadius: '4px', height: '50px', marginBottom: '20px' }} alt="Krisna IVF Logo" />
          <p style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>Dedicated to helping couples realize their dream of parenthood through advanced technology and compassionate care.</p>
          <div className="social-icons" style={{ marginTop: '20px' }}>
            <a href="https://www.facebook.com/krisnaivfgroup5/" aria-label="Instagram"><i className="fa-brands fa-instagram"></i></a>
            <a href="https://www.instagram.com/krisna_ivf_group5/" aria-label="Facebook"><i className="fa-brands fa-facebook-f"></i></a>
            <a href="https://www.youtube.com/@Krisnaivfgroup5" aria-label="YouTube"><i className="fa-brands fa-youtube"></i></a>
          </div>
        </div>

        <div>
          <h3>Quick Links</h3>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/aboutus">About Us</Link></li>
            <li><Link to="/faq">FAQs</Link></li>
            <li><Link to="/success">Success Stories</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3>Treatments</h3>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li><Link to="/ivf">IVF</Link></li>
            <li><Link to="/iui">IUI</Link></li>
            <li><Link to="/icsi">ICSI</Link></li>
            <li><Link to="/donor">Donor Services</Link></li>
            <li><Link to="/fertility_surgery">Fertility Surgery</Link></li>
          </ul>
        </div>

        <div>
          <h3>Contact</h3>
          <p style={{ marginBottom: '10px' }}><i className="fa-solid fa-location-dot" style={{ color: 'var(--brand-pink)', width: '20px' }}></i> Jaipur, Rajasthan, India</p>
          <p style={{ marginBottom: '10px' }}><a href="tel:+919119115355" style={{ color: '#ccc' }}><i className="fa-solid fa-phone" style={{ color: 'var(--brand-pink)', width: '20px' }}></i> +91 911911 5355</a></p>
          <p><a href="mailto:ivfkrisna@gmail.com" style={{ color: '#ccc' }}><i className="fa-solid fa-envelope" style={{ color: 'var(--brand-pink)', width: '20px' }}></i> ivfkrisna@gmail.com</a></p>
        </div>
      </div>
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', marginTop: '50px', paddingTop: '20px', textAlign: 'center', fontSize: '0.8rem', opacity: '0.7' }}>
        &copy; 2026 Krisna IVF Center. All Rights Reserved.
      </div>
    </footer>
  )
}
