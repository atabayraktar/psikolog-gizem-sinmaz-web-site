import styles from '../styles/components/WorkAreas.module.scss'

const areas = [
  'Anksiyete Bozuklukları', 'Depresyon', 'Panik Atak', 'Obsesif Kompülsif Bozukluk',
  'Travma & TSSB', 'İlişki Sorunları', 'Benlik Saygısı', 'Yas & Kayıp',
  'Aile Dinamikleri', 'Sınır Koyma', 'Öfke Yönetimi', 'Sosyal Fobi',
  'Erken Dönem Şemaları', 'Bağlanma Sorunları', 'Mükemmeliyetçilik', 'İş Stresi',
  'Kimlik & Varoluş', 'Yalnızlık', 'Özgüven', 'Kronik Stres',
]

export default function WorkAreas() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.left} data-reveal>
          <span className="section-tag">Uzmanlık Alanları</span>
          <h2 className={styles.heading}>Çalışma Alanlarım</h2>
          <p className={styles.body}>
            Pek çok farklı zorluk ve yaşam deneyimiyle çalışıyorum. Listenizde yer almayan
            bir konunuz varsa da bana ulaşmaktan çekinmeyin.
          </p>
          <a href="#randevu" className={styles.btn}>İlk Görüşmeyi Ayarla</a>
        </div>

        <div className={styles.right} data-reveal data-reveal-delay="200">
          <div className={styles.tags}>
            {areas.map((a) => (
              <span key={a} className={styles.tag}>{a}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
