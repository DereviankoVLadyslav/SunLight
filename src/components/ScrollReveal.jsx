import { useEffect, useRef } from 'react'

export default function ScrollReveal({
  effect = 'reveal-up',
  delay = 0,
  as: Tag = 'div',
  className = '',
  children,
  ...props
}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    el.style.setProperty('--reveal-delay', `${delay}ms`)

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.classList.add('is-visible')
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible')
          observer.unobserve(el)
        }
      },
      { threshold: 0.16, rootMargin: '0px 0px -8% 0px' }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [delay])

  return (
    <Tag ref={ref} className={`scroll-reveal ${effect} ${className}`} {...props}>
      {children}
    </Tag>
  )
}
