const ENROLL_URL = 'https://peptideprofitacademy.com/?utm_source=agentic&utm_medium=landing&utm_campaign=vercel';

export function CTASection() {
  return (
    <section className="section" style={{ paddingTop: '2rem' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <h2>Ready to Implement the System?</h2>
        <p className="lead">Enroll today and get instant access to funnels, scripts, and mentorship.</p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
          <a className="cta" href={ENROLL_URL} target="_blank" rel="noopener noreferrer">
            <span>Enroll Now</span> ?
          </a>
          <a className="cta" style={{ background: 'linear-gradient(180deg, var(--accent), #7c5cf3)' }} href={ENROLL_URL} target="_blank" rel="noopener noreferrer">
            <span>Explore the Curriculum</span>
          </a>
        </div>
        <div className="badges" style={{ marginTop: '1.25rem' }}>
          <span className="badge">Risk-Free: Learn Proven Systems</span>
          <span className="badge">Immediate Access</span>
        </div>
      </div>
    </section>
  );
}
