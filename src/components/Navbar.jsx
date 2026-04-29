import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/router'
import styles from '../styles/components/Navbar.module.scss'

const links = [
  { href: '#hakkimda', label: 'Hakkımda' },
  { href: '#hizmetler', label: 'Hizmetlerim' },
  { href: '#blog', label: 'Blog', dropdown: true },
  { href: '#sss', label: 'S.S.S' },
  { href: '#iletisim', label: 'İletişim / Ulaşım' },
]

const blogPosts = [
  {
    slug: 'kaygı-ile-basa-cikma',
    tag: 'Kaygı',
    title: 'Kaygıyla Baş Etmenin 5 Kanıta Dayalı Yolu',
    img: 'https://placehold.co/400x240/EAF0EC/2D5A3D?text=Kaygı+Yönetimi',
  },
  {
    slug: 'terapi-nasil-isler',
    tag: 'Terapi',
    title: 'Terapi Nasıl İşler? İlk Seanstan Önce Bilmeniz Gerekenler',
    img: 'https://placehold.co/400x240/F5EAE7/C17B6B?text=Terapi+Hakkında',
  },
  {
    slug: 'oz-sefkat',
    tag: 'Kişisel Gelişim',
    title: 'Öz-Şefkat: Kendinize Bir Arkadaşa Davranır Gibi Davranmak',
    img: 'https://placehold.co/400x240/F0EBE0/1E3828?text=Öz-Şefkat',
  },
]

export default function Navbar() {
  const router = useRouter()
  const isHome = router.pathname === '/'
  const [scrolled, setScrolled] = useState(false)
  const [passedInfoBar, setPassedInfoBar] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [blogOpen, setBlogOpen] = useState(false)
  const closeTimer = useRef(null)

  const openBlog = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setBlogOpen(true)
  }

  const closeBlog = () => {
    closeTimer.current = setTimeout(() => setBlogOpen(false), 120)
  }

  // Add/remove body class for backdrop
  useEffect(() => {
    document.body.classList.toggle('blog-dropdown-open', blogOpen)
    return () => document.body.classList.remove('blog-dropdown-open')
  }, [blogOpen])

  useEffect(() => {
    const INFO_BAR_H = 42
    const onScroll = () => {
      const y = window.scrollY
      setScrolled(y > 24)
      setPassedInfoBar(y > INFO_BAR_H)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
    <div
      className={`${styles.backdrop} ${menuOpen ? styles.backdropOpen : ''}`}
      onClick={() => setMenuOpen(false)}
      aria-hidden="true"
    />
    <header
      className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}
      style={{ top: passedInfoBar ? '1rem' : 'calc(42px + 0.75rem)' }}
    >
      <div className={`${styles.inner} ${blogOpen ? styles.expanded : ''}`}>
        {/* Top row */}
        <div className={styles.topRow}>
          <a
            href={isHome ? '/' : '/'}
            className={styles.logo}
            onClick={(e) => {
              if (isHome) {
                e.preventDefault()
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }
            }}
          >
            Psk. Gizem Sınmaz
          </a>

          <nav className={styles.nav} aria-label="Ana menü">
            {links.map((l) =>
              l.dropdown ? (
                <div
                  key={l.href}
                  className={styles.blogTrigger}
                  onMouseEnter={openBlog}
                  onMouseLeave={closeBlog}
                >
                  <a href={l.href} className={`${styles.navLink} ${blogOpen ? styles.navLinkActive : ''}`}>
                    <span className={styles.navLinkText}>{l.label}</span>
                    <svg className={`${styles.chevron} ${blogOpen ? styles.chevronOpen : ''}`} width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M6 9l6 6 6-6"/>
                    </svg>
                  </a>
                </div>
              ) : (
                <a key={l.href} href={l.href} className={styles.navLink}>
                  <span className={styles.navLinkText}>{l.label}</span>
                </a>
              )
            )}
          </nav>

          <button
            className={`${styles.burger} ${menuOpen ? styles.open : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Menüyü kapat' : 'Menüyü aç'}
            aria-expanded={menuOpen}
          >
            <span /><span /><span />
          </button>
        </div>

        {/* Blog dropdown panel */}
        <div
          className={`${styles.dropdownPanel} ${blogOpen ? styles.dropdownOpen : ''}`}
          onMouseEnter={openBlog}
          onMouseLeave={closeBlog}
        >
          <div className={styles.dropdownGrid}>
            {blogPosts.map((p) => (
              <a key={p.slug} href={`/blog/${p.slug}`} className={styles.dropdownCard}>
                <div className={styles.dropdownImgWrap}>
                  <img src={p.img} alt={p.title} className={styles.dropdownImg} />
                </div>
                <div className={styles.dropdownCardBody}>
                  <span className={styles.dropdownTag}>{p.tag}</span>
                  <p className={styles.dropdownTitle}>{p.title}</p>
                </div>
              </a>
            ))}
          </div>
          <a href="/blog" className={styles.viewAll}>Tüm Yazılar →</a>
        </div>

        {/* Mobile menu — inside .inner so header expands seamlessly */}
        <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileOpen : ''}`}>
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={styles.mobileLink}
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </header>
    </>
  )
}
