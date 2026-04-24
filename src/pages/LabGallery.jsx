import { Link } from 'react-router-dom'
import '../styles/clean_room_crtfd_lab.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import FloatButtons from '../components/FloatButtons'
import useReveal from '../hooks/useReveal'

export default function LabGallery() {
  useReveal()
  return (
    <>
      <Header />
      <main>
        <section className="page-header">
          <div className="page-header-content reveal active">
            <h1 style={{ color: '#ffffff' }}>Lab Gallery</h1>
            <p style={{ color: '#f0f0f0', fontSize: '1.2rem', marginTop: '5px' }}>A glimpse into our world-class facilities and technology.</p>
            <div className="breadcrumb">
              <Link to="/">Home</Link> <span style={{ margin: '0 5px', opacity: '0.6' }}>/</span> Gallery
            </div>
          </div>
        </section>

        <section className="section reveal" style={{ padding: 'var(--section-padding)' }}>
          <div className="gallery-intro">
            <h2 style={{ fontFamily: "'Playfair Display', serif", marginBottom: '20px' }}>Advanced <span style={{ color: 'var(--brand-teal)' }}>Technology</span></h2>
            <p>We pride ourselves on maintaining a sterile, high-tech environment. Our lab is equipped with the latest incubators, microscopes, and air filtration systems to ensure the highest success rates for our patients.</p>
          </div>

          <div className="lab-gallery-grid">
            <div className="lab-gallery-item">
              <div className="lab-gallery-img-box">
                <img src="https://cdn.pixabay.com/photo/2022/03/22/13/11/oplampe-7084997_1280.jpg" alt="High-Tech IVF Microscope Setup in Lab" loading="lazy" />
              </div>
              <div className="lab-gallery-caption">High-Tech Microscope Setup</div>
            </div>

            <div className="lab-gallery-item">
              <div className="lab-gallery-img-box">
                <img src="/img/gallery1/hospital-ward-1338585_1280 (1).jpg" alt="Advanced Embryo Incubation Unit" loading="lazy" />
              </div>
              <div className="lab-gallery-caption">Incubation Unit</div>
            </div>

            <div className="lab-gallery-item">
              <div className="lab-gallery-img-box">
                <img src="https://cdn.pixabay.com/photo/2018/01/18/09/26/hospital-3089884_1280.jpg" alt="Sterile IVF Laboratory Environment" loading="lazy" />
              </div>
              <div className="lab-gallery-caption">Sterile Environment</div>
            </div>

            <div className="lab-gallery-item">
              <div className="lab-gallery-img-box">
                <img src="https://cdn.pixabay.com/photo/2018/11/20/16/44/laboratory-3827738_1280.jpg" alt="Modern Medical Lab Facility Equipment" loading="lazy" />
              </div>
              <div className="lab-gallery-caption">Advanced Lab Facility</div>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '60px' }}>
            <Link to="/" className="btn-primary" style={{ background: 'transparent', color: 'var(--brand-pink)', border: '2px solid var(--brand-pink)', boxShadow: 'none', marginRight: '15px' }}>&larr; Back to Home</Link>
            <Link to="/contact" className="btn-primary">Visit Our Center</Link>
          </div>
        </section>

        <section style={{ background: 'linear-gradient(135deg, var(--brand-teal), var(--brand-teal-dark))', padding: '80px 5%', textAlign: 'center', color: '#fff' }}>
          <h2 style={{ color: '#fff', marginBottom: '20px' }}>Ready to Start Your Journey?</h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '30px', fontSize: '1.1rem' }}>Schedule a confidential consultation with our fertility specialists today.</p>
          <Link to="/contact" className="btn-primary" style={{ background: '#fff', color: 'var(--brand-teal)', boxShadow: 'none' }}>Book Appointment</Link>
        </section>
      </main>
      <Footer />
      <FloatButtons />
    </>
  )
}
