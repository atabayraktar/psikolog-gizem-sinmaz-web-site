import Head from 'next/head'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import InfoBar from '../../components/InfoBar'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import FloatingActions from '../../components/FloatingActions'
import posts from '../../data/blogs.json'
import styles from '../../styles/pages/blog-detail.module.scss'

const SITE_URL = 'https://gizemsinmaz.com'

export async function getStaticPaths() {
  return {
    paths: posts.map((p) => ({ params: { slug: p.slug } })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const post = posts.find((p) => p.slug === params.slug) || null
  return { props: { post } }
}

export default function BlogDetail({ post }) {
  if (!post) return null

  const canonicalUrl = `${SITE_URL}/blog/${post.slug}/`
  const ogImage = post.img.startsWith('http') ? post.img : `${SITE_URL}${post.img}`

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: ogImage,
    url: canonicalUrl,
    datePublished: post.isoDate,
    dateModified: post.isoDate,
    author: {
      '@type': 'Person',
      name: 'Psikolog Gizem Sınmaz',
      url: SITE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Psikolog Gizem Sınmaz',
      url: SITE_URL,
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': canonicalUrl },
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Ana Sayfa', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_URL}/blog/` },
      { '@type': 'ListItem', position: 3, name: post.title, item: canonicalUrl },
    ],
  }

  return (
    <>
      <Head>
        <title>{post.title} | Psikolog Gizem Sınmaz – Çanakkale</title>
        <meta name="description" content={post.excerpt} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={canonicalUrl} />
        <meta name="author" content="Psikolog Gizem Sınmaz" />

        <meta property="og:type" content="article" />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:site_name" content="Psikolog Gizem Sınmaz" />
        <meta property="og:locale" content="tr_TR" />
        {post.isoDate && <meta property="article:published_time" content={post.isoDate} />}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      </Head>

      <InfoBar />
      <Navbar />

      <main>
        <article className={styles.article}>
          {/* Hero image */}
          <div className={styles.heroWrap}>
            <img src={post.img} alt={post.title} className={styles.heroImg} />
          </div>

          <div className={`container ${styles.inner}`}>
            {/* Meta */}
            <div className={styles.meta}>
              <span className={styles.metaText}>{post.readTime} okuma</span>
            </div>

            {/* Title */}
            <h1 className={styles.title}>{post.title}</h1>

            {/* Content */}
            <div className={styles.content}>
              {post.content.map((para, i) => (
                <ReactMarkdown key={i}>{para}</ReactMarkdown>
              ))}
            </div>

            {/* Back link */}
            <Link href="/blog" className={styles.back}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Tüm Yazılara Dön
            </Link>
          </div>
        </article>
      </main>

      <Footer />
      <FloatingActions />
    </>
  )
}
