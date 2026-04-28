import React from 'react';

export default function BlogPost23() {
  return (
    <div className="blog-body">
      <p>
        When struggling to conceive, many patients focus entirely on their reproductive organs. However, a small, butterfly-shaped gland in your neck plays a monumental role in your fertility: the thyroid.
      </p>

      <hr style={{ margin: '25px 0', borderColor: '#eee' }} />
      
      <h3 id="what-is-the-thyroid">1. Understanding the Thyroid Gland</h3>
      <p>
        The thyroid gland produces hormones that regulate your body's metabolism, temperature, and heart rate. Crucially, these hormones also interact directly with your reproductive hormones, particularly estrogen and progesterone, ensuring your menstrual cycle runs smoothly.
      </p>
      
      <hr style={{ margin: '25px 0', borderColor: '#eee' }} />

      <h3 id="hypothyroidism">2. Hypothyroidism and Ovulation</h3>
      <p>
        Hypothyroidism occurs when the thyroid is underactive (not producing enough hormones). This is the most common thyroid issue affecting fertility.
      </p>
      <ul style={{ paddingLeft: '20px', marginBottom: '20px', color: '#555' }}>
        <li style={{ marginBottom: '10px' }}><strong>Impact on Ovulation:</strong> Low thyroid levels can cause your pituitary gland to release excess prolactin, which can halt ovulation entirely, making natural conception impossible.</li>
        <li style={{ marginBottom: '10px' }}><strong>Luteal Phase Defect:</strong> It can also lead to a shortened luteal phase, meaning the uterine lining breaks down before an embryo has a chance to implant.</li>
      </ul>

      <hr style={{ margin: '25px 0', borderColor: '#eee' }} />

      <h3 id="hyperthyroidism">3. Hyperthyroidism and Pregnancy Risks</h3>
      <p>
        While less common, hyperthyroidism (an overactive thyroid) also poses significant challenges. It can lead to irregular, light, or completely absent menstrual periods. Furthermore, if left untreated during early pregnancy, it increases the risk of severe morning sickness, preeclampsia, and miscarriage.
      </p>

      <hr style={{ margin: '25px 0', borderColor: '#eee' }} />

      <h3 id="testing-and-treatment">4. Testing and Managing Thyroid Levels</h3>
      <p>
        Fortunately, thyroid issues are easily diagnosed with a simple blood test measuring TSH (Thyroid Stimulating Hormone). If your levels are out of the optimal range for pregnancy (typically under 2.5 mIU/L), they can usually be corrected quickly with inexpensive, safe, daily oral medication.
      </p>

      <p style={{ marginTop: '40px', padding: '20px', background: 'var(--brand-pink-soft)', borderRadius: '12px', borderLeft: '5px solid var(--brand-pink)' }}>
        <strong>At Krisna IVF, a comprehensive thyroid panel is a standard part of our initial fertility assessment, ensuring your body is perfectly balanced for conception.</strong>
      </p>
    </div>
  );
}
