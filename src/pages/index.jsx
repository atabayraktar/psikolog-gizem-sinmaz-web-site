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
  'Çanakkale\'de bireysel psikoterapi ve online seans hizmetleri. Klinik Psikolog Gizem Sınmaz ile kaygı, depresyon, travma, ilişki sorunları ve benlik saygısı alanlarında yüz yüze ve online terapi seçenekleri.'
const KEYWORDS =
  'psikolog çanakkale, çanakkale psikolog, çanakkale terapi, çanakkale psikoloji, çanakkale klinik psikolog, çanakkale yüz yüze terapi, çanakkale online seans, çanakkale online terapi, çanakkale psikoterapi, çanakkale bireysel terapi, çanakkale terapi merkezi, çanakkale psikoloji merkezi, çanakkale ruh sağlığı, çanakkale kaygı terapisti, çanakkale depresyon terapisti, çanakkale travma terapisti, çanakkale panik atak terapisti, çanakkale anksiyete terapisi, çanakkale ilişki terapisi, online terapi türkiye, klinik psikolog, bireysel psikoterapi, bireysel terapi, online psikolog, online psikoterapi, kaygı terapisi, kaygı tedavisi, depresyon terapisi, depresyon tedavisi, travma terapisi, travma tedavisi, panik atak terapisi, anksiyete terapisi, ilişki sorunları terapisi, benlik saygısı terapisi, gizem sınmaz, psikolog gizem sınmaz, ruh sağlığı terapisti, psikoterapi, terapi seans, yüz yüze seans, online seans'

export default function Home() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'PsychologicalService',
    name: FULL_NAME,
    description: DESCRIPTION,
    url: SITE_URL,
    telephone: '+905015831121',
    email: 'sinmazgizem@gmail.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Merkez',
      addressLocality: 'Çanakkale',
      addressRegion: 'Çanakkale',
      postalCode: '17000',
      addressCountry: 'TR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 40.1245,
      longitude: 26.4168,
    },
    areaServed: [
      { '@type': 'City', name: 'Çanakkale' },
      { '@type': 'Country', name: 'Türkiye' },
    ],
    serviceType: [
      'Bireysel Psikoterapi',
      'Online Terapi',
      'Yüz Yüze Seans',
      'Kaygı Terapisi',
      'Depresyon Terapisi',
      'Travma Terapisi',
    ],
    openingHours: 'Mo-Fr 09:00-18:00',
    priceRange: '₺₺',
    sameAs: [
      'https://www.instagram.com/psikologizemsinmaz',
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

        {/* Geo / Local SEO */}
        <meta name="geo.region" content="TR-17" />
        <meta name="geo.placename" content="Çanakkale" />
        <meta name="geo.position" content="40.1245;26.4168" />
        <meta name="ICBM" content="40.1245, 26.4168" />
        <meta name="author" content={FULL_NAME} />
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
