import { useState, useEffect, useRef } from 'react'
import styles from '../styles/components/Services.module.scss'

const services = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Bireysel Terapi',
    desc: 'Kendi hızınızda ilerleyeceğiniz, güvenli ve yargısız bir terapi ortamında kendinizi keşfedin.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Kaygı & Stres Yönetimi',
    desc: 'Günlük yaşamınızı etkileyen kaygı ve stresin üstesinden gelmek için kanıta dayalı teknikler.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Depresyon Terapisi',
    desc: 'Depresyonun farklı yüzleriyle yüzleşmek ve yeniden anlam bulmak için destekleyici bir süreç.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'İlişki Terapisi',
    desc: 'Romantik ilişki, aile ya da iş ilişkilerindeki döngüleri fark etme ve dönüştürme üzerine çalışma.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m1.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Kişisel Gelişim',
    desc: 'Özgüven, sınır koyma, öz-farkındalık gibi alanlarda kendinizi geliştirmek için yapılandırılmış destek.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17H4a2 2 0 01-2-2V5a2 2 0 012-2h16a2 2 0 012 2v10a2 2 0 01-2 2h-1m-6 0a2 2 0 002 2h.01M9 17a2 2 0 002 2h.01" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Online Seans',
    desc: 'Nerede olursanız olun, güvenli ve gizli bir platformda yüz yüze kalitesinde çevrimiçi terapi.',
  },
]

export default function Services() {
  const N = services.length
  const slides = [services[N - 1], ...services, services[0]]
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
    }, 3500)
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

  return (
    <section id="hizmetler" className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.header} data-reveal>
          <span className={styles.sectionTag}>Hizmetlerim</span>
          <h2 className={styles.heading}>Size nasıl yardımcı olabilirim?</h2>
          <p className={styles.subheading}>
            Her danışanın hikâyesi benzersizdir. Terapi sürecini sizin ihtiyaçlarınıza göre şekillendiriyorum.
          </p>
        </div>

        {/* Desktop grid */}
        <div className={styles.grid} data-reveal data-reveal-delay="150">
          {services.map((s) => (
            <div key={s.title} className={styles.card}>
              <div className={styles.iconWrap}>{s.icon}</div>
              <h3 className={styles.cardTitle}>{s.title}</h3>
              <p className={styles.cardDesc}>{s.desc}</p>
            </div>
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
              {slides.map((s, i) => (
                <div key={i} className={styles.slide}>
                  <div className={styles.card}>
                    <div className={styles.iconWrap}>{s.icon}</div>
                    <h3 className={styles.cardTitle}>{s.title}</h3>
                    <p className={styles.cardDesc}>{s.desc}</p>
                  </div>
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
