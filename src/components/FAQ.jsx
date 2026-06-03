import { useState } from 'react'
import styles from '../styles/components/FAQ.module.scss'

const faqs = [
  {
    q: 'Terapi süreci ne kadar sürer?',
    a: 'Terapi süreci kişinin ihtiyaçlarına, yaşam koşullarına ve çalışılan konulara göre değişiklik gösterebilir. Bazı kişiler belirli bir konu üzerine kısa süreli çalışmayı tercih ederken, bazı süreçler daha uzun soluklu ilerleyebilir.',
  },
  {
    q: 'Seanslar ne sıklıkla yapılır?',
    a: 'Görüşmeler genellikle haftada bir kez olacak şekilde planlanmaktadır. Sürecin ihtiyaçlarına göre bu sıklık birlikte yeniden değerlendirilebilir.',
  },
  {
    q: 'Online terapi yüz yüze terapi kadar etkili midir?',
    a: 'Uygun koşullar sağlandığında online terapi de yüz yüze terapi kadar etkili bir çalışma alanı sunabilmektedir. Seans sırasında mahremiyetin korunabildiği ve kişinin kendisini rahat hissedebildiği bir ortam oluşturulması önemlidir.',
  },
  {
    q: 'İlk görüşmede ne konuşulur?',
    a: 'İlk görüşmede kişinin yaşadığı zorluklar, terapiye başvurma nedeni ve süreçten beklentileri birlikte değerlendirilir. Aynı zamanda terapi sürecinin nasıl ilerlediğine dair genel bir çerçeve oluşturulur.',
  },
  {
    q: 'Seans süresi ne kadardır?',
    a: 'Seanslar yaklaşık 50 dakika sürmektedir.',
  },
  {
    q: 'Görüşmeler gizli midir?',
    a: 'Psikoterapi süreci etik ilkeler çerçevesinde gizlilik esasına dayalı olarak yürütülmektedir. Yasal yükümlülük gerektiren istisnai durumlar dışında görüşme içerikleri üçüncü kişilerle paylaşılmaz.',
  },
  {
    q: 'Terapiye başlamak için "çok kötü" durumda olmak gerekir mi?',
    a: 'Hayır. Terapi yalnızca kriz anlarında başvurulan bir süreç değildir. Kişi kendisini tekrar eden ilişkisel örüntüler, duygusal zorlanmalar ya da yaşamındaki belirli süreçler üzerine düşünmek istediğinde de terapi desteğine başvurabilir.',
  },
  {
    q: 'Seans ücretleri hakkında nasıl bilgi alabilirim?',
    a: 'Güncel seans ücretleri ve uygunluk bilgisi için iletişim bölümünden ulaşabilirsiniz.',
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
