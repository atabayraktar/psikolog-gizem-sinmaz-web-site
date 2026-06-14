import Head from 'next/head'
import Link from 'next/link'
import InfoBar from '../../components/InfoBar'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import FloatingActions from '../../components/FloatingActions'
import posts from '../../data/blogs.json'
import styles from '../../styles/pages/blog.module.scss'

const SITE_URL = 'https://gizemsinmaz.com'
const BLOG_TITLE = 'Blog – Psikoloji ve Terapi Yazıları | Psikolog Gizem Sınmaz'
const BLOG_DESC = 'Çanakkale klinik psikolog Gizem Sınmaz\'ın kaygı, depresyon, terapi süreci, online seans ve kişisel gelişim hakkında bilgilendirici yazıları.'

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Ana Sayfa', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_URL}/blog/` },
  ],
}

export default function BlogPage() {
  return (
    <>
      <Head>
        <title>{BLOG_TITLE}</title>
        <meta name="description" content={BLOG_DESC} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`${SITE_URL}/blog/`} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={BLOG_TITLE} />
        <meta property="og:description" content={BLOG_DESC} />
        <meta property="og:url" content={`${SITE_URL}/blog/`} />
        <meta property="og:site_name" content="Psikolog Gizem Sınmaz" />
        <meta property="og:locale" content="tr_TR" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      </Head>

      <InfoBar />
      <Navbar />

      <main>
        <section className={styles.section}>
          <div className={`container ${styles.inner}`}>
            <div className={styles.header}>
              <span className={styles.sectionTag}>Blog</span>
              <h1 className={styles.heading}>Psikoloji & Yaşam</h1>
              <p className={styles.sub}>Kaygı, ilişkiler, kişisel gelişim ve terapi hakkında yazılar.</p>
            </div>

            <div className={styles.grid}>
              {posts.map((p) => (
                <article key={p.slug} className={styles.card}>
                  <Link href={`/blog/${p.slug}`} className={styles.imgLink} tabIndex={-1} aria-hidden="true">
                    <div className={styles.imgWrap}>
                      <img src={p.img} alt={p.title} className={styles.img} width={560} height={360} />
                    </div>
                  </Link>
                  <div className={styles.body}>
                    <div className={styles.meta}>
                      <span className={styles.metaText}>{p.readTime} okuma</span>
                    </div>
                    <h2 className={styles.cardTitle}>
                      <Link href={`/blog/${p.slug}`}>{p.title}</Link>
                    </h2>
                    <p className={styles.excerpt}>{p.excerpt}</p>
                    <Link href={`/blog/${p.slug}`} className={styles.readMore}>
                      Devamını oku
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                        <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingActions />
    </>
  )
}
