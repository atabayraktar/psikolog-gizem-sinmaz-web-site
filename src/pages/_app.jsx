import { useEffect } from 'react'
import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import '../styles/globals.scss'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export default function App({ Component, pageProps }) {
  useEffect(() => {
    let lenis
    import('lenis').then(({ default: Lenis }) => {
      const isMobile = window.matchMedia('(max-width: 768px)').matches
      lenis = new Lenis({
        lerp: 0.08,
        smoothWheel: true,
        smoothTouch: isMobile,
        touchMultiplier: isMobile ? 2.5 : 2,
      })
      function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
      }
      requestAnimationFrame(raf)
    })
    return () => lenis?.destroy()
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    )

    const observe = () => {
      document.querySelectorAll('[data-reveal]').forEach((el) => observer.observe(el))
    }

    observe()

    // re-observe on route change (SPA navigation)
    const mo = new MutationObserver(observe)
    mo.observe(document.body, { childList: true, subtree: true })

    return () => {
      observer.disconnect()
      mo.disconnect()
    }
  }, [])

  useEffect(() => {
    document.documentElement.classList.add(cormorant.variable, dmSans.variable)
  }, [])

  return <Component {...pageProps} />
}
