import { useState } from 'react'

const IconMail = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
)

const IconPhone = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.1 6.1l1.27-.9a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
)

const IconMap = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
)

const IconSlack = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"/>
  </svg>
)

const IconCheck = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
)

const officeLocations = [
  { city: 'San Francisco', role: 'HQ', address: '548 Market St, Suite 19103', country: 'United States' },
  { city: 'London',        role: 'EMEA', address: '1 Canada Square, Canary Wharf', country: 'United Kingdom' },
  { city: 'Singapore',     role: 'APAC', address: '1 Raffles Quay, North Tower', country: 'Singapore' },
]

const contactOptions = [
  {
    icon: <IconMail />,
    label: 'Sales',
    value: 'sales@zentrova.io',
    desc: 'Talk to our sales team about pricing, demos, and enterprise contracts.',
    color: '#6c3fff',
  },
  {
    icon: <IconPhone />,
    label: 'Support',
    value: 'support@zentrova.io',
    desc: 'Get technical assistance from our world-class support engineers.',
    color: '#1affb2',
  },
  {
    icon: <IconSlack />,
    label: 'Community',
    value: 'community.zentrova.io',
    desc: 'Join 8,000+ developers in our Slack community for tips and best practices.',
    color: '#8b5cf6',
  },
]

const formFields = [
  { name: 'firstName',  label: 'First Name',  type: 'text',   placeholder: 'Aria',                   half: true  },
  { name: 'lastName',   label: 'Last Name',   type: 'text',   placeholder: 'Solano',                  half: true  },
  { name: 'email',      label: 'Work Email',  type: 'email',  placeholder: 'aria@company.com',        half: false },
  { name: 'company',    label: 'Company',     type: 'text',   placeholder: 'Acme Corp',               half: true  },
  { name: 'role',       label: 'Job Title',   type: 'text',   placeholder: 'CTO / VP Engineering',   half: true  },
]

const companySize = ['1–10', '11–50', '51–200', '201–1,000', '1,000+']
const interests   = ['Analytics Suite', 'AI Automation', 'Data Integration', 'Security & Compliance', 'Developer API', 'Enterprise Support']

export default function Contact() {
  const [formState, setFormState] = useState({
    firstName: '', lastName: '', email: '', company: '', role: '',
    size: '', interest: '', message: '', agree: false,
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading]     = useState(false)

  const handleChange = e => {
    const { name, value, type, checked } = e.target
    setFormState(s => ({ ...s, [name]: type === 'checkbox' ? checked : value }))
  }

  const handleSubmit = e => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 1400)
  }

  return (
    <>
      {/* ===== HERO ===== */}
      <section className="page-hero">
        <div className="contact-hero-bg" aria-hidden="true">
          <div className="glow-blob glow-blob-purple" style={{width:500,height:500,top:0,right:-100}}/>
          <div className="glow-blob glow-blob-cyan"   style={{width:400,height:400,top:80,left:-100}}/>
        </div>
        <div className="container" style={{position:'relative',zIndex:1,textAlign:'center'}}>
          <div className="section-label" style={{justifyContent:'center'}}>Contact Us</div>
          <h1 className="section-title" style={{fontSize:'clamp(2.4rem,5vw,3.5rem)',fontWeight:900,marginBottom:20}}>
            Let's build something<br/>
            <span className="gradient-text">extraordinary together</span>
          </h1>
          <p className="section-subtitle">
            Whether you're evaluating Zentrova, ready to purchase, or need technical support — our team responds within one business day.
          </p>
        </div>
      </section>

      <hr className="divider" />

      {/* ===== CONTACT OPTIONS ===== */}
      <section className="section-sm">
        <div className="container">
          <div className="contact-options">
            {contactOptions.map(({ icon, label, value, desc, color }) => (
              <div key={label} className="contact-option" style={{'--color': color}}>
                <div className="co-icon">{icon}</div>
                <div className="co-label">{label}</div>
                <div className="co-value">{value}</div>
                <p className="co-desc">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* ===== FORM + INFO ===== */}
      <section className="section">
        <div className="container contact-layout">

          {/* Left: Form */}
          <div className="contact-form-wrapper">
            <h2 className="section-title" style={{marginBottom:8,fontSize:'1.8rem'}}>Talk to Sales</h2>
            <p style={{color:'#64748b',marginBottom:36,fontSize:'0.9375rem',lineHeight:1.7}}>
              Fill out the form and a member of our enterprise sales team will reach out within 24 hours with a personalized demo and pricing proposal.
            </p>

            {submitted ? (
              <div className="form-success">
                <div className="form-success-icon"><IconCheck /></div>
                <h3>Message received!</h3>
                <p>Thank you for reaching out. A Zentrova sales engineer will contact you within 24 hours to schedule your personalized demo.</p>
                <div className="form-success-features">
                  {['Personalized product demo', 'Custom pricing proposal', 'Architecture review', 'Dedicated onboarding plan'].map(f => (
                    <div key={f} className="form-success-feature">
                      <span className="success-check"><IconCheck /></span>
                      {f}
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit} noValidate>
                <div className="form-row">
                  {formFields.filter(f => f.half).slice(0, 2).map(({ name, label, type, placeholder }) => (
                    <div key={name} className="form-group">
                      <label className="form-label" htmlFor={name}>{label}</label>
                      <input
                        id={name}
                        name={name}
                        type={type}
                        placeholder={placeholder}
                        value={formState[name]}
                        onChange={handleChange}
                        className="input"
                        required
                      />
                    </div>
                  ))}
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="email">Work Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="aria@company.com"
                    value={formState.email}
                    onChange={handleChange}
                    className="input"
                    required
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label" htmlFor="company">Company</label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      placeholder="Acme Corp"
                      value={formState.company}
                      onChange={handleChange}
                      className="input"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="role">Job Title</label>
                    <input
                      id="role"
                      name="role"
                      type="text"
                      placeholder="CTO / VP Engineering"
                      value={formState.role}
                      onChange={handleChange}
                      className="input"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label" htmlFor="size">Company Size</label>
                    <select
                      id="size"
                      name="size"
                      value={formState.size}
                      onChange={handleChange}
                      className="input"
                    >
                      <option value="">Select size…</option>
                      {companySize.map(s => (
                        <option key={s} value={s}>{s} employees</option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="interest">Primary Interest</label>
                    <select
                      id="interest"
                      name="interest"
                      value={formState.interest}
                      onChange={handleChange}
                      className="input"
                    >
                      <option value="">Select product…</option>
                      {interests.map(i => (
                        <option key={i} value={i}>{i}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="message">Tell us about your use case</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Describe your current data stack, the challenges you're facing, and what you're hoping to achieve with Zentrova…"
                    value={formState.message}
                    onChange={handleChange}
                    className="input"
                    style={{resize:'vertical',minHeight:120}}
                  />
                </div>

                <div className="form-checkbox">
                  <input
                    id="agree"
                    name="agree"
                    type="checkbox"
                    checked={formState.agree}
                    onChange={handleChange}
                    required
                  />
                  <label htmlFor="agree">
                    I agree to Zentrova's <span style={{color:'#8b5cf6',cursor:'pointer'}}>Privacy Policy</span> and <span style={{color:'#8b5cf6',cursor:'pointer'}}>Terms of Service</span>.
                  </label>
                </div>

                <button
                  type="submit"
                  className={`btn btn-primary btn-submit${loading ? ' loading' : ''}`}
                  disabled={loading || !formState.agree}
                >
                  {loading ? (
                    <>
                      <span className="spinner" />
                      Sending…
                    </>
                  ) : 'Request a Demo'}
                </button>
              </form>
            )}
          </div>

          {/* Right: Info sidebar */}
          <aside className="contact-sidebar">
            {/* Enterprise callout */}
            <div className="enterprise-card">
              <div className="section-label" style={{marginBottom:16}}>Enterprise Sales</div>
              <h3 style={{fontSize:'1.3rem',fontWeight:800,marginBottom:12,lineHeight:1.3}}>Need a custom contract or security review?</h3>
              <p style={{color:'#64748b',fontSize:'0.9rem',lineHeight:1.7,marginBottom:20}}>
                Our enterprise team handles custom MSAs, SOC 2 documentation, security questionnaires, and purchase orders. We work with procurement.
              </p>
              <div className="enterprise-contact">
                <IconMail />
                <span>enterprise@zentrova.io</span>
              </div>
              <div className="enterprise-contact">
                <IconPhone />
                <span>+1 (415) 555-0192</span>
              </div>
              <div className="enterprise-checklist">
                {['Custom pricing & volume discounts','Dedicated implementation engineer','Security & compliance review','Custom SLA and uptime guarantee'].map(item => (
                  <div key={item} className="ent-check-item">
                    <span className="ent-check"><IconCheck /></span>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Offices */}
            <div className="offices">
              <h3 style={{fontSize:'1rem',fontWeight:700,marginBottom:20,color:'#fff'}}>Our Offices</h3>
              {officeLocations.map(({ city, role, address, country }) => (
                <div key={city} className="office-item">
                  <div className="office-header">
                    <span className="office-city">{city}</span>
                    <span className="badge badge-purple" style={{fontSize:'0.7rem'}}>{role}</span>
                  </div>
                  <div className="office-address">{address}</div>
                  <div className="office-country">{country}</div>
                </div>
              ))}
            </div>

            {/* Response time */}
            <div className="response-box">
              <div className="response-indicator">
                <span className="status-dot" style={{flexShrink:0}}/>
                <span style={{fontWeight:600,color:'#fff'}}>Typically responds in &lt;4 hours</span>
              </div>
              <p style={{color:'#64748b',fontSize:'0.875rem',marginTop:8,lineHeight:1.6}}>
                Our sales team is available Monday–Friday, 9am–6pm PT. Enterprise customers get 24/7 dedicated support.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <style>{`
        .contact-hero-bg {
          position: absolute;
          inset: 0;
          z-index: 0;
          overflow: hidden;
        }

        /* -- Contact options -- */
        .contact-options {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .contact-option {
          background: rgba(22,33,62,0.5);
          border: 1px solid rgba(108,63,255,0.12);
          border-radius: 20px;
          padding: 28px;
          transition: all 0.25s ease;
        }

        .contact-option:hover {
          border-color: color-mix(in srgb, var(--color) 40%, transparent);
          box-shadow: 0 0 32px color-mix(in srgb, var(--color) 12%, transparent);
          transform: translateY(-3px);
        }

        .co-icon {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: color-mix(in srgb, var(--color) 12%, transparent);
          border: 1px solid color-mix(in srgb, var(--color) 28%, transparent);
          color: var(--color);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 16px;
        }

        .co-label {
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--color);
          margin-bottom: 6px;
          font-family: var(--font-mono, monospace);
        }

        .co-value {
          font-size: 0.9375rem;
          font-weight: 600;
          color: #fff;
          margin-bottom: 10px;
        }

        .co-desc {
          font-size: 0.875rem;
          color: #64748b;
          line-height: 1.6;
        }

        /* -- Layout -- */
        .contact-layout {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 64px;
          align-items: start;
        }

        /* -- Form -- */
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .form-label {
          font-size: 0.875rem;
          font-weight: 600;
          color: #94a3b8;
          letter-spacing: 0.02em;
        }

        select.input {
          appearance: none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%2364748b' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 14px center;
          padding-right: 40px;
        }

        select.input option {
          background: #16213e;
          color: #fff;
        }

        .form-checkbox {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          font-size: 0.875rem;
          color: #64748b;
          line-height: 1.5;
        }

        .form-checkbox input[type="checkbox"] {
          width: 18px;
          height: 18px;
          accent-color: #6c3fff;
          cursor: pointer;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .btn-submit {
          width: 100%;
          justify-content: center;
          padding: 16px;
          font-size: 1rem;
          border-radius: 12px;
          transition: all 0.25s ease;
        }

        .btn-submit:disabled {
          opacity: 0.6;
          cursor: not-allowed;
          transform: none;
        }

        .spinner {
          width: 18px;
          height: 18px;
          border: 2px solid rgba(255,255,255,0.3);
          border-top-color: #fff;
          border-radius: 50%;
          animation: spin 0.7s linear infinite;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        /* -- Success state -- */
        .form-success {
          background: rgba(26,255,178,0.05);
          border: 1px solid rgba(26,255,178,0.2);
          border-radius: 20px;
          padding: 40px;
          text-align: center;
        }

        .form-success-icon {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background: rgba(26,255,178,0.12);
          border: 2px solid rgba(26,255,178,0.4);
          color: #1affb2;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 24px;
        }

        .form-success h3 {
          font-size: 1.5rem;
          font-weight: 800;
          color: #fff;
          margin-bottom: 12px;
        }

        .form-success p {
          color: #64748b;
          font-size: 0.9375rem;
          line-height: 1.7;
          max-width: 400px;
          margin: 0 auto 28px;
        }

        .form-success-features {
          display: flex;
          flex-direction: column;
          gap: 12px;
          text-align: left;
          max-width: 320px;
          margin: 0 auto;
        }

        .form-success-feature {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.9rem;
          color: #94a3b8;
        }

        .success-check {
          color: #1affb2;
          flex-shrink: 0;
        }

        /* -- Sidebar -- */
        .contact-sidebar {
          display: flex;
          flex-direction: column;
          gap: 24px;
          position: sticky;
          top: 100px;
        }

        .enterprise-card {
          background: rgba(108,63,255,0.07);
          border: 1px solid rgba(108,63,255,0.25);
          border-radius: 20px;
          padding: 28px;
        }

        .enterprise-contact {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.9rem;
          color: #8b5cf6;
          margin-bottom: 12px;
        }

        .enterprise-checklist {
          margin-top: 20px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          padding-top: 20px;
          border-top: 1px solid rgba(108,63,255,0.15);
        }

        .ent-check-item {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.875rem;
          color: #94a3b8;
        }

        .ent-check {
          color: #1affb2;
          flex-shrink: 0;
        }

        /* -- Offices -- */
        .offices {
          background: rgba(22,33,62,0.5);
          border: 1px solid rgba(108,63,255,0.12);
          border-radius: 20px;
          padding: 28px;
        }

        .office-item {
          padding: 14px 0;
          border-bottom: 1px solid rgba(108,63,255,0.08);
        }

        .office-item:last-child {
          border-bottom: none;
          padding-bottom: 0;
        }

        .office-header {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 4px;
        }

        .office-city {
          font-weight: 700;
          color: #fff;
          font-size: 0.9375rem;
        }

        .office-address {
          font-size: 0.8125rem;
          color: #64748b;
          margin-bottom: 2px;
        }

        .office-country {
          font-size: 0.75rem;
          color: #475569;
        }

        /* -- Response box -- */
        .response-box {
          background: rgba(22,33,62,0.4);
          border: 1px solid rgba(26,255,178,0.15);
          border-radius: 14px;
          padding: 20px;
        }

        .response-indicator {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 4px;
        }

        .status-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #4ade80;
          box-shadow: 0 0 8px rgba(74,222,128,0.6);
          animation: pulse-dot 2s ease-in-out infinite;
        }

        @keyframes pulse-dot {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.45; }
        }

        @media (max-width: 1024px) {
          .contact-layout {
            grid-template-columns: 1fr;
          }
          .contact-sidebar {
            position: static;
          }
          .contact-options {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 640px) {
          .form-row {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  )
}
