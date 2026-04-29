import { useState } from 'react'
import styles from '../styles/components/Contact.module.scss'

export default function Contact() {
  const [form, setForm] = useState({ name: '', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    const text = encodeURIComponent(`Merhaba, ben ${form.name}.\n\n${form.message}`)
    window.open(`https://wa.me/905001234567?text=${text}`, '_blank', 'noopener,noreferrer')
  }

  return (
    <section id="iletisim" className={styles.section}>
      <div className={`container ${styles.inner}`}>

        {/* Header */}
        <div className={styles.header} data-reveal>
          <span className={styles.sectionTag}>İletişim / Ulaşım</span>
          <h2 className={styles.heading}>Bir adım atmaya hazır mısınız?</h2>
          <p className={styles.body}>
            Randevu almak veya soru sormak için WhatsApp üzerinden yazabilirsiniz.
          </p>
        </div>

        {/* Top: map + form */}
        <div className={styles.topRow}>
          {/* Left: Google Maps */}
          <div className={styles.mapWrap} data-reveal>
            <iframe
              title="Konum"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3050.7980412120323!2d26.416802099999998!3d40.124504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b1a9c66c31d9af%3A0x7f3c38dcad3ea13d!2zw5Z6ZWwgw5Z6Z8O8biBBaWxlIERhbsSxxZ9tYSBNZXJrZXpp!5e0!3m2!1str!2str!4v1777398092360!5m2!1str!2str"
              className={styles.map}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Right: form */}
          <div className={styles.formWrap} data-reveal data-reveal-delay="150">
            <form onSubmit={handleSubmit} className={styles.form} noValidate>
              <div className={styles.field}>
                <label htmlFor="name" className={styles.label}>Ad Soyad <span aria-hidden="true">*</span></label>
                <input
                  id="name"
                  type="text"
                  required
                  autoComplete="name"
                  className={styles.input}
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Adınız Soyadınız"
                />
              </div>
              <div className={styles.field}>
                <label htmlFor="message" className={styles.label}>Mesajınız <span aria-hidden="true">*</span></label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  className={styles.textarea}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Merhaba, terapi süreci hakkında bilgi almak istiyorum..."
                />
              </div>
              <button type="submit" className={styles.submit}>
                <svg width="18" height="18" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
                  <path d="M16 2C8.28 2 2 8.28 2 16c0 2.46.66 4.77 1.8 6.77L2 30l7.45-1.75A13.94 13.94 0 0016 30c7.72 0 14-6.28 14-14S23.72 2 16 2zm0 25.5a11.44 11.44 0 01-5.83-1.6l-.42-.25-4.32 1.02 1.04-4.2-.27-.44A11.44 11.44 0 014.5 16C4.5 9.6 9.6 4.5 16 4.5S27.5 9.6 27.5 16 22.4 27.5 16 27.5zm6.27-8.57c-.34-.17-2.02-.99-2.33-1.1-.31-.12-.54-.17-.77.17-.23.34-.88 1.1-1.08 1.33-.2.23-.4.25-.74.08-.34-.17-1.44-.53-2.74-1.69-1.01-.9-1.7-2.02-1.89-2.36-.2-.34-.02-.52.15-.69.15-.15.34-.4.51-.6.17-.2.23-.34.34-.57.11-.23.06-.43-.03-.6-.08-.17-.77-1.85-1.05-2.53-.28-.67-.56-.58-.77-.59h-.66c-.23 0-.6.08-.91.4-.31.31-1.2 1.17-1.2 2.85s1.23 3.31 1.4 3.54c.17.23 2.42 3.7 5.87 5.19.82.35 1.46.56 1.96.72.82.26 1.57.22 2.16.13.66-.1 2.02-.82 2.31-1.62.28-.8.28-1.48.2-1.62-.09-.14-.31-.23-.65-.4z"/>
                </svg>
                WhatsApp'la Mesaj Gönder
              </button>
            </form>
          </div>
        </div>

        {/* Bottom: phone + email + socials */}
        <div className={styles.bottomRow} data-reveal>
          <div className={styles.bottomContacts}>
            <a href="tel:+905001234567" className={styles.bottomLink}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.08 1.18 2 2 0 012.06 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              +90 500 123 45 67
            </a>
            <a href="mailto:gizem@example.com" className={styles.bottomLink}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" strokeLinecap="round" strokeLinejoin="round"/>
                <polyline points="22,6 12,13 2,6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              gizem@example.com
            </a>
          </div>
          <div className={styles.bottomSocials}>
            <a href="https://instagram.com/" className={styles.socialIcon} aria-label="Instagram" target="_blank" rel="noopener noreferrer">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </a>
            <a href="https://facebook.com/" className={styles.socialIcon} aria-label="Facebook" target="_blank" rel="noopener noreferrer">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
              </svg>
            </a>
            <a href="https://linkedin.com/" className={styles.socialIcon} aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
            <a href="https://wa.me/905001234567" className={styles.socialIcon} aria-label="WhatsApp" target="_blank" rel="noopener noreferrer">
              <svg width="17" height="17" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
                <path d="M16 2C8.28 2 2 8.28 2 16c0 2.46.66 4.77 1.8 6.77L2 30l7.45-1.75A13.94 13.94 0 0016 30c7.72 0 14-6.28 14-14S23.72 2 16 2zm0 25.5a11.44 11.44 0 01-5.83-1.6l-.42-.25-4.32 1.02 1.04-4.2-.27-.44A11.44 11.44 0 014.5 16C4.5 9.6 9.6 4.5 16 4.5S27.5 9.6 27.5 16 22.4 27.5 16 27.5zm6.27-8.57c-.34-.17-2.02-.99-2.33-1.1-.31-.12-.54-.17-.77.17-.23.34-.88 1.1-1.08 1.33-.2.23-.4.25-.74.08-.34-.17-1.44-.53-2.74-1.69-1.01-.9-1.7-2.02-1.89-2.36-.2-.34-.02-.52.15-.69.15-.15.34-.4.51-.6.17-.2.23-.34.34-.57.11-.23.06-.43-.03-.6-.08-.17-.77-1.85-1.05-2.53-.28-.67-.56-.58-.77-.59h-.66c-.23 0-.6.08-.91.4-.31.31-1.2 1.17-1.2 2.85s1.23 3.31 1.4 3.54c.17.23 2.42 3.7 5.87 5.19.82.35 1.46.56 1.96.72.82.26 1.57.22 2.16.13.66-.1 2.02-.82 2.31-1.62.28-.8.28-1.48.2-1.62-.09-.14-.31-.23-.65-.4z"/>
              </svg>
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
