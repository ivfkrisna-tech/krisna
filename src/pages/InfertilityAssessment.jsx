import { Link } from 'react-router-dom'
import '../styles/infertility_assessment.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import FloatButtons from '../components/FloatButtons'
import useReveal from '../hooks/useReveal'

export default function InfertilityAssessment() {
  useReveal()
  return (
    <>
      <Header />
      <main>
        <section className="page-header">
          <div className="page-header-content reveal active">
            <h1 style={{ color: '#ffffff' }}>Infertility Assessment</h1>
            <p style={{ color: '#f0f0f0', fontSize: '1.2rem', marginTop: '5px' }}>Comprehensive diagnosis for both partners.</p>
            <div className="breadcrumb">
              <Link to="/">Home</Link> <span style={{ margin: '0 5px', opacity: '0.6' }}>/</span> Services <span style={{ margin: '0 5px', opacity: '0.6' }}>/</span> Assessment
            </div>
          </div>
        </section>

        <section className="section reveal" style={{ padding: 'var(--section-padding)' }}>
          <div className="why-wrapper">
            <div className="why-content">
              <h3 style={{ color: 'var(--brand-pink)', textTransform: 'uppercase', letterSpacing: '1.5px', fontSize: '0.9rem', fontWeight: '700' }}>Find the Root Cause</h3>
              <h2 style={{ marginBottom: '25px' }}>Comprehensive <br /><span style={{ color: 'var(--brand-teal)' }}>Fertility Evaluation</span></h2>
              <p>Understanding the root cause is the first step toward parenthood. Infertility can affect both partners, and a thorough evaluation is essential to create a personalized treatment plan.</p>
              <p>At <strong>Krisna IVF</strong>, we use advanced diagnostic technology to assess both male and female fertility factors accurately, ensuring you get the right care from day one.</p>
              <br />
              <Link to="/contact" className="btn-primary">Book an Assessment</Link>
            </div>
            <div>
              <img src="/img/laboratory-2815641_1280.jpg" alt="Doctor Analyzing Fertility Test Results" className="why-img" loading="lazy" />
            </div>
          </div>
        </section>

        <section className="section light-bg reveal" style={{ padding: 'var(--section-padding)', background: '#fdfdfd' }}>
          <h2 className="section-title">When Should You Seek Help?</h2>
          <div className="grid-container">
            <div className="service-card">
              <div className="icon-box"><i className="fa-regular fa-calendar-check"></i></div>
              <h3>Under 35</h3>
              <p>If you have been trying to conceive naturally for <strong>1 year</strong> without success.</p>
            </div>
            <div className="service-card">
              <div className="icon-box"><i className="fa-solid fa-hourglass-half"></i></div>
              <h3>Over 35</h3>
              <p>If you have been trying for <strong>6 months</strong> without success.</p>
            </div>
            <div className="service-card">
              <div className="icon-box"><i className="fa-solid fa-notes-medical"></i></div>
              <h3>Irregular Periods</h3>
              <p>If you have irregular cycles, PCOS, or known hormonal issues.</p>
            </div>
            <div className="service-card">
              <div className="icon-box"><i className="fa-solid fa-clock-rotate-left"></i></div>
              <h3>Medical History</h3>
              <p>If you have a history of miscarriages or previous pelvic surgery.</p>
            </div>
          </div>
        </section>

        <section className="section reveal" style={{ padding: 'var(--section-padding)' }}>
          <h2 className="section-title">What Does an Assessment Include?</h2>
          <div className="assess-grid">
            <div className="assess-card">
              <div className="card-header">
                <i className="fa-solid fa-venus"></i>
                <h3>Female Assessment</h3>
              </div>
              <p style={{ marginBottom: '20px' }}>We investigate ovulation, uterine health, and tubal patency.</p>
              <ul className="check-list">
                <li><strong>Hormone Analysis:</strong> Blood tests (AMH, FSH, LH) to check ovarian reserve.</li>
                <li><strong>Transvaginal Ultrasound:</strong> To examine the uterus and ovaries for cysts or fibroids.</li>
                <li><strong>HSG (Tube Test):</strong> An X-ray to check if fallopian tubes are open.</li>
                <li><strong>Hysteroscopy:</strong> Visual inspection of the womb to detect polyps.</li>
              </ul>
            </div>

            <div className="assess-card">
              <div className="card-header">
                <i className="fa-solid fa-mars"></i>
                <h3>Male Assessment</h3>
              </div>
              <p style={{ marginBottom: '20px' }}>Male factors contribute to 40-50% of infertility cases.</p>
              <ul className="check-list">
                <li><strong>Semen Analysis:</strong> Checks sperm count, motility, and shape.</li>
                <li><strong>Hormone Evaluation:</strong> Testosterone and FSH levels check.</li>
                <li><strong>Scrotal Ultrasound:</strong> To check for varicocele or obstructions.</li>
                <li><strong>DNA Fragmentation:</strong> Assesses genetic integrity of sperm.</li>
              </ul>
            </div>
          </div>
        </section>

        <section style={{ background: 'linear-gradient(135deg, var(--brand-teal), var(--brand-teal-dark))', padding: '80px 5%', textAlign: 'center', color: '#fff' }}>
          <h2 style={{ color: '#fff', marginBottom: '20px' }}>Start Your Journey Today</h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '30px', fontSize: '1.1rem' }}>Early diagnosis is the key to successful treatment. Schedule your fertility check-up now.</p>
          <Link to="/contact" className="btn-primary" style={{ background: '#fff', color: 'var(--brand-teal)', boxShadow: 'none' }}>Schedule Consultation</Link>
        </section>
      </main>
      <Footer />
      <FloatButtons />
    </>
  )
}
