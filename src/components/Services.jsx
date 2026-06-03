import { useState, useEffect, useRef } from 'react'
import styles from '../styles/components/Services.module.scss'

const services = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
      </svg>
    ),
    title: 'Duygusal Zorlanmalar',
    desc: 'Yoğun duygusal yük, içsel sıkışmışlık ve günlük yaşamı zorlaştıran duygusal süreçler üzerine çalışma.',
    tags: ['Kaygı', 'Depresif belirtiler', 'Yoğun stres', 'Tükenmişlik', 'Duygu düzenleme güçlükleri'],
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="8" r="4"/>
        <path d="M6 20v-1a6 6 0 0 1 6-6v0"/>
        <path d="M18 14l2 2 4-4"/>
      </svg>
    ),
    title: 'Kendilik Algısı ve Özdeğer',
    desc: 'Kişinin kendisiyle kurduğu ilişki, özdeğer algısı ve algılanma kaygısıyla ilgili duygusal süreçler üzerine çalışma.',
    tags: ['Değersizlik hissi', 'Yetersizlik hissi', 'Onay ihtiyacı', 'Yargılanma kaygısı', 'Kendine yabancılaşma hissi', 'Beden algısıyla ilişkili güçlükler'],
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title: 'İlişkisel Problemler',
    desc: 'Kişinin yakın ilişkilerinde tekrar eden örüntüler, bağ kurma biçimleri ve kişilerarası zorlanmalar üzerine çalışma.',
    tags: ['İlişki örüntüleri', 'Ayrılık süreçleri', 'Yakınlık problemleri', 'Sınır koyma güçlükleri', 'Yalnızlık hissi'],
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="1 4 1 10 7 10"/>
        <polyline points="23 20 23 14 17 14"/>
        <path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"/>
      </svg>
    ),
    title: 'Düşünsel Döngüler',
    desc: 'Zihinsel yoğunluk, sürekli düşünme ve kontrol ihtiyacının yarattığı içsel yük üzerine çalışma.',
    tags: ['Obsesif düşünceler', 'Aşırı düşünme', 'Kontrol ihtiyacı', 'Belirsizliğe tahammülsüzlük', 'Kararsızlık', 'Odaklanma ve harekete geçme güçlüğü'],
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10"/>
        <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>
      </svg>
    ),
    title: 'Yaşam Süreçleri',
    desc: 'Kayıp, değişim ve yaşam içerisindeki geçiş dönemlerinin yarattığı duygusal süreçler üzerine çalışma.',
    tags: ['Yas ve kayıp', 'Kimlik ve yön arayışı', 'Varoluşsal sorgulamalar'],
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: 'Ek Klinik Alanlar',
    desc: 'Daha yoğun psikolojik zorlanmalar ve klinik değerlendirme ile özel destek gerektiren alanlarda bireysel ihtiyaca uygun çalışma.',
    tags: ['Bağımlılık', 'Travmatik yaşantılar', 'Kendine zarar verme düşünceleri'],
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
