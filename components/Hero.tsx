import Link from 'next/link';

const ENROLL_URL = 'https://peptideprofitacademy.com/?utm_source=agentic&utm_medium=landing&utm_campaign=vercel';

export function Hero() {
  return (
    <header className="container hero">
      <span className="badge">For clinic owners, coaches, and entrepreneurs</span>
      <h1>
        Grow Your Peptide Business Faster
        <br /> With a Proven Sales System
      </h1>
      <p>
        Peptide Profit Academy gives you the complete playbook to launch, sell, and scale?
        including scripts, templates, funnels, and mentorship. Stop guessing and execute a
        battle-tested growth system.
      </p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
        <a className="cta" href={ENROLL_URL} target="_blank" rel="noopener noreferrer">
          <span>Enroll Now</span> ?
        </a>
        <a className="cta" style={{ background: 'linear-gradient(180deg, var(--accent), #7c5cf3)' }} href={ENROLL_URL} target="_blank" rel="noopener noreferrer">
          <span>See Program Details</span>
        </a>
      </div>
      <div className="badges" style={{ marginTop: '1.25rem' }}>
        <span className="badge">Funnels & Scripts Included</span>
        <span className="badge">Mentorship & Community</span>
        <span className="badge">Actionable, Step-by-Step</span>
      </div>
    </header>
  );
}
