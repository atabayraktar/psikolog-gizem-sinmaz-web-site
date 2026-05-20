import { useState, useEffect, useRef } from 'react'
import posts from '../data/blogs.json'
import styles from '../styles/components/Blog.module.scss'

export default function Blog() {
  const N = posts.length
  const slides = [posts[N - 1], ...posts, posts[0]]
  const [pos, setPos] = useState(1)
  const [anim, setAnim] = useState(true)
  const autoRef = useRef(null)
  const posRef = useRef(1)

  const startAuto = () => {
    clearInterval(autoRef.current)
    autoRef.current = setInterval(() => {
      posRef.current += 1
      setAnim(true)
      setPos(p => p + 1)
    }, 4000)
  }

  useEffect(() => {
    startAuto()
    return () => clearInterval(autoRef.current)
  }, [])

  useEffect(() => {
    if (pos === N + 1) {
      const t = setTimeout(() => { setAnim(false); setPos(1); posRef.current = 1 }, 430)
      return () => clearTimeout(t)
    }
    if (pos === 0) {
      const t = setTimeout(() => { setAnim(false); setPos(N); posRef.current = N }, 430)
      return () => clearTimeout(t)
    }
  }, [pos, N])

  const handlePrev = () => {
    posRef.current -= 1
    setAnim(true)
    setPos(p => p - 1)
    startAuto()
  }

  const handleNext = () => {
    posRef.current += 1
    setAnim(true)
    setPos(p => p + 1)
    startAuto()
  }

  const BlogCard = ({ p }) => (
    <article className={styles.card}>
      <a href={`/blog/${p.slug}`} className={styles.imgLink} tabIndex={-1} aria-hidden="true">
        <div className={styles.imgWrap}>
          <img src={p.img} alt={p.title} className={styles.img} width={560} height={360} />
        </div>
      </a>
      <div className={styles.body}>
        <div className={styles.meta}>
          <span className={styles.metaText}>{p.readTime} okuma</span>
        </div>
        <h3 className={styles.cardTitle}>
          <a href={`/blog/${p.slug}`}>{p.title}</a>
        </h3>
        <p className={styles.excerpt}>{p.excerpt}</p>
      </div>
    </article>
  )

  return (
    <section id="blog" className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.header} data-reveal>
          <div>
            <span className={styles.sectionTag}>Blog</span>
            <h2 className={styles.heading}>Psikoloji &amp; Yaşam</h2>
          </div>
          <a href="/blog" className={styles.viewAll}>
            Tüm Yazılar
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>

        {/* Desktop grid */}
        <div className={styles.grid} data-reveal data-reveal-delay="150">
          {posts.map((p) => (
            <BlogCard key={p.slug} p={p} />
          ))}
        </div>

        {/* Mobile slider */}
        <div className={styles.slider} data-reveal data-reveal-delay="150">
          <button className={styles.arrowBtn} onClick={handlePrev} aria-label="Önceki">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M15 18l-6-6 6-6"/>
            </svg>
          </button>

          <div className={styles.overflow}>
            <div
              className={styles.track}
              style={{
                transform: `translateX(-${pos * 100}%)`,
                transition: anim ? 'transform 0.42s cubic-bezier(0.4, 0, 0.2, 1)' : 'none',
              }}
            >
              {slides.map((p, i) => (
                <div key={i} className={styles.slide}>
                  <BlogCard p={p} />
                </div>
              ))}
            </div>
          </div>

          <button className={styles.arrowBtn} onClick={handleNext} aria-label="Sonraki">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M9 18l6-6-6-6"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
