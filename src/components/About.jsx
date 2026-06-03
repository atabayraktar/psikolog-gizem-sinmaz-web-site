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

          </div>

          {/* Text column */}
          <div className={styles.textCol} data-reveal data-reveal-delay="150">

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
