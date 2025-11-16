import type { Metadata } from 'next';
import './globals.css';
import { Analytics } from '@vercel/analytics/react';

export const metadata: Metadata = {
  metadataBase: new URL('https://agentic-d67e8fed.vercel.app'),
  title: {
    default: 'Peptide Profit Academy ? Sales Funnel',
    template: '%s | Peptide Profit Academy'
  },
  description:
    'Launch and scale your peptide business with step-by-step training, templates, and mentorship from industry experts. Convert more prospects with a proven sales system.',
  openGraph: {
    title: 'Peptide Profit Academy ? Sales Funnel',
    description:
      'Launch and scale your peptide business with step-by-step training, templates, and mentorship.',
    url: 'https://agentic-d67e8fed.vercel.app',
    siteName: 'Peptide Profit Academy',
    images: [
      {
        url: '/og-cover.png',
        width: 1200,
        height: 630,
        alt: 'Peptide Profit Academy'
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Peptide Profit Academy ? Sales Funnel',
    description:
      'Launch and scale your peptide business with step-by-step training, templates, and mentorship.',
    images: ['/og-cover.png']
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' }
    ]
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
