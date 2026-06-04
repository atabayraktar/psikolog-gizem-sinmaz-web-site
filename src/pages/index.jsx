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
const OG_IMAGE = `${SITE_URL}/images/og-preview.png`
const TITLE = `${FULL_NAME} | Klinik Psikolog & Terapist – Çanakkale & Online`
const DESCRIPTION =
  'Klinik Psikolog Gizem Sınmaz ile kaygı, depresyon, travma, ilişki sorunları ve benlik saygısı alanlarında bireysel psikoterapi. Çanakkale\'de yüz yüze ve online seans seçenekleri.'
const KEYWORDS =
  'psikolog çanakkale, online terapi, klinik psikolog, bireysel terapi, kaygı terapisi, depresyon, travma terapisi, gizem sınmaz, anksiyete, panik atak, ilişki sorunları, benlik saygısı'

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
      streetAddress: 'Merkez',
      addressLocality: 'Çanakkale',
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
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content={TITLE} />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={TITLE} />
        <meta name="twitter:description" content={DESCRIPTION} />
        <meta name="twitter:image" content={OG_IMAGE} />

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
        {/* <Blog /> */}{/* TODO: gerçek blog içeriği gelince aç */}
        <FAQ />
        <Contact />
      </main>

      <Footer />
      <FloatingActions />
    </>
  )
}
