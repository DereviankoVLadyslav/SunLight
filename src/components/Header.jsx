import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navItems = [
  { label: 'HOME',     href: '/' },
  { label: 'PRODUCTS', href: '/#specializations' },
  { label: 'QUALITY',  href: '/#roadmap' },
  { label: 'ABOUT',    href: '/#about' },
  { label: 'CONTACT',  href: '/#contact' },
]

export default function Header() {
  const { pathname } = useLocation()
  const isHome = pathname === '/'
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header
      className="fixed z-50 left-1/2 -translate-x-1/2"
      style={{
        top: '16px',
        width: 'min(calc(100% - 32px), 1600px)',
        borderRadius: '22px',
        background: 'rgba(255,255,255,0.72)',
        border: '1px solid rgba(170,153,88,0.16)',
        boxShadow: '0 12px 34px rgba(0,0,0,0.08), 0 2px 10px rgba(201,169,71,0.08)',
      }}
    >
      {/* Main row */}
      <div
        className="flex items-center justify-between"
        style={{ minHeight: '86px', padding: '14px 20px 14px 24px' }}
      >
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 shrink-0" onClick={() => setMobileOpen(false)}>
          <span style={{ fontSize: '24px', lineHeight: 1, color: '#6c8a37' }}>✺</span>
          <span
            className="font-bold"
            style={{ fontSize: 'clamp(14px, 2vw, 21px)', color: '#4e6b2d', whiteSpace: 'nowrap' }}
          >
            Sun Light Industries Ltd.
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center justify-center flex-wrap gap-x-8 gap-y-2">
          {navItems.map(({ label, href }) => {
            const active =
              href === '/' ? isHome : isHome && typeof window !== 'undefined' && window.location.hash === href.slice(1)
            return (
              <a
                key={label}
                href={href}
                className={`nav-link text-sm font-extrabold tracking-wide uppercase transition-colors duration-300 hover:text-[#7c6a2d] ${active ? 'nav-link-active text-[#c8a947]' : 'text-[#2d2d2d]'}`}
                style={{ fontSize: '15px' }}
              >
                {label}
              </a>
            )
          })}
        </nav>

        {/* Desktop CTA + hamburger */}
        <div className="flex items-center gap-3">
          <a
            href="/#contact"
            className="hidden md:inline-flex quote-btn btn-shine header-quote-btn items-center justify-center rounded-full font-bold text-white transition-all duration-300 hover:-translate-y-0.5"
            style={{
              minHeight: '46px',
              padding: '0 22px',
              fontSize: '12px',
              letterSpacing: '0.3px',
              whiteSpace: 'nowrap',
            }}
          >
            REQUEST A QUOTE
          </a>

          {/* Hamburger */}
          <button
            className="md:hidden flex flex-col justify-center items-center gap-[5px] rounded-xl p-2.5"
            style={{ width: '44px', height: '44px', background: 'rgba(255,255,255,0.5)' }}
            onClick={() => setMobileOpen(o => !o)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            <span
              className="block rounded-full transition-all duration-300 origin-center"
              style={{
                width: '20px', height: '2px', background: '#4e6b2d',
                transform: mobileOpen ? 'translateY(7px) rotate(45deg)' : 'none',
              }}
            />
            <span
              className="block rounded-full transition-all duration-300"
              style={{
                width: '20px', height: '2px', background: '#4e6b2d',
                opacity: mobileOpen ? 0 : 1,
                transform: mobileOpen ? 'scaleX(0)' : 'scaleX(1)',
              }}
            />
            <span
              className="block rounded-full transition-all duration-300 origin-center"
              style={{
                width: '20px', height: '2px', background: '#4e6b2d',
                transform: mobileOpen ? 'translateY(-7px) rotate(-45deg)' : 'none',
              }}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="md:hidden flex flex-col gap-4 pb-5 px-6"
          style={{ borderTop: '1px solid rgba(170,153,88,0.16)' }}
        >
          <nav className="flex flex-col gap-1 pt-3">
            {navItems.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="font-extrabold tracking-wide uppercase transition-colors duration-200 hover:text-[#7c6a2d] text-[#2d2d2d] py-2.5 border-b"
                style={{ fontSize: '14px', borderColor: 'rgba(170,153,88,0.1)' }}
                onClick={() => setMobileOpen(false)}
              >
                {label}
              </a>
            ))}
          </nav>
          <a
            href="/#contact"
            className="inline-flex items-center justify-center rounded-full font-bold text-white"
            style={{
              minHeight: '48px', padding: '0 24px',
              background: '#5e7f34', fontSize: '13px',
              letterSpacing: '0.3px',
              boxShadow: '0 8px 16px rgba(55,76,28,0.18)',
            }}
            onClick={() => setMobileOpen(false)}
          >
            REQUEST A QUOTE
          </a>
        </div>
      )}
    </header>
  )
}
