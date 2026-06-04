import { useState, useEffect, useRef, useCallback } from 'react'
import styles from '../styles/components/Services.module.scss'
import TherapyFormats from './TherapyFormats'

const services = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"/>
        <line x1="8" y1="19" x2="8" y2="21"/>
        <line x1="12" y1="17" x2="12" y2="19"/>
        <line x1="16" y1="19" x2="16" y2="21"/>
      </svg>
    ),
    title: 'Duygusal Zorlanmalar',
    desc: 'Yoğun duygusal yük, içsel sıkışmışlık ve günlük yaşamı zorlaştıran duygusal süreçler üzerine çalışma.',
    tags: ['Kaygı', 'Depresif belirtiler', 'Yoğun stres', 'Tükenmişlik', 'Duygu düzenleme güçlükleri'],
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <ellipse cx="12" cy="9" rx="6" ry="7.5"/>
        <line x1="12" y1="16.5" x2="12" y2="21"/>
        <line x1="9" y1="21" x2="15" y2="21"/>
      </svg>
    ),
    title: 'Kendilik Algısı ve Özdeğer',
    desc: 'Kişinin kendisiyle kurduğu ilişki, özdeğer algısı ve algılanma kaygısıyla ilgili duygusal süreçler üzerine çalışma.',
    tags: ['Değersizlik hissi', 'Yetersizlik hissi', 'Onay ihtiyacı', 'Yargılanma kaygısı', 'Kendine yabancılaşma hissi', 'Beden algısıyla ilişkili güçlükler'],
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="8" cy="12" r="5"/>
        <circle cx="16" cy="12" r="5"/>
      </svg>
    ),
    title: 'İlişkisel Problemler',
    desc: 'Kişinin yakın ilişkilerinde tekrar eden örüntüler, bağ kurma biçimleri ve kişilerarası zorlanmalar üzerine çalışma.',
    tags: ['İlişki örüntüleri', 'Ayrılık süreçleri', 'Yakınlık problemleri', 'Sınır koyma güçlükleri', 'Yalnızlık hissi'],
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/>
        <polyline points="3 3 3 8 8 8"/>
      </svg>
    ),
    title: 'Düşünsel Döngüler',
    desc: 'Zihinsel yoğunluk, sürekli düşünme ve kontrol ihtiyacının yarattığı içsel yük üzerine çalışma.',
    tags: ['Obsesif düşünceler', 'Aşırı düşünme', 'Kontrol ihtiyacı', 'Belirsizliğe tahammülsüzlük', 'Kararsızlık', 'Odaklanma ve harekete geçme güçlüğü'],
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22v-9"/>
        <path d="M12 13C12 8 7.5 5.5 4 7c.5 5 4 7 8 6"/>
        <path d="M12 13c0-5 4.5-7.5 8-6-.5 5-4 7-8 6"/>
      </svg>
    ),
    title: 'Yaşam Süreçleri',
    desc: 'Kayıp, değişim ve yaşam içerisindeki geçiş dönemlerinin yarattığı duygusal süreçler üzerine çalışma.',
    tags: ['Yas ve kayıp', 'Kimlik ve yön arayışı', 'Varoluşsal sorgulamalar'],
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polygon points="12 2 2 7 12 12 22 7 12 2"/>
        <polyline points="2 17 12 22 22 17"/>
        <polyline points="2 12 12 17 22 12"/>
      </svg>
    ),
    title: 'Ek Klinik Alanlar',
    desc: 'Daha yoğun psikolojik zorlanmalar ve klinik değerlendirme ile özel destek gerektiren alanlarda bireysel ihtiyaca uygun çalışma.',
    tags: ['Bağımlılık', 'Travmatik yaşantılar', 'Kendine zarar verme düşünceleri'],
  },
]

export default function Services() {
  const tabletRef = useRef(null)
  const scrollTablet = useCallback((dir) => {
    if (tabletRef.current) {
      tabletRef.current.scrollBy({ left: dir * tabletRef.current.clientWidth, behavior: 'smooth' })
    }
  }, [])

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
    <section id="calisma-alanlarim" className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.header} data-reveal>
          <span className={styles.sectionTag}>Çalışma Alanlarım</span>
          <p className={styles.subheading}>
            Terapi sürecinde kişinin yaşadığı zorlukları yalnızca belirtiler üzerinden değil; duygusal, ilişkisel ve düşünsel boyutlarıyla birlikte ele alıyorum.
          </p>
        </div>

        {/* Desktop grid */}
        <div className={styles.grid} data-reveal data-reveal-delay="150">
          {services.map((s) => (
            <div key={s.title} className={styles.card}>
              <div className={styles.iconWrap}>{s.icon}</div>
              <h3 className={styles.cardTitle}>{s.title}</h3>
              <p className={styles.cardDesc}>{s.desc}</p>
              <p className={styles.cardTags}>{s.tags.join(' · ')}</p>
            </div>
          ))}
        </div>

        {/* Tablet swiper — 2 per page */}
        <div className={styles.tabletSlider} data-reveal data-reveal-delay="150">
          <button className={styles.arrowBtn} onClick={() => scrollTablet(-1)} aria-label="Önceki">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M15 18l-6-6 6-6"/>
            </svg>
          </button>
          <div className={styles.tabletOverflow} ref={tabletRef}>
            {Array.from({ length: Math.ceil(services.length / 2) }, (_, i) => (
              <div key={i} className={styles.tabletPage}>
                {services.slice(i * 2, i * 2 + 2).map((s) => (
                  <div key={s.title} className={styles.card}>
                    <div className={styles.iconWrap}>{s.icon}</div>
                    <h3 className={styles.cardTitle}>{s.title}</h3>
                    <p className={styles.cardDesc}>{s.desc}</p>
                    <p className={styles.cardTags}>{s.tags.join(' · ')}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <button className={styles.arrowBtn} onClick={() => scrollTablet(1)} aria-label="Sonraki">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M9 18l6-6-6-6"/>
            </svg>
          </button>
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
                    <p className={styles.cardTags}>{s.tags.join(' · ')}</p>
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

        <TherapyFormats />
      </div>
    </section>
  )
}
