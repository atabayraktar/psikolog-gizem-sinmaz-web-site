import Head from 'next/head'
import Link from 'next/link'
import InfoBar from '../../components/InfoBar'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import FloatingActions from '../../components/FloatingActions'
import posts from '../../data/blogs.json'
import styles from '../../styles/pages/blog-detail.module.scss'

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

  return (
    <>
      <Head>
        <title>{post.title} | Psikolog Gizem Sınmaz</title>
        <meta name="description" content={post.excerpt} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={post.img} />
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
                <p key={i}>{para}</p>
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
