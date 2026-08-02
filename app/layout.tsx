import './globals.css';
import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { PortfolioShell } from '@/components/portfolio-shell';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

const siteUrl = 'https://vyomsagar.vercel.app';
const description =
  'Vyom Sagar \u2014 AI/ML Engineer & Full Stack Developer. Third-year AI & ML engineering student at Manipal University Jaipur building scalable web applications and AI-powered solutions. Open to software engineering and AI internship opportunities.';
const ogImage = `${siteUrl}/og.png`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Vyom Sagar \u2014 AI/ML Engineer & Full Stack Developer',
    template: '%s \u2014 Vyom Sagar',
  },
  description,
  keywords: [
    'Vyom Sagar',
    'AI ML Engineer',
    'Full Stack Developer',
    'Manipal University Jaipur',
    'Software Engineer Intern',
    'React',
    'TypeScript',
    'Node.js',
    'Machine Learning',
    'Generative AI',
    'Portfolio',
  ],
  authors: [{ name: 'Vyom Sagar' }],
  creator: 'Vyom Sagar',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: siteUrl,
    siteName: 'Vyom Sagar Portfolio',
    title: 'Vyom Sagar \u2014 AI/ML Engineer & Full Stack Developer',
    description,
    images: [{ url: ogImage, width: 1200, height: 630, alt: 'Vyom Sagar Portfolio' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vyom Sagar \u2014 AI/ML Engineer & Full Stack Developer',
    description,
    images: [ogImage],
    creator: '@vyomsagar',
  },
  robots: { index: true, follow: true },
  alternates: { canonical: siteUrl },
  viewport: 'width=device-width, initial-scale=1',
};

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Vyom Sagar',
  jobTitle: 'AI/ML Engineer & Full Stack Developer',
  email: 'mailto:vyom.2427010383@muj.manipal.edu',
  telephone: '+91-7080810201',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Lucknow',
    addressCountry: 'IN',
  },
  alumniOf: { '@type': 'CollegeOrUniversity', name: 'Manipal University Jaipur' },
  knowsAbout: [
    'Artificial Intelligence',
    'Machine Learning',
    'Generative AI',
    'Full Stack Development',
    'React',
    'TypeScript',
    'Node.js',
    'Python',
  ],
  url: siteUrl,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <PortfolioShell>{children}</PortfolioShell>
        </ThemeProvider>
      </body>
    </html>
  );
}
