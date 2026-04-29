import { useState } from 'react'
import styles from '../styles/components/FAQ.module.scss'

const faqs = [
  {
    q: 'Terapi süreci nasıl işler?',
    a: 'İlk seansta birlikte ne üzerinde çalışmak istediğinizi konuşuruz ve size özel bir terapi planı oluştururuz. Seanslar genellikle haftada bir kez gerçekleşir ve 50 dakika sürer. Süreç, ihtiyaçlarınıza göre birkaç aydan birkaç yıla kadar uzayabilir.',
  },
  {
    q: 'Online terapinin yüz yüzeden farkı nedir?',
    a: 'Online terapi, yüz yüze terapi kadar etkilidir. Güvenli bir video platformu üzerinden gerçekleştirilen seanslar, mekan engelini ortadan kaldırır. Tek fark, fiziksel bir ofis ortamı yerine kendi güvenli alanınızdan bağlanmanızdır.',
  },
  {
    q: 'İlk görüşme ücretsiz mi?',
    a: 'Evet, ilk 20 dakikalık tanışma görüşmesi ücretsizdir. Bu görüşmede sorularınızı sorabilir, benim çalışma tarzımı tanıyabilir ve terapi sürecine başlamak isteyip istemediğinize karar verebilirsiniz.',
  },
  {
    q: 'Seans ücretleri ne kadar?',
    a: 'Seans ücretleri hakkında bilgi almak için lütfen benimle e-posta veya telefon yoluyla iletişime geçin. Ücretler bireysel koşullar dikkate alınarak görüşülmektedir.',
  },
  {
    q: 'Randevumu iptal etmem gerekirse ne yapmalıyım?',
    a: 'Randevunuzu seans saatinden en az 24 saat önce bildirmenizi rica ederim. 24 saatten kısa süre önce yapılan iptaller için seans ücretinin bir kısmı talep edilebilir.',
  },
  {
    q: 'Bilgilerim gizli tutulacak mı?',
    a: 'Terapi seanslarındaki tüm bilgiler gizlidir ve etik kurallar çerçevesinde korunur. Yalnızca kendinize ya da başkasına ciddi bir tehlike oluşturulması durumunda yasal yükümlülükler geçerli olabilir.',
  },
]

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false)

  return (
    <div className={`${styles.item} ${open ? styles.open : ''}`}>
      <button
        className={styles.question}
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span>{q}</span>
        <div className={styles.chevron} aria-hidden="true">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
            <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </button>
      <div className={styles.answer}>
        <p>{a}</p>
      </div>
    </div>
  )
}

export default function FAQ() {
  return (
    <section id="sss" className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.header} data-reveal>
          <span className={styles.sectionTag}>S.S.S</span>
          <h2 className={styles.heading}>Sıkça Sorulan Sorular</h2>
          <p className={styles.sub}>
            Aklınıza takılan bir soru burada yoksa, bana doğrudan yazabilirsiniz.
          </p>
        </div>
        <div className={styles.list} data-reveal data-reveal-delay="150">
          {faqs.map((f) => (
            <FAQItem key={f.q} {...f} />
          ))}
        </div>
      </div>
    </section>
  )
}
