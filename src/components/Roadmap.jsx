import ScrollReveal from './ScrollReveal.jsx'

const steps = [
  { num: '1.', label: 'Analysis', text: 'Deep audit of contracts and selection of optimal technical solutions and intermediaries.' },
  { num: '2.', label: 'Planning', text: 'Structured sourcing roadmap, partner matching, and compliance preparation before execution.' },
  { num: '3.', label: 'Quality Control', text: 'Strict equipment quality inspection and process verification before shipment.' },
  { num: '4.', label: 'Logistics', text: 'Multi-modal door-to-door delivery managed end-to-end by our experts.' },
]

export default function Roadmap() {
  return (
    <section
      id="roadmap"
      className="grid grid-cols-1 lg:grid-cols-[260px_1fr]"
      style={{ marginTop: '42px', gap: '28px', alignItems: 'start' }}
    >
      <ScrollReveal effect="reveal-left">
        <h3
          className="font-bold font-serif"
          style={{ fontSize: 'clamp(28px, 2.5vw, 48px)', lineHeight: 1.06, color: '#202018' }}
        >
          Strategic<br />Roadmap
        </h3>
      </ScrollReveal>

      <div className="w-full">
        {/* Animated line */}
        <ScrollReveal effect="reveal-line" as="div" className="roadmap-line">
          <span className="roadmap-dot roadmap-dot-1" />
          <span className="roadmap-dot roadmap-dot-2" />
          <span className="roadmap-dot roadmap-dot-3" />
          <span className="roadmap-dot roadmap-dot-4" />
        </ScrollReveal>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" style={{ gap: '18px' }}>
          {steps.map((step, i) => (
            <ScrollReveal
              key={step.num}
              effect="reveal-up"
              delay={i * 110}
              as="article"
              className="roadmap-step"
              style={{ fontSize: '15px', lineHeight: 1.5, color: '#1e1e1e' }}
            >
              <p>
                <span className="font-extrabold">{step.num}</span>{' '}
                <strong className="font-extrabold">{step.label}:</strong>{' '}
                {step.text}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
