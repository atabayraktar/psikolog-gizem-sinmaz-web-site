import { useState, useEffect, useRef } from 'react'
import styles from '../styles/components/TherapyFormats.module.scss'

const formats = [
  {
    bg: 'var(--color-sage-tint)',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M23 7l-7 5 7 5V7z"/>
        <rect x="1" y="5" width="15" height="14" rx="2"/>
      </svg>
    ),
    title: 'Online Terapi',
    desc: 'Online görüşmeler etik ve güvenli bir terapi çerçevesi içinde yürütülmektedir. Seans sırasında danışanın kendisini rahat ifade edebileceği, mahremiyetin korunabildiği bir ortam oluşturması sürecin sağlıklı ilerleyebilmesi açısından önemlidir.',
  },
  {
    bg: 'var(--color-cream-light)',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    title: 'Yüz Yüze Görüşmeler',
    desc: "Yüz yüze görüşmeler Çanakkale'de, güvenli ve etik terapi koşullarını gözeten bir ofis ortamında gerçekleştirilmektedir.",
  },
  {
    bg: '#f5ede3',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="4" width="18" height="18" rx="2"/>
        <line x1="16" y1="2" x2="16" y2="6"/>
        <line x1="8" y1="2" x2="8" y2="6"/>
        <line x1="3" y1="10" x2="21" y2="10"/>
        <path d="M8 14h.01M12 14h.01M8 18h.01M12 18h.01M16 18h.01"/>
      </svg>
    ),
    title: 'İlk Görüşme Süreci',
    desc: 'İlk görüşmeler hem yüz yüze hem de online olarak gerçekleştirilebilmektedir. Bu görüşmede kişinin yaşadığı zorluklar, terapi beklentisi ve ihtiyaçları birlikte değerlendirilmektedir.',
  },
]

export default function TherapyFormats() {
  const [activeIdx, setActiveIdx] = useState(0)

  // Mobile swiper
  const N = formats.length
  const slides = [formats[N - 1], ...formats, formats[0]]
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
    }, 8000)
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

  const handlePrev = () => { posRef.current -= 1; setAnim(true); setPos(p => p - 1); startAuto() }
  const handleNext = () => { posRef.current += 1; setAnim(true); setPos(p => p + 1); startAuto() }

  return (
    <div className={styles.wrap} data-reveal data-reveal-delay="150">
      <div className={styles.divider} />
      <h2 className={styles.sectionHeading}>Nasıl Çalışıyorum?</h2>

      {/* Desktop accordion */}
      <div className={styles.accordionGrid}>
        {formats.map((f, i) => {
          const isActive = activeIdx === i
          return (
            <div
              key={f.title}
              className={`${styles.panel} ${isActive ? styles.active : ''}`}
              onClick={() => !isActive && setActiveIdx(i)}
              role="button"
              tabIndex={0}
              aria-expanded={isActive}
              onKeyDown={e => e.key === 'Enter' && !isActive && setActiveIdx(i)}
            >
              <div className={styles.iconWrap}>{f.icon}</div>
              <h3 className={styles.title}>{f.title}</h3>
              <p className={styles.teaser}>{f.desc}</p>
              <p className={styles.fullDesc}>{f.desc}</p>
            </div>
          )
        })}
      </div>

      {/* Mobile / tablet swiper */}
      <div className={styles.slider}>
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
            {slides.map((f, i) => (
              <div key={i} className={styles.slide}>
                <div className={styles.mobileCard} style={{ background: f.bg }}>
                  <div className={styles.mobileCardIcon}>{f.icon}</div>
                  <h3 className={styles.mobileCardTitle}>{f.title}</h3>
                  <p className={styles.mobileCardDesc}>{f.desc}</p>
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
  )
}
