import styles from '../styles/components/About.module.scss'

const areas = [
  'Anksiyete Bozuklukları', 'Depresyon', 'Panik Atak', 'Obsesif Kompülsif Bozukluk',
  'Travma & TSSB', 'İlişki Sorunları', 'Benlik Saygısı', 'Yas & Kayıp',
  'Aile Dinamikleri', 'Sınır Koyma', 'Öfke Yönetimi', 'Sosyal Fobi',
  'Erken Dönem Şemaları', 'Bağlanma Sorunları', 'Mükemmeliyetçilik', 'İş Stresi',
  'Kimlik & Varoluş', 'Yalnızlık', 'Özgüven', 'Kronik Stres',
]

export default function About() {
  return (
    <section id="hakkimda" className={styles.section}>
      <div className={`container ${styles.wrap}`}>

        {/* Tag sits above the image, top-left */}
        <span className={styles.sectionTag}>Hakkımda</span>

        {/* Two-column row */}
        <div className={styles.mainRow}>
          {/* Image column */}
          <div className={styles.imageCol} data-reveal>
            <div className={styles.imageFrame}>
              <img
                src="/images/about.webp"
                alt="Psikolog Gizem Sınmaz hakkında"
                className={styles.img}
                width={520}
                height={640}
              />
            </div>
            <div className={styles.credential}>
              <div className={styles.credIcon}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                  <path d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <p className={styles.credTitle}>Klinik Psikolog</p>
                <p className={styles.credSub}>Hacettepe Üniversitesi, Psikoloji Lisansüstü</p>
              </div>
            </div>
          </div>

          {/* Text column */}
          <div className={styles.textCol} data-reveal data-reveal-delay="150">
            <h2 className={styles.heading}>
              <span className={styles.headingWine}>Güvenli bir alan,</span><br />
              <em>gerçek bir değişim</em>
            </h2>
            <div className={styles.bodyText}>
              <p>
                Merhaba, ben Gizem Sınmaz. Klinik psikolog olarak bireylerle çalışıyor,
                onların iç dünyalarını anlamak ve dönüşüm süreçlerine eşlik etmek için
                buradayım. Terapi odasında her zaman yargısız, meraklı ve dürüst bir
                bakış açısı sunmaya özen gösteriyorum.
              </p>
              <p>
                Bilişsel Davranışçı Terapi (BDT), Şema Terapi ve Kabul & Kararlılık
                Terapisi (ACT) gibi kanıta dayalı yaklaşımlarla çalışıyorum. Seanslarımı
                hem yüz yüze hem de çevrimiçi olarak sürdürüyorum.
              </p>
            </div>

            <div className={styles.quals}>
              {[
                'Bilişsel Davranışçı Terapi (BDT)',
                'Şema Terapi',
                'Kabul & Kararlılık Terapisi (ACT)',
                'EMDR – Travma Terapisi',
              ].map((q) => (
                <div key={q} className={styles.qualItem}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>{q}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Çalışma Alanlarım — horizontal tag strip */}
        <div className={styles.areasRow} data-reveal>
          <h3 className={styles.areasHeading}>Çalışma Alanlarım</h3>
          <div className={styles.areaTags}>
            {areas.map((a) => (
              <span key={a} className={styles.areaTag}>{a}</span>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
