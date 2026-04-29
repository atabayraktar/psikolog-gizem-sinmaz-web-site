import Head from 'next/head'
import InfoBar from '../components/InfoBar'
import Navbar from '../components/Navbar'
import FloatingActions from '../components/FloatingActions'
import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import Blog from '../components/Blog'
import FAQ from '../components/FAQ'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const SITE_URL = 'https://gizemsinmaz.com'
const FULL_NAME = 'Psikolog Gizem Sınmaz'
const TITLE = `${FULL_NAME} | Klinik Psikolog & Terapist – İstanbul & Online`
const DESCRIPTION =
  'Klinik Psikolog Gizem Sınmaz ile bireysel terapi, kaygı yönetimi, depresyon ve kişisel gelişim alanlarında yüz yüze ve online seans seçenekleri. İstanbul, Kadıköy.'
const KEYWORDS =
  'psikolog istanbul, online terapi, klinik psikolog, bireysel terapi, kaygı terapisi, depresyon, gizem sınmaz, kadıköy psikolog'

export default function Home() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    name: FULL_NAME,
    description: DESCRIPTION,
    url: SITE_URL,
    telephone: '+905001234567',
    email: 'gizem@example.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Kadıköy',
      addressLocality: 'İstanbul',
      addressCountry: 'TR',
    },
    medicalSpecialty: 'Psychiatry',
    openingHours: 'Mo-Fr 09:00-18:00',
    sameAs: [
      'https://instagram.com/',
      'https://linkedin.com/',
    ],
    employee: {
      '@type': 'Person',
      name: FULL_NAME,
      jobTitle: 'Klinik Psikolog',
      alumniOf: 'Hacettepe Üniversitesi',
    },
  }

  return (
    <>
      <Head>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
        <meta name="keywords" content={KEYWORDS} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={SITE_URL} />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
        <link rel="icon" href="/favicon.ico" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:url" content={SITE_URL} />
        <meta property="og:site_name" content={FULL_NAME} />
        <meta property="og:locale" content="tr_TR" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={TITLE} />
        <meta name="twitter:description" content={DESCRIPTION} />

        {/* Structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />

        {/* Language */}
        <meta httpEquiv="content-language" content="tr" />
      </Head>

      <InfoBar />
      <Navbar />

      <main id="main-content">
        <Hero />
        <About />
        <Services />
        <Blog />
        <FAQ />
        <Contact />
      </main>

      <Footer />
      <FloatingActions />
    </>
  )
}
