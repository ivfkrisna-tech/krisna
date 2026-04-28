import React from 'react';

export default function BlogPost20() {
  return (
    <div className="blog-body">
      <p>
        Advancements in reproductive medicine have provided new ways to increase IVF success rates and reduce the risk of miscarriage. One of the most significant breakthroughs is Preimplantation Genetic Testing for Aneuploidy (PGT-A).
      </p>

      <hr style={{ margin: '25px 0', borderColor: '#eee' }} />
      
      <h3 id="what-is-pgta">1. What is PGT-A?</h3>
      <p>
        PGT-A (formerly known as PGS) is a highly sophisticated genetic test performed on embryos during an IVF cycle. Its primary purpose is to screen embryos for chromosomal abnormalities (aneuploidy) before they are transferred to the uterus. An embryo with the correct number of chromosomes (euploid) has a significantly higher chance of resulting in a healthy pregnancy.
      </p>
      
      <hr style={{ margin: '25px 0', borderColor: '#eee' }} />

      <h3 id="how-it-works">2. How the Testing Process Works</h3>
      <p>
        The process involves a few highly precise steps in the embryology lab:
      </p>
      <ul style={{ paddingLeft: '20px', marginBottom: '20px', color: '#555' }}>
        <li style={{ marginBottom: '10px' }}><strong>Biopsy:</strong> When an embryo reaches the blastocyst stage (usually day 5 or 6), a highly skilled embryologist safely removes a few cells from the outer layer (which will eventually form the placenta).</li>
        <li style={{ marginBottom: '10px' }}><strong>Freezing and Testing:</strong> The embryo is flash-frozen while the biopsied cells are sent to a specialized genetics laboratory for analysis.</li>
        <li style={{ marginBottom: '10px' }}><strong>Selection:</strong> Only embryos identified as chromosomally normal are selected for future transfer.</li>
      </ul>

      <hr style={{ margin: '25px 0', borderColor: '#eee' }} />

      <h3 id="who-should-consider">3. Who Should Consider Genetic Testing?</h3>
      <p>
        While any IVF patient can opt for PGT-A, it is particularly recommended for:
      </p>
      <ul style={{ paddingLeft: '20px', marginBottom: '20px', color: '#555' }}>
        <li style={{ marginBottom: '10px' }}><strong>Women over 35:</strong> The rate of chromosomal abnormalities in eggs naturally increases with maternal age.</li>
        <li style={{ marginBottom: '10px' }}><strong>Patients with Recurrent Miscarriages:</strong> Aneuploidy is a leading cause of early pregnancy loss.</li>
        <li style={{ marginBottom: '10px' }}><strong>History of Failed IVF Cycles:</strong> It can help identify if undetected chromosomal issues were the cause of failure.</li>
      </ul>

      <hr style={{ margin: '25px 0', borderColor: '#eee' }} />

      <h3 id="benefits-and-limitations">4. Benefits and Limitations</h3>
      <p>
        The main benefit of PGT-A is a higher implantation rate per transfer and a lower risk of miscarriage. However, it's important to know that testing does not guarantee a pregnancy, nor can it correct an abnormal embryo; it simply provides vital information for selection.
      </p>

      <p style={{ marginTop: '40px', padding: '20px', background: 'var(--brand-pink-soft)', borderRadius: '12px', borderLeft: '5px solid var(--brand-pink)' }}>
        <strong>At Krisna IVF, our specialists will discuss whether PGT-A is a suitable addition to your customized fertility treatment plan.</strong>
      </p>
    </div>
  );
}
