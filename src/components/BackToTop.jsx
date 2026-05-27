import { useState, useEffect } from 'react'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    function toggle() {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight
      setVisible(maxScroll > 200 && window.scrollY > maxScroll * 0.5)
    }
    window.addEventListener('scroll', toggle, { passive: true })
    window.addEventListener('resize', toggle)
    toggle()
    return () => {
      window.removeEventListener('scroll', toggle)
      window.removeEventListener('resize', toggle)
    }
  }, [])

  return (
    <a
      href="#top"
      aria-label="Back to top"
      className="fixed z-[1001] rounded-full inline-flex items-center justify-center font-bold text-white transition-all duration-300"
      style={{
        right: '28px',
        bottom: '28px',
        width: '58px',
        height: '58px',
        fontSize: '28px',
        lineHeight: 1,
        background: 'linear-gradient(180deg, #6ea02e 0%, #4f7e19 100%)',
        boxShadow: '0 14px 30px rgba(82,127,28,0.32)',
        opacity: visible ? 1 : 0,
        visibility: visible ? 'visible' : 'hidden',
        pointerEvents: visible ? 'auto' : 'none',
        transform: visible ? 'translateY(0)' : 'translateY(16px)',
      }}
    >
      ↑
    </a>
  )
}
