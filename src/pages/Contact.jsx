import { Link } from 'react-router-dom'
import '../styles/contact.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import FloatButtons from '../components/FloatButtons'
import useReveal from '../hooks/useReveal'

export default function Contact() {
  useReveal()
  return (
    <>
      <Header />
      <main>
        <section className="page-header">
          <div className="page-header-content reveal active">
            <h1 style={{ color: '#ffffff' }}>Get in Touch</h1>
            <p style={{ color: '#f0f0f0', fontSize: '1.2rem', marginTop: '5px' }}>We are here to support you with expertise and compassion.</p>
            <div className="breadcrumb">
              <Link to="/">Home</Link> <span style={{ margin: '0 5px', opacity: '0.6' }}>/</span> Contact Us
            </div>
          </div>
        </section>

        <section className="section reveal" style={{ padding: 'var(--section-padding)', background: '#fff' }}>
          <div className="contact-grid">
            <div className="contact-card">
              <div className="contact-icon"><i className="fa-solid fa-phone"></i></div>
              <h3>Call Us</h3>
              <p style={{ marginBottom: '5px', fontWeight: '500' }}>+91 911911 5355</p>
              <p style={{ color: '#888', fontSize: '0.9rem' }}>Mon-Sat: 9am - 7pm</p>
            </div>
            <div className="contact-card">
              <div className="contact-icon"><i className="fa-solid fa-envelope"></i></div>
              <h3>Email Us</h3>
              <p style={{ marginBottom: '5px', fontWeight: '500' }}>teamkrisnaivf@gmail.com</p>
              <p style={{ color: '#888', fontSize: '0.9rem' }}>24/7 Online Support</p>
            </div>
            <div className="contact-card">
              <div className="contact-icon"><i className="fa-solid fa-location-dot"></i></div>
              <h3>Visit Us</h3>
              <p style={{ marginBottom: '5px', fontWeight: '500' }}>House of Doctors, Jaipur</p>
              <p style={{ color: '#888', fontSize: '0.9rem' }}>Near SMS Hospital</p>
            </div>
          </div>
        </section>

        <section className="section reveal" style={{ padding: 'var(--section-padding)' }}>
          <div className="contact-split">
            <div className="contact-form-box">
              <h2 style={{ fontSize: '1.8rem', marginBottom: '10px' }}>Send us a Message</h2>
              <p style={{ marginBottom: '30px', fontSize: '0.95rem', color: '#666' }}>Fill out the form below and we will get back to you within 24 hours.</p>
              <form action="#">
                <div className="form-row">
                  <input type="text" placeholder="First Name" required aria-label="First Name" />
                  <input type="text" placeholder="Last Name" required aria-label="Last Name" />
                </div>
                <div className="form-row">
                  <input type="tel" placeholder="Phone Number" required aria-label="Phone Number" />
                  <input type="email" placeholder="Email Address" required aria-label="Email Address" />
                </div>
                <div className="form-group">
                  <select aria-label="Service Interest">
                    <option disabled defaultValue="">Select Treatment / Inquiry</option>
                    <option>General Enquiry</option>
                    <option>IVF Treatment</option>
                    <option>IUI Treatment</option>
                    <option>ICSI Treatment</option>
                    <option>Donor Program</option>
                    <option>Fertility Surgery</option>
                  </select>
                </div>
                <div className="form-group">
                  <textarea rows="5" placeholder="How can we help you today?" aria-label="Message"></textarea>
                </div>
                <button type="submit" className="btn-primary" style={{ width: '100%' }}>Submit Message</button>
              </form>
            </div>

            <div className="address-box">
              <h3>Visit Our Center</h3>
              <div className="address-item">
                <i className="fa-solid fa-map-location-dot"></i>
                <div>
                  <strong style={{ fontSize: '1.1rem', display: 'block', marginBottom: '5px' }}>Headquarters</strong>
                  <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: '1.6' }}>
                    3rd Floor, House of Doctors, Plot No.4,<br />
                    Lal Niwas, Hira Bagh, Tonk Road,<br />
                    Near SMS Hospital, Jaipur, Rajasthan 302021
                  </p>
                </div>
              </div>
              <iframe
                className="map-frame"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.734563857321!2d75.80521131504495!3d26.89270498313404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db678913364df%3A0x6b77242490538058!2sKrisna%20IVF%20Center!5e0!3m2!1sen!2sin!4v1675123456789!5m2!1sen!2sin"
                allowFullScreen=""
                loading="lazy"
                title="Google Map Location of Krisna IVF Center"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </section>

        <section className="section light-bg reveal" style={{ padding: 'var(--section-padding)', backgroundColor: '#fcf8fa' }}>
          <h2 className="section-title">Common Questions</h2>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <details>
              <summary>How do I book a first appointment? </summary>
              <p>You can book directly through the form above, call our helpline at +91 911911 5355, or click the "Book Appointment" button in the navigation bar.</p>
            </details>
            <details>
              <summary>Do you offer online video consultations? </summary>
              <p>Yes, we offer remote consultations via WhatsApp Video or Zoom for patients outside Jaipur. Please mention this in your enquiry message.</p>
            </details>
            <details>
              <summary>What are the consultation timings? </summary>
              <p>Our OPD is open Monday through Saturday from 9:00 AM to 7:00 PM. Sunday consultations are available by prior appointment only.</p>
            </details>
            <details>
              <summary>Is the initial consultation free? </summary>
              <p>We frequently run complimentary consultation camps. Please check our social media channels or call us to inquire about current offers.</p>
            </details>
          </div>
        </section>
      </main>
      <Footer />
      <FloatButtons />
    </>
  )
}
