import { Link } from 'react-router-dom'
import '../styles/faq.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import FloatButtons from '../components/FloatButtons'
import useReveal from '../hooks/useReveal'

export default function FAQ() {
  useReveal()
  return (
    <>
      <Header />
      <main>
        <section className="page-header">
          <div className="page-header-content reveal active">
            <h1 style={{ color: '#ffffff' }}>Frequently Asked Questions</h1>
            <p style={{ color: '#f0f0f0', fontSize: '1.2rem', marginTop: '5px' }}>Your fertility journey clarified. Answers to common concerns.</p>
            <div className="breadcrumb">
              <Link to="/">Home</Link> <span style={{ margin: '0 5px', opacity: '0.6' }}>/</span> FAQ
            </div>
          </div>
        </section>

        <section className="section reveal" style={{ padding: 'var(--section-padding)' }}>
          <div className="faq-wrapper">
            <h3 className="category-title">General &amp; First Steps</h3>
            <details open>
              <summary>When should I consult a fertility specialist?</summary>
              <p>We recommend seeing a specialist if you have been trying to conceive for over a year (or six months if you are over 35). Irregular periods, known reproductive health issues, or previous miscarriages are also reasons to book a consultation earlier.</p>
            </details>
            <details>
              <summary>What should I bring to my first appointment?</summary>
              <p>Please bring any previous medical records, test results, and a list of any medications you are currently taking. It is also helpful if both partners attend the initial consultation so we can evaluate both histories comprehensively.</p>
            </details>

            <h3 className="category-title">IVF &amp; Treatments</h3>
            <details>
              <summary>What is the difference between IUI and IVF?</summary>
              <p>IUI (Intrauterine Insemination) involves placing prepared sperm directly into the uterus during ovulation. IVF (In Vitro Fertilization) involves retrieving eggs and fertilizing them with sperm in our lab to create embryos, which are then transferred back into the uterus. IVF generally has higher success rates.</p>
            </details>
            <details>
              <summary>Is the IVF process painful?</summary>
              <p>Most patients experience minimal discomfort. The hormone injections use very small needles (subcutaneous), and the egg retrieval procedure is performed under mild sedation or anesthesia, so you won't feel pain during the process.</p>
            </details>
            <details>
              <summary>What is the success rate at Krisna IVF?</summary>
              <p>Our success rates are consistently high, ranging above 60-70% for many age groups, thanks to our advanced embryology lab and personalized protocols. However, success depends on individual factors like age, egg quality, and medical history.</p>
            </details>

            <h3 className="category-title">Cost &amp; Procedures</h3>
            <details>
              <summary>Are there any hidden costs in the treatment?</summary>
              <p>No. At Krisna IVF, we pride ourselves on transparent pricing. We provide a detailed breakdown of costs before starting any treatment cycle so you can plan your finances accordingly without surprises.</p>
            </details>
          </div>
        </section>

        <section style={{ background: 'linear-gradient(135deg, var(--brand-teal), var(--brand-teal-dark))', padding: '80px 5%', textAlign: 'center', color: '#fff' }}>
          <h2 style={{ color: '#fff', marginBottom: '20px' }}>Still have questions?</h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '30px', fontSize: '1.1rem' }}>Can't find the answer you're looking for? Please chat with our friendly team.</p>
          <Link to="/contact" className="btn-primary" style={{ background: '#fff', color: 'var(--brand-teal)', boxShadow: 'none' }}>Contact Us</Link>
        </section>
      </main>
      <Footer />
      <FloatButtons />
    </>
  )
}
