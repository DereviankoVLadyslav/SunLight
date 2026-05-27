import ScrollReveal from './ScrollReveal.jsx'

export default function CtaSection() {
  return (
    <ScrollReveal effect="reveal-up" as="section" className="text-center" style={{ marginTop: '50px' }}>
      <h3
        className="font-bold"
        style={{ fontSize: 'clamp(34px, 2.7vw, 52px)', lineHeight: 1.08, color: '#3e3a1e' }}
      >
        Ready to move your project forward?
      </h3>
      <a
        href="#contact"
        className="cta-btn btn-shine relative overflow-hidden inline-flex items-center justify-center rounded-full font-extrabold text-white transition-all duration-300 hover:-translate-y-1"
        style={{
          minHeight: '58px',
          padding: '0 34px',
          marginTop: '18px',
          fontSize: '16px',
          letterSpacing: '0.3px',
          background: 'linear-gradient(180deg, #e7cc64 0%, #d4ac3b 100%)',
          boxShadow: '0 10px 22px rgba(190,153,52,0.28)',
          color: '#ffffff',
        }}
      >
        REQUEST CONSULTATION
      </a>
    </ScrollReveal>
  )
}
