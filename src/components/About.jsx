import styles from '../styles/components/About.module.scss'

const education = [
  { school: 'Üsküdar Üniversitesi', degree: 'Klinik Psikoloji Yüksek Lisans' },
  { school: 'Hacettepe Üniversitesi', degree: 'Psikoloji Lisans' },
]

const trainings = [
  { title: 'Psikanalitik Psikoterapi Eğitimi', org: 'İzmir Odağ Psikanaliz ve Psikoterapi Derneği' },
  { title: 'Bilişsel Davranışçı Terapi Kuramsal Eğitimi', org: 'Bilişsel Davranışçı Psikoterapiler Derneği' },
  { title: 'BDT Beceri Kazandırma ve Süpervizyon Eğitimi', org: 'Bilişsel Davranışçı Psikoterapiler Derneği' },
  { title: 'Klinik İlk Görüşme ve Değerlendirme Eğitimi', org: 'Bilişsel Davranışçı Psikoterapiler Derneği' },
  { title: 'MMPI Uygulayıcı Eğitimi', org: 'İstanbul Gedik Üniversitesi SEM' },
  { title: 'Özkıyım Değerlendirme ve Müdahale Workshop\'u', org: 'Bilişsel Davranışçı Psikoterapiler Derneği' },
  { title: 'Şefkat Terapi Seminerleri', org: 'Prof. Dr. Selçuk Aslan' },
]

const experience = [
  { place: 'Özel Özgün Aile Danışma Merkezi', role: 'Devam Ediyor' },
  { place: 'NPİSTANBUL Beyin Hastanesi', role: 'Klinik Psikolog Stajyeri' },
]

export default function About() {
  return (
    <section id="hakkimda" className={styles.section}>
      <div className={`container ${styles.wrap}`}>

        {/* Tag */}
        <span className={styles.sectionTag}>Hakkımda</span>

        {/* Full-width intro text */}
        <div className={styles.bodyText} data-reveal>
          <p>
            Terapi sürecini, kişinin yaşadığı zorlukları anlamlandırabileceği ve kendi deneyimine
            farklı bir yerden bakabileceği bir süreç olarak görüyorum.
          </p>
          <p>
            Süreçte kurulan güvenli ilişkinin; yargılanmadan dinlenebildiği, anlaşılmaya çalışıldığı
            ve kişinin koşul olmaksızın kabul edilebildiği bir alanın temel olduğunu düşünüyorum.
            Bu alanın, kişinin hem kendisiyle ve başkalarıyla kurduğu ilişkiyi hem de geçmişi ve
            geleceğiyle kurduğu bağı yeniden değerlendirmesine olanak sağladığını gözlemliyorum.
          </p>
          <p>
            İnsan doğasını anlama çabamda psikanaliz, felsefe ve sanat benim için önemli kaynaklar
            oluşturmaktadır. Klinik çalışmalarımın yanında düşünsel üretimi ve farklı disiplinlerle
            temas halinde olmayı besleyici buluyorum.
          </p>
        </div>

        {/* Two-column row: image left, info right */}
        <div className={styles.mainRow}>
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

          <div className={styles.textCol} data-reveal data-reveal-delay="150">
            <div className={styles.infoBlocks}>

              {/* Eğitim + Deneyim yan yana */}
              <div className={styles.infoTopRow}>
                <div className={styles.infoBlock}>
                  <h3 className={styles.infoBlockTitle}>Eğitim</h3>
                  {education.map((e) => (
                    <div key={e.school} className={styles.infoItem}>
                      <span className={styles.infoMain}>{e.school}</span>
                      <span className={styles.infoSub}>{e.degree}</span>
                    </div>
                  ))}
                </div>



                <div className={styles.infoBlock}>
                  <h3 className={styles.infoBlockTitle}>Deneyim</h3>
                  {experience.map((x) => (
                    <div key={x.place} className={styles.infoItem}>
                      <span className={styles.infoMain}>{x.place}</span>
                      <span className={styles.infoSub}>{x.role}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Eğitimler ve Süpervizyon — full width, 2 column */}
              <div className={styles.infoBlock}>
                <h3 className={styles.infoBlockTitle}>Eğitimler ve Süpervizyon</h3>
                <div className={styles.infoGrid}>
                  <div className={styles.infoCol}>
                    {trainings.slice(0, 4).map((t) => (
                      <div key={t.title} className={styles.infoItem}>
                        <span className={styles.infoMain}>{t.title}</span>
                        <span className={styles.infoSub}>{t.org}</span>
                      </div>
                    ))}
                  </div>
                  <div className={styles.infoCol}>
                    {trainings.slice(4).map((t) => (
                      <div key={t.title} className={styles.infoItem}>
                        <span className={styles.infoMain}>{t.title}</span>
                        <span className={styles.infoSub}>{t.org}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>


      </div>
    </section>
  )
}
