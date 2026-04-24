import React from 'react';

export default function BlogPost7() {
  return (
    <div className="blog-body">
      <p>
        When it comes to reproductive health, nutrition acts as the fundamental building block for sperm development. Two essential minerals—<strong>Zinc and Selenium</strong>—stand out as “super-nutrients” that play a direct role in improving sperm count, shape, and movement.
      </p>

      <hr style={{ margin: '25px 0', borderColor: '#eee' }} />
      
      <h3 id="zinc-architect">1. Zinc: The “Biological Architect” of Sperm</h3>
      <p>
        Zinc is perhaps the most critical mineral for male reproductive function, found in high concentrations within the sperm itself.
      </p>
      <ul style={{ paddingLeft: '20px', marginBottom: '20px', color: '#555' }}>
        <li style={{ marginBottom: '10px' }}><strong>Sperm Production:</strong> Zinc is required for the division and growth of sperm cells. Deficiency is often linked to low testosterone.</li>
        <li style={{ marginBottom: '10px' }}><strong>Structural Integrity:</strong> It helps maintain the structure of the sperm’s tail. Without enough zinc, sperm may be malformed.</li>
        <li style={{ marginBottom: '10px' }}><strong>DNA Protection:</strong> As an antioxidant, it shields delicate DNA from oxidative fragmentation.</li>
      </ul>
      
      <hr style={{ margin: '25px 0', borderColor: '#eee' }} />

      <h3 id="selenium-fuel">2. Selenium: The Engine of Motility</h3>
      <p>
        If Zinc is the architect, Selenium is the “fuel” that powers the sperm’s journey through the female reproductive tract.
      </p>
      <ul style={{ paddingLeft: '20px', marginBottom: '20px', color: '#555' }}>
        <li style={{ marginBottom: '10px' }}><strong>Boosting Motility:</strong> Required for the synthesis of Selenoproteins, which provide energy and flexibility for swimming.</li>
        <li style={{ marginBottom: '10px' }}><strong>Morphology:</strong> Selenium ensures sperm develop in the correct shape, allowing for better egg penetration.</li>
      </ul>

      <hr style={{ margin: '25px 0', borderColor: '#eee' }} />

      <h3 id="superfood-list">3. Top Superfoods for Zinc and Selenium</h3>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', marginBottom: '30px' }}>
        <div style={{ padding: '20px', background: '#f9f9f9', borderRadius: '12px' }}>
          <h4 style={{ color: 'var(--brand-teal)', marginBottom: '10px' }}>High-Zinc Foods</h4>
          <ul style={{ paddingLeft: '15px', fontSize: '0.9rem' }}>
            <li>Oysters</li>
            <li>Pumpkin Seeds</li>
            <li>Lentils & Chickpeas</li>
            <li>Cashews</li>
          </ul>
        </div>
        <div style={{ padding: '20px', background: '#f9f9f9', borderRadius: '12px' }}>
          <h4 style={{ color: 'var(--brand-pink)', marginBottom: '10px' }}>High-Selenium Foods</h4>
          <ul style={{ paddingLeft: '15px', fontSize: '0.9rem' }}>
            <li>Brazil Nuts</li>
            <li>Eggs (specifically the yolk)</li>
            <li>Spinach</li>
            <li>Salmon & Sardines</li>
          </ul>
        </div>
      </div>

      <hr style={{ margin: '25px 0', borderColor: '#eee' }} />

      <h3 id="dietary-synergy">4. The Synergy of a Balanced Diet</h3>
      <p>
        Spermatogenesis takes approximately 74 to 90 days. This means the nutritional changes you make today will impact the quality of the sperm produced three months from now.
      </p>
      <p>
        Consistent intake of these minerals helps create a “protective shield” around the sperm, ensuring peak performance during conception or IVF procedures.
      </p>

      <p style={{ marginTop: '40px', padding: '20px', background: 'var(--brand-pink-soft)', borderRadius: '12px', borderLeft: '5px solid var(--brand-pink)' }}>
        <strong>At Krisna IVF, we integrate nutritional guidance into our clinical protocols to ensure every patient has the strongest biological foundation possible.</strong>
      </p>
    </div>
  );
}
