import ScrollReveal from './ScrollReveal.jsx'

export default function Footer() {
  return (
    <footer
      className="relative w-screen overflow-hidden"
      style={{
        marginLeft: 'calc(50% - 50vw)',
        marginRight: 'calc(50% - 50vw)',
        marginTop: '72px',
        background: `
          radial-gradient(circle at 18% 0%, rgba(233,210,132,0.12), transparent 22%),
          radial-gradient(circle at 85% 12%, rgba(110,160,46,0.08), transparent 18%),
          linear-gradient(180deg, rgba(9,9,10,0.98) 0%, rgba(11,11,12,1) 100%)
        `,
      }}
    >
      {/* Top gold shimmer */}
      <div
        className="absolute pointer-events-none"
        style={{
          left: '-5%', right: '-5%', top: '-30px', height: '120px',
          background: 'linear-gradient(90deg, transparent 0%, rgba(214,182,86,0.16) 25%, rgba(244,226,152,0.18) 50%, rgba(214,182,86,0.16) 75%, transparent 100%)',
          opacity: 0.55,
        }}
      />

      <ScrollReveal effect="reveal-up">
        <div
          className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.35fr_0.7fr_0.9fr]"
          style={{
            maxWidth: '1600px',
            padding: 'clamp(36px, 4vw, 54px) clamp(20px, 3vw, 44px) 26px',
            gap: '36px',
          }}
        >
          {/* Brand column */}
          <div className="flex flex-col justify-between gap-6 md:col-span-2 lg:col-span-1">
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <span style={{ fontSize: '26px', color: '#6c8a37' }}>✺</span>
                <span className="font-bold" style={{ fontSize: '21px', color: '#f4f0df' }}>
                  Sun Light Industries Ltd.
                </span>
              </div>
              <p style={{ maxWidth: '520px', fontSize: '15px', lineHeight: 1.65, color: 'rgba(244,240,223,0.72)' }}>
                Premium trade, logistics, industrial equipment and solar solutions with a modern global approach.
              </p>
            </div>
            <div
              className="flex flex-wrap gap-x-7 gap-y-2.5"
              style={{
                paddingTop: '14px',
                borderTop: '1px solid rgba(242,226,160,0.1)',
                fontSize: '14px',
                lineHeight: 1.5,
                color: 'rgba(244,240,223,0.56)',
              }}
            >
              <p>© 2019 – 2026 All rights reserved.</p>
            </div>
          </div>

          {/* Navigation column */}
          <div>
            <h4
              className="font-serif font-bold mb-4"
              style={{ fontSize: '22px', color: '#f2e2a0', lineHeight: 1.1 }}
            >
              Navigation
            </h4>
            <nav className="flex flex-col gap-3">
              {[
                { label: 'About us',      href: '/#about' },
                { label: 'Our services',  href: '/#specializations' },
                { label: 'Contacts',      href: '/#contact' },
              ].map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="footer-link transition-all duration-300"
                  style={{ fontSize: '16px', lineHeight: 1.45, color: 'rgba(244,240,223,0.84)' }}
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact column */}
          <div>
            <h4
              className="font-serif font-bold mb-4"
              style={{ fontSize: '22px', color: '#f2e2a0', lineHeight: 1.1 }}
            >
              Contact
            </h4>
            <a
              href="mailto:office@SunLightIndustriesLtd.com"
              className="footer-link transition-all duration-300 break-all"
              style={{ fontSize: '15px', lineHeight: 1.5, color: 'rgba(244,240,223,0.84)' }}
            >
              office@SunLightIndustriesLtd.com
            </a>
          </div>
        </div>
      </ScrollReveal>

      {/* Bottom gold line */}
      <div
        className="absolute bottom-0 left-0 right-0"
        style={{
          height: '1px',
          background: 'linear-gradient(90deg, transparent 0%, rgba(242,226,160,0.14) 18%, rgba(242,226,160,0.32) 50%, rgba(242,226,160,0.14) 82%, transparent 100%)',
        }}
      />
    </footer>
  )
}
