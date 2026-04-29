import styles from '../styles/components/Sessions.module.scss'

const options = [
  {
    type: 'Bireysel Seans',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    label: 'Yüz Yüze',
    duration: '50 dakika',
    location: 'İstanbul, Kadıköy',
    features: ['Klinik ortamda gerçek temas', 'Fiziksel güven ve mahremiytet', 'Beden dili gözlemi'],
    highlight: false,
  },
  {
    type: 'Online Seans',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0H3" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    label: 'Online',
    duration: '50 dakika',
    location: 'Güvenli Video Görüşmesi',
    features: ['Evinizden konfor', 'Şehir fark etmeksizin', 'HIPAA uyumlu platform'],
    highlight: true,
  },
]

export default function Sessions() {
  return (
    <section id="randevu" className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.header}>
          <span className="section-tag">Seans Seçenekleri</span>
          <h2 className={styles.heading}>Size en uygun formatı seçin</h2>
          <p className={styles.sub}>
            Her iki format da aynı özveri ve etkinlikle sunulmaktadır.
          </p>
        </div>

        <div className={styles.cards}>
          {options.map((o) => (
            <div key={o.type} className={`${styles.card} ${o.highlight ? styles.highlighted : ''}`}>
              <div className={styles.cardTop}>
                <div className={styles.iconWrap}>{o.icon}</div>
                <div>
                  <p className={styles.cardLabel}>{o.label}</p>
                  <h3 className={styles.cardType}>{o.type}</h3>
                </div>
              </div>

              <div className={styles.meta}>
                <div className={styles.metaItem}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                    <path d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>{o.duration}</span>
                </div>
                <div className={styles.metaItem}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                    <path d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>{o.location}</span>
                </div>
              </div>

              <ul className={styles.features}>
                {o.features.map((f) => (
                  <li key={f} className={styles.feature}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <a href="mailto:gizem@example.com" className={styles.btn}>
                Randevu Al
              </a>
            </div>
          ))}
        </div>

        <p className={styles.note}>
          Ücret bilgisi için lütfen{' '}
          <a href="mailto:gizem@example.com" className={styles.noteLink}>
            iletişime geçin
          </a>
          . İlk görüşme 20 dakika ücretsizdir.
        </p>
      </div>
    </section>
  )
}
