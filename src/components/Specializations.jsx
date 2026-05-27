import { Link } from 'react-router-dom'
import ScrollReveal from './ScrollReveal.jsx'

const cards = [
  {
    to: '/automotive-logistics',
    title: 'AUTOMOTIVE & LOGISTICS',
    text: 'Comprehensive import solutions for premium vehicles and heavy-duty transport with reliable, global delivery support.',
    linkLabel: 'View Fleet',
    icon: (
      <svg viewBox="0 0 64 64" fill="none">
        <circle cx="18" cy="18" r="10" />
        <circle cx="18" cy="18" r="4" />
        <path d="M18 8v-4M18 32v4M8 18H4M32 18h4M10.9 10.9 8 8M25.1 25.1 28 28M25.1 10.9 28 8M10.9 25.1 8 28" />
        <path d="M28 36h17l8 8v8h-4a5 5 0 0 1-10 0H25a5 5 0 0 1-10 0h-4V40h7l5-4Z" />
        <circle cx="20" cy="52" r="5" />
        <circle cx="44" cy="52" r="5" />
      </svg>
    ),
  },
  {
    to: '/solar-energy-systems',
    title: 'SOLAR ENERGY SYSTEMS',
    text: 'High-performance Tier-1 solar technologies built for efficient, scalable energy projects and long-term business sustainability.',
    linkLabel: 'Energy Solutions',
    icon: (
      <svg viewBox="0 0 64 64" fill="none">
        <rect x="10" y="18" width="28" height="20" rx="2" />
        <path d="M14 24h20M14 30h20M20 18v20M28 18v20M42 16v14M49 9v21M56 16v14" />
        <circle cx="50" cy="42" r="7" />
        <path d="M50 31v4M50 49v4M39 42h4M57 42h4M42.5 34.5l2.8 2.8M54.7 46.7l2.8 2.8M57.5 34.5l-2.8 2.8M45.3 46.7l-2.8 2.8" />
      </svg>
    ),
  },
  {
    to: '/industrial-equipment',
    title: 'INDUSTRIAL EQUIPMENT',
    text: 'Professional-grade tools and industrial machinery selected for durability, precision, and dependable performance in demanding environments.',
    linkLabel: 'Explore Tools',
    icon: (
      <svg viewBox="0 0 64 64" fill="none">
        <path d="M12 16h16v12H12zM20 28v24M16 52h8" />
        <path d="M38 18l10-6 4 4-6 10" />
        <path d="M35 29l12 12M42 47l4 5M29 37l-7 7M18 48l-6 6" />
        <circle cx="51" cy="26" r="3" />
      </svg>
    ),
  },
  {
    to: '/sustainable-investments',
    title: 'SUSTAINABLE INVESTMENTS',
    text: 'Strategic capital allocation into green-growth projects that support innovation, measurable returns, and resilient long-term assets.',
    linkLabel: 'Invest With Us',
    icon: (
      <svg viewBox="0 0 64 64" fill="none">
        <circle cx="32" cy="18" r="10" />
        <path d="M28 18h8M32 14v8" />
        <path d="M32 28v24" />
        <path d="M32 52c-8 0-14-6-14-14 0-2 0-4 1-6-9 2-15 10-15 19 0 5 4 9 9 9 10 0 17-5 19-8 2 3 9 8 19 8 5 0 9-4 9-9 0-9-6-17-15-19 1 2 1 4 1 6 0 8-6 14-14 14Z" />
      </svg>
    ),
  },
  {
    to: '/project-development',
    title: 'PROJECT DEVELOPMENT',
    text: 'Full-cycle project execution from feasibility and engineering to grid connection, procurement, and long-term operational support.',
    linkLabel: 'Start Project',
    icon: (
      <svg viewBox="0 0 64 64" fill="none">
        <rect x="10" y="12" width="28" height="34" rx="3" />
        <path d="M18 20h12M18 28h12M18 36h8" />
        <path d="M44 16v28M44 16h10M44 16l-4 4" />
        <path d="M44 44h10M44 44l-4-4" />
        <path d="M50 20v20" />
        <path d="M24 46v6M18 52h12" />
      </svg>
    ),
  },
  {
    to: '/software-development',
    title: 'SOFTWARE DEVELOPMENT & UPDATE',
    text: 'Custom digital solutions, platform modernization, and structured software updates built for reliability, scalability, and business continuity.',
    linkLabel: 'Explore Software',
    icon: (
      <svg viewBox="0 0 64 64" fill="none">
        <rect x="10" y="14" width="30" height="24" rx="3" />
        <path d="M18 24l-4 4 4 4M32 24l4 4-4 4M26 22l-2 12" />
        <path d="M44 18h10v10" />
        <path d="M54 18 42 30" />
        <path d="M44 46h10V36" />
        <path d="M54 46 42 34" />
        <rect x="14" y="44" width="20" height="6" rx="2" />
      </svg>
    ),
  },
]

export default function Specializations() {
  return (
    <section
      id="specializations"
      className="w-full"
      style={{ marginTop: '72px', paddingBottom: '36px' }}
    >
      <ScrollReveal effect="reveal-up">
        <h2
          className="font-bold"
          style={{
            fontSize: 'clamp(32px, 3vw, 62px)',
            lineHeight: 1.05,
            color: '#2a2a23',
            marginBottom: '28px',
          }}
        >
          Specializations
        </h2>
      </ScrollReveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" style={{ gap: '22px' }}>
        {cards.map((card, i) => (
          <ScrollReveal key={card.to} effect="reveal-pop" delay={i * 70} as="article" className="spec-card">
            <div
              className="spec-card-icon"
              aria-hidden="true"
              style={{
                width: '52px',
                height: '52px',
                marginBottom: '16px',
                color: '#8a8749',
              }}
            >
              {card.icon}
            </div>
            <h3
              className="font-extrabold"
              style={{ fontSize: 'clamp(18px, 1.6vw, 24px)', lineHeight: 1.1, color: '#191919', marginBottom: '12px' }}
            >
              {card.title}
            </h3>
            <p style={{ fontSize: '15px', lineHeight: 1.55, color: '#262626' }}>
              {card.text}
            </p>
            <Link
              to={card.to}
              className="inline-flex items-center gap-1.5 font-bold transition-all duration-300 hover:text-[#7c6a2d] hover:translate-x-0.5"
              style={{ marginTop: '16px', fontSize: '16px', color: '#343434' }}
            >
              {card.linkLabel} <span>→</span>
            </Link>
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}
