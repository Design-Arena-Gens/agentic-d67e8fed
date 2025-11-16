import Link from 'next/link';
import { Hero } from '../components/Hero';
import { Features } from '../components/Features';
import { Testimonials } from '../components/Testimonials';
import { FAQ } from '../components/FAQ';
import { CTASection } from '../components/CTA';

export default function Page() {
  return (
    <main>
      <Hero />
      <Features />
      <Testimonials />
      <FAQ />
      <CTASection />
      <footer className="container">
        <div className="footer">
          <p>? {new Date().getFullYear()} Peptide Profit Academy. All rights reserved.</p>
          <nav className="footer-nav">
            <Link href="#features">Features</Link>
            <Link href="#testimonials">Results</Link>
            <Link href="#faq">FAQ</Link>
            <a href="https://peptideprofitacademy.com/?utm_source=agentic&utm_medium=landing&utm_campaign=vercel" target="_blank" rel="noopener noreferrer">Enroll Now</a>
          </nav>
        </div>
      </footer>
    </main>
  );
}
