import { Link } from 'react-router-dom'
import '../styles/our_team.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import FloatButtons from '../components/FloatButtons'
import useReveal from '../hooks/useReveal'

export default function OurTeam() {
  useReveal()
  return (
    <>
      <Header />
      <main>
        <section className="page-header">
          <div className="page-header-content reveal active">
            <h1 style={{ color: '#ffffff' }}>Meet Our Experts</h1>
            <p style={{ color: '#f0f0f0', fontSize: '1.2rem', marginTop: '5px' }}>The dedicated professionals behind your miracle.</p>
            <div className="breadcrumb">
              <Link to="/">Home</Link> <span style={{ margin: '0 5px', opacity: '0.6' }}>/</span> Our Team
            </div>
          </div>
        </section>

        <section className="section reveal" style={{ padding: 'var(--section-padding)' }}>
          <p style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 40px', fontSize: '1.1rem' }}>
            Our team comprises highly skilled doctors, embryologists, and support staff dedicated to providing compassionate care and the highest success rates for every patient.
          </p>
          <div className="team-grid">
            <div className="team-card">
              <div className="team-img-box">
                <img src="/img/gallery2/depositphotos_546065988-stock-photo-indian-female-doctor-portrait-south.jpg" alt="Dr. Anjali Sharma - Senior IVF Specialist" loading="lazy" />
              </div>
              <div className="team-info">
                <h3 className="team-name">Dr. Anjali Sharma</h3>
                <p className="team-role">Senior IVF Specialist</p>
              </div>
            </div>
            <div className="team-card">
              <div className="team-img-box">
                <img src="/img/gallery2/doccc.jpg" alt="Dr. Rajesh Verma - Clinical Embryologist" loading="lazy" />
              </div>
              <div className="team-info">
                <h3 className="team-name">Dr. Rajesh Verma</h3>
                <p className="team-role">Clinical Embryologist</p>
              </div>
            </div>
            <div className="team-card">
              <div className="team-img-box">
                <img src="/img/doc_img.jpg" alt="Dr. Priya Singh - Fertility Consultant" loading="lazy" />
              </div>
              <div className="team-info">
                <h3 className="team-name">Dr. Priya Singh</h3>
                <p className="team-role">Fertility Consultant</p>
              </div>
            </div>
            <div className="team-card">
              <div className="team-img-box">
                <img src="/img/gallery2/istockphoto-1730222050-612x612.jpg" alt="Dr. Amit Patel - Laparoscopic Surgeon" loading="lazy" />
              </div>
              <div className="team-info">
                <h3 className="team-name">Dr. Amit Patel</h3>
                <p className="team-role">Laparoscopic Surgeon</p>
              </div>
            </div>
          </div>
          <div style={{ textAlign: 'center', marginTop: '60px' }}>
            <Link to="/contact" className="btn-primary">Book an Appointment</Link>
          </div>
        </section>

        <section style={{ background: 'linear-gradient(135deg, var(--brand-teal), var(--brand-teal-dark))', padding: '80px 5%', textAlign: 'center', color: '#fff' }}>
          <h2 style={{ color: '#fff', marginBottom: '20px' }}>Compassionate Care Awaits</h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '30px', fontSize: '1.1rem' }}>Schedule a consultation with our experts to discuss your fertility journey.</p>
          <Link to="/contact" className="btn-primary" style={{ background: '#fff', color: 'var(--brand-teal)', boxShadow: 'none' }}>Contact Us</Link>
        </section>
      </main>
      <Footer />
      <FloatButtons />
    </>
  )
}
