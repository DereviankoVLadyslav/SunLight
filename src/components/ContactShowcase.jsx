import { useState } from 'react'
import { init, send } from '@emailjs/browser'
import ScrollReveal from './ScrollReveal.jsx'
import { cardStyle, inputStyle } from '../constants/styles.js'
import { COMPANY } from '../constants/company.js'

const EMAILJS_CONFIG = {
  publicKey: '',
  serviceId: '',
  templateId: '',
  autoReplyTemplateId: '',
}

const hasConfig = ['publicKey', 'serviceId', 'templateId'].every(k => {
  const v = EMAILJS_CONFIG[k]
  return typeof v === 'string' && v.trim() !== '' && !v.startsWith('YOUR_')
})

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validate(form) {
  const errors = {}
  if (!form.name.trim()) errors.name = 'Name is required'
  if (!form.email.trim()) errors.email = 'Email is required'
  else if (!EMAIL_RE.test(form.email)) errors.email = 'Enter a valid email address'
  if (!form.message.trim()) errors.message = 'Message is required'
  return errors
}

const contactItems = [
  {
    title: 'Address',
    content: COMPANY.address,
    href: null,
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 27s8-6.8 8-14a8 8 0 1 0-16 0c0 7.2 8 14 8 14Z"/><circle cx="16" cy="13" r="3.2"/>
      </svg>
    ),
  },
  {
    title: 'Phone',
    content: COMPANY.phone,
    href: `tel:${COMPANY.phone}`,
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 6h4l2 5-2.5 2.5a19.2 19.2 0 0 0 6 6L21 17l5 2v4a2 2 0 0 1-2 2C14.6 25 7 17.4 7 8a2 2 0 0 1 2-2Z"/>
      </svg>
    ),
  },
  {
    title: 'Email',
    content: COMPANY.email,
    href: `mailto:${COMPANY.email}`,
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="8" width="22" height="16" rx="2"/><path d="m7 10 9 7 9-7"/>
      </svg>
    ),
  },
]

export default function ContactShowcase() {
  const [form, setForm] = useState({ name: '', email: '', company: '', phone: '', message: '' })
  const [errors, setErrors] = useState({})
  const [consent, setConsent] = useState(false)
  const [status, setStatus] = useState({ msg: '', type: '' })
  const [loading, setLoading] = useState(false)
  const charCount = form.message.length

  function handleChange(e) {
    const { name, value } = e.target
    setForm(p => ({ ...p, [name]: value }))
    if (errors[name]) setErrors(p => ({ ...p, [name]: undefined }))
  }

  async function handleSubmit(e) {
    e.preventDefault()

    const errs = validate(form)
    if (Object.keys(errs).length) {
      setErrors(errs)
      return
    }
    setErrors({})

    if (!consent) {
      setStatus({ msg: 'Please accept the data processing consent to continue.', type: 'error' })
      return
    }

    if (!hasConfig) {
      setStatus({ msg: 'EmailJS keys in src/components/ContactShowcase.jsx still need to be configured.', type: 'error' })
      return
    }

    setLoading(true)
    setStatus({ msg: 'Sending your message...', type: 'pending' })

    const params = {
      name: form.name, from_name: form.name,
      email: form.email, reply_to: form.email,
      company: form.company, phone: form.phone,
      message: form.message,
      subject: `New website inquiry from ${form.name || 'Website visitor'}`,
      to_email: COMPANY.email,
      submitted_at: new Date().toLocaleString(),
      page_url: window.location.href,
    }

    try {
      init({ publicKey: EMAILJS_CONFIG.publicKey })
      await send(EMAILJS_CONFIG.serviceId, EMAILJS_CONFIG.templateId, params)

      if (EMAILJS_CONFIG.autoReplyTemplateId?.trim()) {
        await send(EMAILJS_CONFIG.serviceId, EMAILJS_CONFIG.autoReplyTemplateId, {
          to_name: form.name, to_email: form.email,
          reply_to: COMPANY.email,
          company: form.company, phone: form.phone,
          message_preview: form.message,
          website_name: COMPANY.name,
        })
      }

      setForm({ name: '', email: '', company: '', phone: '', message: '' })
      setConsent(false)
      setStatus({ msg: 'Thank you. Your message has been sent successfully.', type: 'success' })
    } catch {
      setStatus({ msg: `Sorry, something went wrong. Please email us directly at ${COMPANY.email}.`, type: 'error' })
    } finally {
      setLoading(false)
    }
  }

  const fieldStyle = (id) => ({
    ...inputStyle,
    minHeight: '52px',
    ...(errors[id] && { borderColor: 'rgba(193,80,71,0.5)' }),
  })

  return (
    <section
      id="contact"
      className="grid grid-cols-1 lg:grid-cols-[minmax(280px,0.96fr)_minmax(380px,1.04fr)] relative overflow-hidden"
      style={{
        marginTop: '46px',
        gap: '28px',
        padding: 'clamp(20px, 3vw, 34px)',
        borderRadius: '28px',
        background: `
          radial-gradient(circle at 12% 14%, rgba(225,200,142,0.24), transparent 26%),
          radial-gradient(circle at 88% 18%, rgba(160,176,116,0.12), transparent 24%),
          radial-gradient(circle at 52% 100%, rgba(214,184,120,0.12), transparent 34%),
          linear-gradient(135deg, rgba(255,252,245,0.96) 0%, rgba(249,244,234,0.98) 42%, rgba(242,235,221,0.99) 100%)
        `,
        border: '1px solid rgba(184,155,97,0.16)',
        boxShadow: '0 24px 50px rgba(120,96,52,0.08), inset 0 1px 0 rgba(255,255,255,0.72)',
      }}
    >
      {/* Intro */}
      <ScrollReveal effect="reveal-left" className="flex flex-col" style={{ padding: '4px 4px 4px 2px', zIndex: 1 }}>
        <span
          className="inline-flex items-center justify-center font-extrabold uppercase w-fit"
          style={{
            minHeight: '44px', padding: '0 20px', borderRadius: '999px',
            border: '1px solid rgba(178,151,92,0.24)',
            background: 'linear-gradient(180deg, rgba(255,251,242,0.92) 0%, rgba(247,238,220,0.88) 100%)',
            color: '#927034', fontSize: '12px', letterSpacing: '1.9px',
          }}
        >
          GET IN TOUCH
        </span>

        <h3
          className="font-serif font-bold"
          style={{ marginTop: '20px', maxWidth: '620px', fontSize: 'clamp(26px, 2.8vw, 58px)', lineHeight: 1.04, color: '#4d3c1f' }}
        >
          Let's discuss your next shipment, equipment request, or energy project
        </h3>

        <p style={{ marginTop: '16px', maxWidth: '610px', fontSize: 'clamp(14px, 1.1vw, 18px)', lineHeight: 1.6, color: 'rgba(67,54,33,0.86)' }}>
          Reach out to {COMPANY.name} for trade inquiries, sourcing, logistics,
          industrial equipment, and solar energy solutions.
        </p>

        <div className="grid mt-5" style={{ gap: '14px' }}>
          {contactItems.map(({ title, content, href, icon }, i) => (
            <ScrollReveal
              key={title}
              effect="reveal-left"
              delay={i * 80}
              as="article"
              style={{
                display: 'grid', gridTemplateColumns: '56px 1fr', gap: '14px', alignItems: 'start',
                padding: 'clamp(14px, 1.6vw, 24px)',
                borderRadius: '22px',
                ...cardStyle,
                boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.78), 0 18px 34px rgba(132,104,57,0.10)',
                transition: 'transform 0.48s, box-shadow 0.48s',
                cursor: 'default',
              }}
            >
              <div
                className="flex items-center justify-center shrink-0"
                style={{
                  width: '42px', height: '42px', borderRadius: '12px', color: '#7f9547',
                  background: 'linear-gradient(180deg, rgba(255,254,250,0.94) 0%, rgba(244,235,217,0.9) 100%)',
                  boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.88), 0 8px 18px rgba(143,120,74,0.10)',
                }}
              >
                <span style={{ width: '20px', height: '20px' }}>{icon}</span>
              </div>
              <div>
                <h4 style={{ fontSize: 'clamp(16px, 1.5vw, 28px)', lineHeight: 1.14, fontWeight: 700, color: '#433319' }}>{title}</h4>
                {href ? (
                  <a href={href} style={{ marginTop: '6px', display: 'block', fontSize: 'clamp(13px, 1vw, 17px)', lineHeight: 1.6, color: 'rgba(73,59,37,0.82)' }}>
                    {content}
                  </a>
                ) : (
                  <p style={{ marginTop: '6px', fontSize: 'clamp(13px, 1vw, 17px)', lineHeight: 1.6, color: 'rgba(73,59,37,0.82)', whiteSpace: 'pre-line' }}>
                    {content}
                  </p>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </ScrollReveal>

      {/* Form */}
      <ScrollReveal
        effect="reveal-right"
        style={{
          padding: 'clamp(16px, 2.5vw, 34px)',
          borderRadius: '22px',
          zIndex: 1,
          ...cardStyle,
          boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.78), 0 18px 34px rgba(132,104,57,0.10)',
        }}
      >
        <form onSubmit={handleSubmit} className="grid" style={{ gap: '16px' }} noValidate>
          {/* Row 1 */}
          <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: '16px' }}>
            {[
              { id: 'name', label: 'Full Name', placeholder: 'Your full name', type: 'text' },
              { id: 'email', label: 'Email', placeholder: 'Your email address', type: 'email' },
            ].map(f => (
              <div key={f.id} className="flex flex-col">
                <label htmlFor={f.id} style={{ marginBottom: '8px', fontSize: '14px', fontWeight: 700, color: '#57452a' }}>
                  {f.label} <span style={{ color: '#c6a34a' }}>*</span>
                </label>
                <input
                  id={f.id}
                  name={f.id}
                  type={f.type}
                  placeholder={f.placeholder}
                  value={form[f.id]}
                  onChange={handleChange}
                  style={fieldStyle(f.id)}
                />
                {errors[f.id] && (
                  <span style={{ marginTop: '5px', fontSize: '12px', color: '#c15047' }}>{errors[f.id]}</span>
                )}
              </div>
            ))}
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: '16px' }}>
            {[
              { id: 'company', label: 'Company', placeholder: 'Company name', type: 'text' },
              { id: 'phone', label: 'Phone', placeholder: 'Your phone number', type: 'tel' },
            ].map(f => (
              <div key={f.id} className="flex flex-col">
                <label htmlFor={f.id} style={{ marginBottom: '8px', fontSize: '14px', fontWeight: 700, color: '#57452a' }}>
                  {f.label}
                </label>
                <input
                  id={f.id}
                  name={f.id}
                  type={f.type}
                  placeholder={f.placeholder}
                  value={form[f.id]}
                  onChange={handleChange}
                  style={{ ...inputStyle, minHeight: '52px' }}
                />
              </div>
            ))}
          </div>

          {/* Message */}
          <div className="flex flex-col">
            <label htmlFor="message" style={{ marginBottom: '8px', fontSize: '14px', fontWeight: 700, color: '#57452a' }}>
              Message <span style={{ color: '#c6a34a' }}>*</span>
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Tell us about your request"
              maxLength={500}
              value={form.message}
              onChange={handleChange}
              style={{ ...inputStyle, minHeight: '160px', resize: 'vertical', ...(errors.message && { borderColor: 'rgba(193,80,71,0.5)' }) }}
            />
            <div className="flex items-center justify-between mt-1.5">
              {errors.message
                ? <span style={{ fontSize: '12px', color: '#c15047' }}>{errors.message}</span>
                : <span />
              }
              <span style={{ fontSize: '12px', color: 'rgba(92,73,42,0.58)' }}>{charCount}/500</span>
            </div>
          </div>

          {/* Consent */}
          <label className="flex items-start gap-3 cursor-pointer" style={{ fontSize: '13px', lineHeight: 1.5, color: 'rgba(84,66,37,0.78)' }}>
            <input
              type="checkbox"
              checked={consent}
              onChange={e => setConsent(e.target.checked)}
              style={{ width: '18px', height: '18px', accentColor: '#8aa149', flexShrink: 0, marginTop: '2px' }}
            />
            <span>I agree to the processing of my personal data</span>
          </label>

          {/* Status */}
          {status.msg && (
            <p className={`text-sm font-semibold status-${status.type}`} style={{ minHeight: '22px', lineHeight: 1.5 }}>
              {status.msg}
            </p>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="inline-flex items-center justify-center gap-3 font-extrabold transition-all duration-300 hover:-translate-y-1 disabled:cursor-wait disabled:opacity-90"
            style={{
              marginTop: '4px', minHeight: '56px', border: 'none', borderRadius: '16px',
              padding: '0 26px',
              background: 'linear-gradient(180deg, #e7cc64 0%, #d4ac3b 100%)',
              color: '#2d2412', fontSize: '17px',
              boxShadow: '0 14px 30px rgba(190,153,52,0.22)',
              cursor: loading ? 'wait' : 'pointer',
            }}
          >
            <span>{loading ? 'Sending...' : 'Send Message'}</span>
            {!loading && (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '20px', height: '20px' }} aria-hidden="true">
                <path d="M21 3 10 14"/>
                <path d="M21 3 14 21l-4-7-7-4 18-7Z"/>
              </svg>
            )}
          </button>
        </form>
      </ScrollReveal>
    </section>
  )
}
