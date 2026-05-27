import { Link } from 'react-router-dom'
import ScrollReveal from './ScrollReveal.jsx'
import { cardStyle } from '../constants/styles.js'

function parseTitle(html) {
  return html.split(/<br\s*\/?>/i).flatMap((part, i, arr) => {
    const text = part.replace(/&amp;/g, '&').trim()
    return i < arr.length - 1 ? [text, <br key={i} />] : [text]
  })
}

export default function ServicePage({ data }) {
  const { crumb, hero, pillars, highlights, cta } = data

  return (
    <main
      className="flex flex-col"
      style={{ width: 'min(100%, 1600px)', margin: '0 auto', padding: '126px clamp(16px, 3vw, 36px) 0' }}
    >
      {/* Breadcrumb */}
      <ScrollReveal effect="reveal-up" className="flex items-center gap-2 text-sm" style={{ marginTop: '10px', color: '#505048' }}>
        <Link to="/#specializations" className="hover:text-green-primary transition-colors">Services</Link>
        <span>•</span>
        <span>{crumb}</span>
      </ScrollReveal>

      {/* Hero panel */}
      <section
        className="grid grid-cols-1 lg:grid-cols-2"
        id="service-top"
        style={{ marginTop: '28px', gap: '40px', alignItems: 'start' }}
      >
        {/* Copy */}
        <ScrollReveal effect="reveal-left" as="article">
          <span
            className="font-semibold"
            style={{ fontSize: '14px', color: '#6b8f3c', letterSpacing: '0.2px' }}
          >
            {hero.kicker}
          </span>

          <h1
            className="font-serif font-bold"
            style={{
              marginTop: '10px',
              fontSize: 'clamp(34px, 4vw, 72px)',
              lineHeight: 1.02,
              color: '#171717',
            }}
          >
            {parseTitle(hero.titleHtml)}
          </h1>

          <p
            style={{
              marginTop: '18px',
              fontSize: 'clamp(15px, 1.1vw, 18px)',
              lineHeight: 1.6,
              color: '#262626',
              maxWidth: '580px',
            }}
          >
            {hero.subtitle}
          </p>

          <div className="flex flex-wrap gap-3" style={{ marginTop: '24px' }}>
            <Link
              to="/#contact"
              className="btn-shine relative overflow-hidden inline-flex items-center justify-center rounded-full font-bold text-white transition-all duration-300 hover:-translate-y-1"
              style={{
                minHeight: '50px', padding: '0 28px', fontSize: '14px',
                background: '#5e7f34',
                boxShadow: '0 8px 18px rgba(55,76,28,0.18)',
              }}
            >
              {hero.ctaLabel || 'REQUEST CONSULTATION'}
            </Link>
            <a
              href="#service-pillars"
              className="inline-flex items-center justify-center rounded-full font-bold transition-all duration-300 hover:-translate-y-1"
              style={{
                minHeight: '50px', padding: '0 28px', fontSize: '14px',
                border: '1px solid rgba(106,124,65,0.5)',
                color: '#4b5d2d',
                background: 'rgba(255,255,255,0.3)',
              }}
            >
              VIEW CAPABILITIES
            </a>
          </div>

          {/* Meta chips */}
          <div className="flex flex-col gap-2.5" style={{ marginTop: '24px' }}>
            {hero.chips.map(chip => (
              <div
                key={chip.strong}
                className="flex flex-col gap-1"
                style={{
                  padding: '12px 16px',
                  borderRadius: '14px',
                  background: 'rgba(255,255,255,0.6)',
                  border: '1px solid rgba(194,169,115,0.14)',
                }}
              >
                <strong style={{ fontSize: '14px', color: '#2d2412' }}>{chip.strong}</strong>
                <span style={{ fontSize: '13px', lineHeight: 1.5, color: 'rgba(73,59,37,0.78)' }}>{chip.text}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Visual grid */}
        <ScrollReveal effect="reveal-right" as="aside">
          <div
            className="grid"
            style={{
              gridTemplateRows: 'auto auto',
              gridTemplateColumns: '1fr 1fr',
              gap: '14px',
            }}
          >
            {hero.visualCards.map((vc, i) => (
              <div
                key={i}
                className="service-visual-card flex flex-col gap-3 p-4"
                style={{
                  ...cardStyle,
                  borderRadius: '18px',
                  gridRow: i === 0 ? 'span 2' : 'auto',
                  color: '#6b8f3c',
                }}
              >
                {vc.svg}
                <strong style={{ fontSize: '14px', fontWeight: 700, color: '#2d2412' }}>{vc.strong}</strong>
                <p style={{ fontSize: '13px', lineHeight: 1.5, color: 'rgba(73,59,37,0.78)' }}>{vc.text}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* Pillars section */}
      <section id="service-pillars" style={{ marginTop: '68px' }}>
        <ScrollReveal effect="reveal-up" className="text-center" style={{ maxWidth: '760px', margin: '0 auto 36px' }}>
          <span style={{ fontSize: '13px', fontWeight: 600, color: '#6b8f3c', letterSpacing: '0.2px' }}>
            {pillars.kicker}
          </span>
          <h2
            className="font-serif font-bold"
            style={{ marginTop: '10px', fontSize: 'clamp(24px, 2.4vw, 42px)', lineHeight: 1.1, color: '#1f1f1f' }}
          >
            {pillars.title}
          </h2>
          <p style={{ marginTop: '12px', fontSize: 'clamp(14px, 1vw, 17px)', lineHeight: 1.6, color: '#505048' }}>
            {pillars.text}
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" style={{ gap: '18px' }}>
          {pillars.items.map((item, i) => (
            <ScrollReveal
              key={item.title}
              effect="reveal-pop"
              delay={i * 80}
              as="article"
              className="flex flex-col gap-3 p-5"
              style={{ ...cardStyle, borderRadius: '20px' }}
            >
              <div
                className="service-pillar-icon flex items-center justify-center"
                style={{
                  width: '52px', height: '52px', borderRadius: '15px',
                  color: '#7f9547',
                  background: 'linear-gradient(180deg, rgba(255,252,244,0.95) 0%, rgba(242,233,214,0.88) 100%)',
                  boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.85)',
                }}
                aria-hidden="true"
              >
                {item.svg}
              </div>
              <h3 style={{ fontSize: 'clamp(16px, 1.2vw, 19px)', fontWeight: 700, lineHeight: 1.2, color: '#1f1f1f' }}>
                {item.title}
              </h3>
              <p style={{ fontSize: 'clamp(13px, 0.9vw, 15px)', lineHeight: 1.55, color: '#505048' }}>
                {item.text}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Highlights */}
      <section id="service-story" style={{ marginTop: '68px' }} className="flex flex-col gap-10">
        {highlights.map((hl, i) => (
          <article
            key={i}
            className="grid grid-cols-1 lg:grid-cols-2 items-start"
            style={{
              gap: '32px',
              direction: hl.reverse ? 'rtl' : 'ltr',
            }}
          >
            {/* Placeholder visual */}
            <ScrollReveal
              effect={hl.reverse ? 'reveal-right' : 'reveal-left'}
              className="flex flex-col gap-4 p-5"
              style={{
                ...cardStyle,
                borderRadius: '20px',
                direction: 'ltr',
              }}
            >
              <div className="flex items-start justify-between gap-3">
                <span
                  style={{
                    display: 'inline-flex', alignItems: 'center',
                    minHeight: '28px', padding: '0 12px',
                    borderRadius: '999px', fontSize: '12px', fontWeight: 700,
                    background: 'rgba(200,169,71,0.12)',
                    color: '#7c6a2d',
                    letterSpacing: '0.3px',
                  }}
                >
                  {hl.placeholder.tag}
                </span>
                <div
                  className="service-placeholder-icon flex items-center justify-center shrink-0"
                  style={{
                    width: '44px', height: '44px', borderRadius: '12px',
                    color: '#7f9547',
                    background: 'linear-gradient(180deg, rgba(255,252,244,0.95) 0%, rgba(242,233,214,0.88) 100%)',
                    boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.85)',
                  }}
                  aria-hidden="true"
                >
                  {hl.placeholder.svg}
                </div>
              </div>
              <strong style={{ fontSize: 'clamp(15px, 1.2vw, 18px)', fontWeight: 700, color: '#2d2412' }}>
                {hl.placeholder.title}
              </strong>
              <p style={{ fontSize: 'clamp(13px, 0.9vw, 15px)', lineHeight: 1.55, color: 'rgba(73,59,37,0.78)' }}>
                {hl.placeholder.text}
              </p>
            </ScrollReveal>

            {/* Copy */}
            <ScrollReveal
              effect={hl.reverse ? 'reveal-left' : 'reveal-right'}
              className="flex flex-col justify-center"
              style={{ direction: 'ltr' }}
            >
              <span style={{ fontSize: '13px', fontWeight: 600, color: '#6b8f3c', letterSpacing: '0.2px' }}>
                {hl.copy.kicker}
              </span>
              <h2
                className="font-serif font-bold"
                style={{ marginTop: '10px', fontSize: 'clamp(20px, 2vw, 36px)', lineHeight: 1.1, color: '#1f1f1f' }}
              >
                {hl.copy.title}
              </h2>
              <p style={{ marginTop: '14px', fontSize: 'clamp(14px, 1vw, 17px)', lineHeight: 1.65, color: '#505048' }}>
                {hl.copy.text}
              </p>
              <ul className="flex flex-col gap-2" style={{ marginTop: '16px' }}>
                {hl.copy.list.map((item, j) => (
                  <li
                    key={j}
                    className="flex gap-3"
                    style={{ fontSize: 'clamp(13px, 0.9vw, 15px)', lineHeight: 1.55, color: '#505048' }}
                  >
                    <span style={{ color: '#8aa149', fontWeight: 700, flexShrink: 0 }}>—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </article>
        ))}
      </section>

      {/* CTA */}
      <ScrollReveal
        effect="reveal-up"
        id="service-cta"
        className="text-center flex flex-col items-center"
        style={{
          marginTop: '68px',
          padding: 'clamp(32px, 4vw, 52px) clamp(20px, 3vw, 40px)',
          borderRadius: '24px',
          background: `
            radial-gradient(circle at 15% 50%, rgba(225,200,142,0.22), transparent 28%),
            radial-gradient(circle at 85% 50%, rgba(130,156,73,0.14), transparent 24%),
            linear-gradient(135deg, rgba(255,252,245,0.96) 0%, rgba(248,242,231,0.99) 100%)
          `,
          border: '1px solid rgba(184,155,97,0.18)',
          boxShadow: '0 20px 44px rgba(120,96,52,0.08)',
        }}
      >
        <h2
          className="font-serif font-bold"
          style={{ fontSize: 'clamp(22px, 2.4vw, 40px)', lineHeight: 1.1, color: '#2d2412', maxWidth: '680px' }}
        >
          {cta.title}
        </h2>
        <p style={{ marginTop: '14px', fontSize: 'clamp(14px, 1vw, 17px)', lineHeight: 1.65, color: '#505048', maxWidth: '640px' }}>
          {cta.text}
        </p>
        <div className="flex flex-wrap gap-3 justify-center" style={{ marginTop: '24px' }}>
          <Link
            to="/#contact"
            className="btn-shine relative overflow-hidden inline-flex items-center justify-center rounded-full font-bold text-white transition-all duration-300 hover:-translate-y-1"
            style={{
              minHeight: '50px', padding: '0 28px', fontSize: '14px',
              background: '#5e7f34',
              boxShadow: '0 8px 18px rgba(55,76,28,0.18)',
            }}
          >
            REQUEST A QUOTE
          </Link>
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full font-bold transition-all duration-300 hover:-translate-y-1"
            style={{
              minHeight: '50px', padding: '0 28px', fontSize: '14px',
              border: '1px solid rgba(106,124,65,0.5)',
              color: '#4b5d2d',
              background: 'rgba(255,255,255,0.3)',
            }}
          >
            BACK TO HOME
          </Link>
        </div>
      </ScrollReveal>

      <div style={{ height: '40px' }} />
    </main>
  )
}
