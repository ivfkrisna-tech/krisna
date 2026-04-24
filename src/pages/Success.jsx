import { Link } from 'react-router-dom'
import '../styles/success.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import FloatButtons from '../components/FloatButtons'
import useReveal from '../hooks/useReveal'

export default function Success() {
  useReveal()
  return (
    <>
      <Header />
      <main>
        <section className="page-header">
          <div className="page-header-content reveal active">
            <h1 style={{ color: '#ffffff' }}>Real Stories of Hope</h1>
            <p style={{ color: '#f0f0f0', fontSize: '1.2rem', marginTop: '5px' }}>Every baby born is a miracle we cherish.</p>
            <div className="breadcrumb">
              <Link to="/">Home</Link> <span style={{ margin: '0 5px', opacity: '0.6' }}>/</span> Success Stories
            </div>
          </div>
        </section>

        <section className="section reveal" style={{ padding: 'var(--section-padding)' }}>
          <div className="stories-grid">
            {[
              { title: 'Our Little Miracle Arrived', quote: '"After 8 years of trying and multiple failed treatments elsewhere, we had almost lost hope. The team at Krisna IVF was so supportive and transparent. The IVF process was smooth, and holding our baby boy for the first time was the best moment of our lives."', author: '- Anjali & Rajesh Verma' },
              { title: 'Overcoming PCOD', quote: '"I was diagnosed with severe PCOD and was told I couldn\'t conceive naturally. Dr. Krisna suggested a personalized plan involving lifestyle changes and IUI. It worked on the second cycle! We are forever grateful."', author: '- Sneha K.' },
              { title: 'A Journey of Faith', quote: '"The compassion shown by the staff is unmatched. They didn\'t just treat us as patients but as family. ICSI was the right choice for us, and today we are proud parents of twins. Thank you for making our family complete."', author: '- Meera & Vikram Singh' },
              { title: 'Support Through Every Step', quote: '"We were very nervous about Donor IVF, but the counseling session cleared all our doubts. The process was ethical and confidential. We are now blessed with a beautiful daughter."', author: '- Anonymous Couple' },
              { title: 'Age Was Just a Number', quote: '"At 42, I thought my chances were slim. The doctors were realistic yet optimistic. With their advanced technology and guidance, we achieved a successful pregnancy. Never give up hope!"', author: '- Ritu Sharma' },
              { title: 'Completing Our Family', quote: '"Secondary infertility hit us hard. We came to Krisna IVF for a second opinion, and the diagnosis was spot on. A simple laparoscopic procedure followed by timed intercourse worked wonders."', author: '- Pooja & Amit' },
            ].map((s, i) => (
              <div className="story-card" key={i}>
                <div className="quote-icon"><i className="fa-solid fa-quote-left"></i></div>
                <h3>{s.title}</h3>
                <p>{s.quote}</p>
                <div className="story-author">{s.author}</div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ background: 'linear-gradient(135deg, var(--brand-teal), var(--brand-teal-dark))', padding: '80px 5%', textAlign: 'center', color: '#fff' }}>
          <h2 style={{ color: '#fff', marginBottom: '20px' }}>Start Your Own Success Story</h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '30px', fontSize: '1.1rem' }}>Your journey to parenthood begins with a single step. Book a consultation with our experts today.</p>
          <Link to="/contact" className="btn-primary" style={{ background: '#fff', color: 'var(--brand-teal)', boxShadow: 'none' }}>Schedule Appointment</Link>
        </section>
      </main>
      <Footer />
      <FloatButtons />
    </>
  )
}
