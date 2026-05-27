import ScrollReveal from './ScrollReveal.jsx'
import { cardStyle } from '../constants/styles.js'

const features = [
  {
    title: 'Core Sales Areas',
    text: 'Cars and trucks, agricultural machinery and equipment, automotive parts, and hand power tools.',
    icon: (
      <>
        <path d="M7 23h18" />
        <path d="M9 23V12l7-4 7 4v11" />
        <path d="M13 23v-5h6v5" />
      </>
    ),
  },
  {
    title: 'Energy Portfolio',
    text: 'Solar panels, battery storage systems, hybrid inverters, and generators for modern energy projects.',
    icon: (
      <>
        <path d="M5 20h14" />
        <path d="M8 20l3-8h8l3 8" />
        <path d="M22 10v12" />
        <path d="M25 14v8" />
        <path d="M28 12v10" />
      </>
    ),
  },
  {
    title: 'Trusted Suppliers',
    text: 'Partnerships include John Deere, New Holland, Volvo, Scania, VAG Group, Renault, and Toyota.',
    icon: (
      <>
        <path d="M16 5l9 4v6c0 6-4 10-9 12-5-2-9-6-9-12V9l9-4Z" />
        <path d="m12.5 16 2.5 2.5 4.5-5" />
      </>
    ),
  },
  {
    title: 'International Growth',
    text: 'Cooperation with Hengyang Global Power Technology Co., Ltd. and Ningbo Deye ESS Technology Co., Ltd., with China expansion planned.',
    icon: (
      <>
        <path d="M16 6v20" />
        <path d="M6 16h20" />
        <path d="M9 9c2 2 3.5 5 3.5 7S11 21 9 23" />
        <path d="M23 9c-2 2-3.5 5-3.5 7s1.5 5 3.5 7" />
      </>
    ),
  },
]

export default function AboutShowcase() {
  return (
    <section
      id="about"
      className="grid grid-cols-1 lg:grid-cols-[minmax(280px,0.92fr)_minmax(380px,1.28fr)] relative overflow-hidden"
      style={{
        marginTop: '46px',
        gap: '28px',
        alignItems: 'stretch',
        padding: 'clamp(20px, 3vw, 34px)',
        borderRadius: '28px',
        background: `
          radial-gradient(circle at 10% 12%, rgba(225,200,142,0.30), transparent 26%),
          radial-gradient(circle at 88% 18%, rgba(160,176,116,0.16), transparent 24%),
          radial-gradient(circle at 52% 100%, rgba(214,184,120,0.16), transparent 34%),
          linear-gradient(135deg, rgba(255,252,245,0.96) 0%, rgba(250,245,236,0.98) 42%, rgba(243,236,223,0.99) 100%)
        `,
        border: '1px solid rgba(184,155,97,0.18)',
        boxShadow: '0 24px 50px rgba(120,96,52,0.08), inset 0 1px 0 rgba(255,255,255,0.65)',
      }}
    >
      {/* Intro */}
      <ScrollReveal effect="reveal-left" className="flex flex-col justify-center" style={{ padding: '4px 4px 4px 2px' }}>
        <span
          className="inline-flex items-center justify-center font-extrabold uppercase tracking-widest w-fit"
          style={{
            minHeight: '44px',
            padding: '0 20px',
            borderRadius: '999px',
            border: '1px solid rgba(178,151,92,0.28)',
            background: 'linear-gradient(180deg, rgba(255,251,242,0.90) 0%, rgba(247,238,220,0.86) 100%)',
            color: '#927034',
            fontSize: '12px',
            letterSpacing: '1.9px',
          }}
        >
          ABOUT SUN LIGHT
        </span>

        <h3
          className="font-serif font-bold"
          style={{
            marginTop: '20px',
            fontSize: 'clamp(28px, 3vw, 60px)',
            lineHeight: 1.04,
            color: '#4d3c1f',
            maxWidth: '540px',
          }}
        >
          Reliability Through Experience and Global Partnerships
        </h3>

        <p style={{ marginTop: '18px', fontSize: 'clamp(15px, 1.1vw, 19px)', lineHeight: 1.6, color: 'rgba(67,54,33,0.86)', maxWidth: '620px' }}>
          Sun Light LTD was founded in 2013 and began its active international trade operations in 2018.
          Since then, the company has been steadily strengthening its position in the domestic market while
          expanding toward the EU, China, and Asia.
        </p>
        <p style={{ marginTop: '14px', fontSize: 'clamp(15px, 1.1vw, 19px)', lineHeight: 1.6, color: 'rgba(67,54,33,0.86)', maxWidth: '620px' }}>
          We focus on practical business supply, transparent cooperation, and long-term partnerships across
          transport, industrial equipment, and energy-related products.
        </p>
      </ScrollReveal>

      {/* Feature cards */}
      <div className="grid" style={{ gap: '14px' }}>
        {features.map((f, i) => (
          <ScrollReveal
            key={f.title}
            effect="reveal-pop"
            delay={i * 70}
            as="article"
            className="about-feature-card"
            style={{
              display: 'grid',
              gridTemplateColumns: '62px 1fr',
              gap: '16px',
              alignItems: 'start',
              padding: 'clamp(16px, 2vw, 24px)',
              borderRadius: '20px',
              ...cardStyle,
              borderLeft: 'none',
            }}
          >
            {/* Left accent bar */}
            <div
              aria-hidden="true"
              style={{
                position: 'absolute',
                left: 0,
                top: 0,
                bottom: 0,
                width: '5px',
                borderRadius: '999px',
                background: 'linear-gradient(180deg, #879f55 0%, #d6b265 55%, #eedcb2 100%)',
              }}
            />
            <div
              className="flex items-center justify-center shrink-0"
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '14px',
                color: '#7f9547',
                background: 'linear-gradient(180deg, rgba(255,252,244,0.95) 0%, rgba(242,233,214,0.88) 100%)',
                boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.85), 0 8px 18px rgba(143,120,74,0.08)',
              }}
            >
              <svg
                viewBox="0 0 32 32"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ width: '22px', height: '22px' }}
                aria-hidden="true"
              >
                {f.icon}
              </svg>
            </div>
            <div>
              <h4 style={{ fontSize: 'clamp(18px, 1.8vw, 30px)', lineHeight: 1.15, fontWeight: 700, color: '#433319' }}>{f.title}</h4>
              <p style={{ marginTop: '8px', fontSize: 'clamp(13px, 1vw, 17px)', lineHeight: 1.55, color: 'rgba(73,59,37,0.78)' }}>{f.text}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}
