import { Link } from 'react-router-dom'

/* ---- Icon components ---- */
const IconAnalytics = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
  </svg>
)
const IconAI = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2a4 4 0 0 1 4 4 4 4 0 0 1-4 4 4 4 0 0 1-4-4 4 4 0 0 1 4-4z"/>
    <path d="M12 14a7 7 0 0 1 7 7H5a7 7 0 0 1 7-7z"/>
    <line x1="12" y1="10" x2="12" y2="14"/>
  </svg>
)
const IconTeam = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
)
const IconAPI = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6"/>
    <polyline points="8 6 2 12 8 18"/>
  </svg>
)
const IconCheck = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
)
const IconArrow = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"/>
    <polyline points="12 5 19 12 12 19"/>
  </svg>
)
const IconStar = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
)

/* ---- Data ---- */
const features = [
  {
    icon: <IconAnalytics />,
    title: 'Real-time Analytics',
    desc: 'Stream millions of events per second. Dashboards update in under 50ms with sub-second query latency across petabyte-scale datasets.',
    accent: '#1affb2',
    badge: 'Core',
  },
  {
    icon: <IconAI />,
    title: 'AI Automation',
    desc: 'Deploy intelligent agents that learn from your workflows. Automate decisions at scale with explainable ML models built into every pipeline.',
    accent: '#6c3fff',
    badge: 'AI-Powered',
  },
  {
    icon: <IconTeam />,
    title: 'Team Collaboration',
    desc: 'Unified workspace for data, engineering, and product teams. Role-based access, audit logs, and real-time co-editing built in.',
    accent: '#8b5cf6',
    badge: 'Platform',
  },
  {
    icon: <IconAPI />,
    title: 'API-First Design',
    desc: 'Every feature is accessible via REST or GraphQL. SDKs for Python, Node, Go, and Java. Webhooks, streaming, and event-driven by default.',
    accent: '#1affb2',
    badge: 'Developer',
  },
]

const stats = [
  { value: '10,000+',  label: 'Companies',      sub: 'across 80 countries'     },
  { value: '99.9%',    label: 'Uptime SLA',     sub: 'enterprise guaranteed'   },
  { value: '150+',     label: 'Integrations',   sub: 'with your existing stack' },
  { value: '$2B+',     label: 'Processed',      sub: 'transactions monthly'    },
]

const plans = [
  {
    name: 'Starter',
    price: '$49',
    period: '/mo',
    desc: 'Everything you need to get started with data-driven operations.',
    features: [
      'Up to 5 team members',
      '10M events / month',
      'Core analytics dashboard',
      '10 workflow automations',
      '30-day data retention',
      'Email support',
      'REST API access',
    ],
    cta: 'Start Free Trial',
    popular: false,
    accentColor: '#8b5cf6',
  },
  {
    name: 'Pro',
    price: '$149',
    period: '/mo',
    desc: 'Designed for growing teams that need advanced intelligence and scale.',
    features: [
      'Up to 25 team members',
      '100M events / month',
      'Advanced AI automation',
      'Unlimited workflows',
      '1-year data retention',
      'Priority support (4h SLA)',
      'GraphQL + REST API',
      'Custom dashboards',
      'SSO / SAML',
    ],
    cta: 'Get Started',
    popular: true,
    accentColor: '#6c3fff',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    desc: 'Full-scale deployment with dedicated infrastructure and white-glove service.',
    features: [
      'Unlimited team members',
      'Unlimited events',
      'Dedicated infrastructure',
      'On-premise & private cloud',
      'Custom data retention',
      '24/7 dedicated support',
      'Custom SLAs',
      'Advanced security & audit',
      'Custom AI model training',
    ],
    cta: 'Contact Sales',
    popular: false,
    accentColor: '#1affb2',
  },
]

const testimonials = [
  {
    quote: "Zentrova replaced four separate tools and cut our data pipeline latency by 94%. Our engineering team shipped faster in the first month than the previous quarter combined.",
    name: "Priya Nair",
    title: "CTO",
    company: "Meridian Fintech",
    initials: "PN",
    color: '#6c3fff',
  },
  {
    quote: "The AI automation layer is genuinely impressive. We automated 70% of our support escalations within two weeks of onboarding. The ROI was immediate and measurable.",
    name: "James Okafor",
    title: "VP Engineering",
    company: "CloudNova Systems",
    initials: "JO",
    color: '#1affb2',
  },
  {
    quote: "We evaluated six enterprise platforms. Zentrova was the only one with true API-first architecture and a 99.9% uptime guarantee backed by real contractual SLAs.",
    name: "Lena Kaufmann",
    title: "Head of Platform",
    company: "Synthos Analytics",
    initials: "LK",
    color: '#8b5cf6',
  },
]

/* ---- Mini grid visualisation (pure CSS/SVG) ---- */
const HeroDiagram = () => (
  <div className="hero-diagram" aria-hidden="true">
    <svg viewBox="0 0 600 420" fill="none" xmlns="http://www.w3.org/2000/svg" className="hero-svg">
      <defs>
        <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#6c3fff" stopOpacity="0.8"/>
          <stop offset="100%" stopColor="#1affb2" stopOpacity="0.8"/>
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
          <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>

      {/* Grid lines */}
      {[60,120,180,240,300,360,420,480,540].map(x => (
        <line key={x} x1={x} y1="0" x2={x} y2="420" stroke="rgba(108,63,255,0.06)" strokeWidth="1"/>
      ))}
      {[60,120,180,240,300,360].map(y => (
        <line key={y} x1="0" y1={y} x2="600" y2={y} stroke="rgba(108,63,255,0.06)" strokeWidth="1"/>
      ))}

      {/* Chart line – analytics chart */}
      <polyline
        points="30,320 90,290 150,310 210,260 270,230 330,200 390,170 450,130 510,110 570,80"
        stroke="url(#lineGrad)"
        strokeWidth="2.5"
        fill="none"
        filter="url(#glow)"
      />

      {/* Area fill */}
      <polygon
        points="30,320 90,290 150,310 210,260 270,230 330,200 390,170 450,130 510,110 570,80 570,400 30,400"
        fill="url(#lineGrad)"
        opacity="0.06"
      />

      {/* Data points */}
      {[[90,290],[210,260],[330,200],[450,130],[570,80]].map(([x,y],i) => (
        <circle key={i} cx={x} cy={y} r="5" fill="#1affb2" filter="url(#glow)" opacity="0.9"/>
      ))}

      {/* Floating cards */}
      <rect x="380" y="20" width="190" height="64" rx="12" fill="rgba(22,33,62,0.9)" stroke="rgba(108,63,255,0.4)" strokeWidth="1"/>
      <circle cx="408" cy="52" r="12" fill="rgba(108,63,255,0.3)"/>
      <text x="409" y="57" fill="#1affb2" fontSize="10" textAnchor="middle">AI</text>
      <text x="426" y="42" fill="#ffffff" fontSize="11" fontFamily="monospace" fontWeight="bold">Automation Active</text>
      <text x="426" y="58" fill="#1affb2" fontSize="10" fontFamily="monospace">32 workflows running</text>

      <rect x="20" y="30" width="170" height="56" rx="12" fill="rgba(22,33,62,0.9)" stroke="rgba(26,255,178,0.3)" strokeWidth="1"/>
      <text x="36" y="52" fill="#94a3b8" fontSize="10">Events / sec</text>
      <text x="36" y="70" fill="#ffffff" fontSize="16" fontFamily="monospace" fontWeight="bold">2,847,391</text>

      <rect x="200" y="150" width="160" height="56" rx="12" fill="rgba(22,33,62,0.85)" stroke="rgba(108,63,255,0.3)" strokeWidth="1"/>
      <text x="216" y="172" fill="#94a3b8" fontSize="10">Latency P99</text>
      <text x="216" y="190" fill="#1affb2" fontSize="16" fontFamily="monospace" fontWeight="bold">12ms</text>

      {/* Nodes */}
      <circle cx="100" cy="340" r="18" fill="rgba(108,63,255,0.2)" stroke="rgba(108,63,255,0.5)" strokeWidth="1.5"/>
      <circle cx="100" cy="340" r="6" fill="#6c3fff"/>
      <circle cx="300" cy="370" r="14" fill="rgba(26,255,178,0.15)" stroke="rgba(26,255,178,0.4)" strokeWidth="1.5"/>
      <circle cx="300" cy="370" r="5" fill="#1affb2"/>
      <circle cx="500" cy="350" r="16" fill="rgba(139,92,246,0.2)" stroke="rgba(139,92,246,0.4)" strokeWidth="1.5"/>
      <circle cx="500" cy="350" r="6" fill="#8b5cf6"/>

      <line x1="100" y1="340" x2="300" y2="370" stroke="rgba(108,63,255,0.3)" strokeWidth="1" strokeDasharray="4 3"/>
      <line x1="300" y1="370" x2="500" y2="350" stroke="rgba(26,255,178,0.3)" strokeWidth="1" strokeDasharray="4 3"/>
    </svg>
  </div>
)

/* ---- Home Page ---- */
export default function Home() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="hero">
        <div className="hero__bg" aria-hidden="true">
          <div className="glow-blob glow-blob-purple" style={{width:600,height:600,top:-100,left:-100}}/>
          <div className="glow-blob glow-blob-cyan"   style={{width:500,height:500,top:100,right:-80}}/>
          <div className="hero__grid" />
        </div>

        <div className="container hero__inner">
          <div className="hero__content">
            <div className="section-label">
              <span className="status-indicator" />
              Platform 3.0 Now Live
            </div>
            <h1 className="hero__title">
              The Operating System<br/>
              for <span className="gradient-text">Modern Business</span>
            </h1>
            <p className="hero__subtitle">
              Zentrova unifies your data, automates your workflows, and surfaces intelligence across every layer of your organization — in real time, at any scale.
            </p>
            <div className="hero__cta">
              <Link to="/contact" className="btn btn-primary btn-lg">
                Start Free Trial
                <IconArrow />
              </Link>
              <Link to="/services" className="btn btn-outline btn-lg">
                Explore Platform
              </Link>
            </div>
            <div className="hero__trust">
              <span className="hero__trust-text">Trusted by engineering teams at</span>
              <div className="hero__logos">
                {['Meridian', 'CloudNova', 'Synthos', 'Arcline', 'Vectara'].map(n => (
                  <span key={n} className="hero__logo-tag">{n}</span>
                ))}
              </div>
            </div>
          </div>
          <HeroDiagram />
        </div>
      </section>

      {/* ===== STATS ===== */}
      <section className="section-sm stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map(({ value, label, sub }) => (
              <div key={label} className="stat-card">
                <span className="stat-value">{value}</span>
                <span className="stat-label">{label}</span>
                <span className="stat-sub">{sub}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* ===== FEATURES ===== */}
      <section className="section">
        <div className="container">
          <div className="text-center" style={{marginBottom:56}}>
            <div className="section-label" style={{justifyContent:'center'}}>Platform Capabilities</div>
            <h2 className="section-title">Everything your team needs,<br/>in one unified platform</h2>
            <p className="section-subtitle">
              Purpose-built modules that work together seamlessly — no stitching together third-party tools or brittle integrations.
            </p>
          </div>

          <div className="features-grid">
            {features.map(({ icon, title, desc, accent, badge }) => (
              <div key={title} className="feature-card">
                <div className="feature-icon" style={{'--accent': accent}}>
                  {icon}
                </div>
                <div className="feature-meta">
                  <span className="badge badge-purple" style={{marginBottom:12}}>{badge}</span>
                  <h3 className="feature-title">{title}</h3>
                  <p className="feature-desc">{desc}</p>
                </div>
                <Link to="/services" className="feature-link" style={{'--accent': accent}}>
                  Learn more <IconArrow />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* ===== PLATFORM VISUAL ===== */}
      <section className="section">
        <div className="container platform-section">
          <div className="platform-text">
            <div className="section-label">Infrastructure</div>
            <h2 className="section-title">Built for the demands of enterprise scale</h2>
            <p className="section-subtitle">
              Zentrova's distributed architecture handles billions of events daily with zero-downtime deployments, automatic failover, and multi-region redundancy.
            </p>
            <ul className="platform-checklist">
              {[
                'Multi-region active-active deployment',
                'End-to-end encryption at rest and in transit',
                'SOC 2 Type II and ISO 27001 certified',
                'GDPR, CCPA, and HIPAA compliance modules',
                'Automatic horizontal scaling up to 10M RPS',
                'Custom VPC and private networking support',
              ].map(item => (
                <li key={item} className="platform-check-item">
                  <span className="check-icon"><IconCheck /></span>
                  {item}
                </li>
              ))}
            </ul>
            <div style={{marginTop:32}}>
              <Link to="/services" className="btn btn-primary">View Security Details</Link>
            </div>
          </div>
          <div className="platform-visual" aria-hidden="true">
            <div className="arch-diagram">
              {[
                { label: 'Client Layer',     color: '#6c3fff', items: ['Web App', 'Mobile SDK', 'API Client'] },
                { label: 'Platform Core',    color: '#1affb2', items: ['Event Router', 'AI Engine', 'Auth Service'] },
                { label: 'Data Layer',       color: '#8b5cf6', items: ['Stream DB', 'Warehouse', 'Cache'] },
              ].map(({ label, color, items }, i) => (
                <div key={label} className="arch-row">
                  <span className="arch-label" style={{color}}>{label}</span>
                  <div className="arch-nodes">
                    {items.map(item => (
                      <div key={item} className="arch-node" style={{'--color': color}}>
                        <span className="arch-node-dot" style={{background: color, boxShadow: `0 0 8px ${color}`}} />
                        {item}
                      </div>
                    ))}
                  </div>
                  {i < 2 && (
                    <div className="arch-arrows">
                      {items.map(item => (
                        <div key={item} className="arch-arrow" style={{borderColor: color}} />
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* ===== PRICING ===== */}
      <section className="section" id="pricing">
        <div className="container">
          <div className="text-center" style={{marginBottom:56}}>
            <div className="section-label" style={{justifyContent:'center'}}>Pricing</div>
            <h2 className="section-title">Simple, transparent pricing</h2>
            <p className="section-subtitle">
              No hidden fees, no metered surprises. Scale confidently with plans designed for every stage of growth.
            </p>
          </div>

          <div className="pricing-grid">
            {plans.map(({ name, price, period, desc, features, cta, popular, accentColor }) => (
              <div key={name} className={`pricing-card${popular ? ' pricing-card--popular' : ''}`}
                   style={{'--accent': accentColor}}>
                {popular && <div className="popular-badge">Most Popular</div>}
                <div className="pricing-header">
                  <h3 className="pricing-name">{name}</h3>
                  <div className="pricing-price">
                    <span className="pricing-amount">{price}</span>
                    <span className="pricing-period">{period}</span>
                  </div>
                  <p className="pricing-desc">{desc}</p>
                </div>
                <ul className="pricing-features">
                  {features.map(f => (
                    <li key={f} className="pricing-feature-item">
                      <span className="pricing-check"><IconCheck /></span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`btn ${popular ? 'btn-primary' : 'btn-outline'} btn-cta`}
                  style={popular ? {} : {'--hover-color': accentColor}}
                >
                  {cta}
                </Link>
              </div>
            ))}
          </div>

          <p className="pricing-note">
            All plans include a 14-day free trial. No credit card required.
            Enterprise plans include custom MSAs, POs, and invoicing.
          </p>
        </div>
      </section>

      <hr className="divider" />

      {/* ===== TESTIMONIALS ===== */}
      <section className="section">
        <div className="container">
          <div className="text-center" style={{marginBottom:56}}>
            <div className="section-label" style={{justifyContent:'center'}}>Customer Stories</div>
            <h2 className="section-title">Trusted by the teams<br/>building the future</h2>
          </div>

          <div className="testimonials-grid">
            {testimonials.map(({ quote, name, title, company, initials, color }) => (
              <div key={name} className="testimonial-card">
                <div className="testimonial-stars">
                  {[1,2,3,4,5].map(i => <span key={i} style={{color:'#f59e0b'}}><IconStar /></span>)}
                </div>
                <p className="testimonial-quote">"{quote}"</p>
                <div className="testimonial-author">
                  <div className="testimonial-avatar" style={{background: `${color}22`, border: `2px solid ${color}66`, color}}>
                    {initials}
                  </div>
                  <div>
                    <div className="testimonial-name">{name}</div>
                    <div className="testimonial-role">{title} · {company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA BANNER ===== */}
      <section className="cta-banner">
        <div className="cta-banner__bg" aria-hidden="true">
          <div className="glow-blob glow-blob-purple" style={{width:500,height:500,top:-100,left:'20%'}}/>
        </div>
        <div className="container cta-banner__inner">
          <h2 className="cta-banner__title">Ready to transform your operations?</h2>
          <p className="cta-banner__sub">Join 10,000+ companies already running on Zentrova. Get started in minutes.</p>
          <div className="cta-banner__actions">
            <Link to="/contact" className="btn btn-cyan btn-lg">Start Free Trial</Link>
            <Link to="/contact" className="btn btn-outline btn-lg">Talk to Sales</Link>
          </div>
        </div>
      </section>

      <style>{`
        /* -- Hero -- */
        .hero {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding: 120px 0 80px;
          overflow: hidden;
        }

        .hero__bg {
          position: absolute;
          inset: 0;
          z-index: 0;
        }

        .hero__grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(108,63,255,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(108,63,255,0.05) 1px, transparent 1px);
          background-size: 60px 60px;
          mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 0%, transparent 100%);
        }

        .hero__inner {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }

        .hero__content {
          max-width: 580px;
        }

        .hero__title {
          font-size: clamp(2.4rem, 5vw, 3.8rem);
          font-weight: 900;
          line-height: 1.1;
          letter-spacing: -0.03em;
          margin-bottom: 20px;
          margin-top: 16px;
        }

        .hero__subtitle {
          font-size: 1.125rem;
          color: #94a3b8;
          line-height: 1.75;
          margin-bottom: 36px;
        }

        .hero__cta {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
          margin-bottom: 48px;
        }

        .hero__trust {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .hero__trust-text {
          font-size: 0.8125rem;
          color: #475569;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }

        .hero__logos {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        .hero__logo-tag {
          font-size: 0.875rem;
          font-weight: 600;
          color: #64748b;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          padding: 6px 14px;
          border-radius: 6px;
        }

        .status-indicator {
          display: inline-block;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #1affb2;
          box-shadow: 0 0 8px rgba(26,255,178,0.7);
          animation: pulse-dot 2s ease-in-out infinite;
        }

        /* -- Hero diagram -- */
        .hero-diagram {
          width: 100%;
          max-width: 580px;
          background: rgba(22,33,62,0.4);
          border: 1px solid rgba(108,63,255,0.2);
          border-radius: 20px;
          overflow: hidden;
          backdrop-filter: blur(12px);
          box-shadow: 0 0 60px rgba(108,63,255,0.15), inset 0 1px 0 rgba(255,255,255,0.04);
        }

        .hero-svg {
          width: 100%;
          height: auto;
          display: block;
        }

        /* -- Stats -- */
        .stats-section {
          background: rgba(22,33,62,0.3);
          border-top: 1px solid rgba(108,63,255,0.1);
          border-bottom: 1px solid rgba(108,63,255,0.1);
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1px;
          background: rgba(108,63,255,0.1);
          border-radius: 16px;
          overflow: hidden;
        }

        .stat-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 40px 24px;
          background: rgba(13,17,23,0.8);
          text-align: center;
          gap: 6px;
        }

        .stat-value {
          font-size: 2.5rem;
          font-weight: 900;
          letter-spacing: -0.03em;
          background: linear-gradient(135deg, #fff, #8b5cf6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          line-height: 1;
        }

        .stat-label {
          font-size: 1rem;
          font-weight: 700;
          color: #fff;
        }

        .stat-sub {
          font-size: 0.8125rem;
          color: #475569;
        }

        /* -- Features -- */
        .features-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }

        .feature-card {
          display: flex;
          flex-direction: column;
          gap: 16px;
          background: rgba(22,33,62,0.5);
          border: 1px solid rgba(108,63,255,0.12);
          border-radius: 20px;
          padding: 36px;
          transition: all 0.25s ease;
        }

        .feature-card:hover {
          border-color: rgba(108,63,255,0.35);
          box-shadow: 0 0 40px rgba(108,63,255,0.15);
          transform: translateY(-4px);
        }

        .feature-icon {
          width: 56px;
          height: 56px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: color-mix(in srgb, var(--accent) 12%, transparent);
          border: 1px solid color-mix(in srgb, var(--accent) 30%, transparent);
          color: var(--accent);
          flex-shrink: 0;
        }

        .feature-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: #fff;
          margin-bottom: 8px;
        }

        .feature-desc {
          font-size: 0.9375rem;
          color: #64748b;
          line-height: 1.7;
        }

        .feature-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.875rem;
          font-weight: 600;
          color: var(--accent, #8b5cf6);
          text-decoration: none;
          margin-top: auto;
          transition: gap 0.2s ease;
        }

        .feature-link:hover { gap: 10px; }

        .feature-meta {
          flex: 1;
        }

        /* -- Platform section -- */
        .platform-section {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }

        .platform-checklist {
          margin-top: 32px;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .platform-check-item {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 0.9375rem;
          color: #cbd5e1;
        }

        .check-icon {
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background: rgba(26,255,178,0.12);
          border: 1px solid rgba(26,255,178,0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #1affb2;
          flex-shrink: 0;
        }

        /* -- Architecture diagram -- */
        .arch-diagram {
          display: flex;
          flex-direction: column;
          gap: 0;
          background: rgba(22,33,62,0.6);
          border: 1px solid rgba(108,63,255,0.2);
          border-radius: 20px;
          padding: 32px;
          backdrop-filter: blur(8px);
        }

        .arch-row {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .arch-label {
          font-family: var(--font-mono, monospace);
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          opacity: 0.8;
        }

        .arch-nodes {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        .arch-node {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          background: rgba(13,17,23,0.7);
          border: 1px solid color-mix(in srgb, var(--color) 25%, transparent);
          border-radius: 8px;
          font-size: 0.85rem;
          color: #cbd5e1;
          font-weight: 500;
        }

        .arch-node-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          flex-shrink: 0;
        }

        .arch-arrows {
          display: flex;
          gap: 12px;
          padding: 8px 0;
        }

        .arch-arrow {
          flex: 1;
          height: 20px;
          border-left: 1px dashed;
          opacity: 0.3;
          margin-left: 50px;
          position: relative;
        }

        .arch-arrow::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: -4px;
          width: 7px;
          height: 7px;
          border-right: inherit;
          border-bottom: inherit;
          transform: rotate(45deg);
          opacity: 1;
        }

        /* -- Pricing -- */
        .pricing-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          align-items: start;
        }

        .pricing-card {
          position: relative;
          background: rgba(22,33,62,0.5);
          border: 1px solid rgba(108,63,255,0.15);
          border-radius: 24px;
          padding: 36px;
          display: flex;
          flex-direction: column;
          gap: 28px;
          transition: all 0.25s ease;
        }

        .pricing-card:hover {
          border-color: color-mix(in srgb, var(--accent) 50%, transparent);
          box-shadow: 0 0 40px color-mix(in srgb, var(--accent) 15%, transparent);
          transform: translateY(-4px);
        }

        .pricing-card--popular {
          border-color: rgba(108,63,255,0.5);
          background: rgba(108,63,255,0.08);
          box-shadow: 0 0 48px rgba(108,63,255,0.2);
          transform: scale(1.02);
        }

        .pricing-card--popular:hover {
          transform: scale(1.02) translateY(-4px);
        }

        .popular-badge {
          position: absolute;
          top: -14px;
          left: 50%;
          transform: translateX(-50%);
          background: #6c3fff;
          color: #fff;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 6px 20px;
          border-radius: 100px;
          white-space: nowrap;
          box-shadow: 0 0 20px rgba(108,63,255,0.5);
        }

        .pricing-name {
          font-size: 1.125rem;
          font-weight: 700;
          color: #fff;
          margin-bottom: 8px;
        }

        .pricing-price {
          display: flex;
          align-items: baseline;
          gap: 4px;
          margin-bottom: 12px;
        }

        .pricing-amount {
          font-size: 2.5rem;
          font-weight: 900;
          letter-spacing: -0.04em;
          color: #fff;
        }

        .pricing-period {
          font-size: 1rem;
          color: #64748b;
        }

        .pricing-desc {
          font-size: 0.9rem;
          color: #64748b;
          line-height: 1.6;
        }

        .pricing-features {
          display: flex;
          flex-direction: column;
          gap: 12px;
          flex: 1;
        }

        .pricing-feature-item {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.9rem;
          color: #94a3b8;
        }

        .pricing-check {
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: rgba(26,255,178,0.1);
          border: 1px solid rgba(26,255,178,0.25);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #1affb2;
          flex-shrink: 0;
        }

        .btn-cta {
          width: 100%;
          justify-content: center;
          padding: 14px;
        }

        .pricing-note {
          text-align: center;
          color: #475569;
          font-size: 0.875rem;
          margin-top: 36px;
          line-height: 1.7;
        }

        /* -- Testimonials -- */
        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .testimonial-card {
          background: rgba(22,33,62,0.5);
          border: 1px solid rgba(108,63,255,0.12);
          border-radius: 20px;
          padding: 32px;
          display: flex;
          flex-direction: column;
          gap: 20px;
          transition: all 0.25s ease;
        }

        .testimonial-card:hover {
          border-color: rgba(108,63,255,0.3);
          transform: translateY(-3px);
          box-shadow: 0 8px 32px rgba(0,0,0,0.3);
        }

        .testimonial-stars {
          display: flex;
          gap: 4px;
        }

        .testimonial-quote {
          font-size: 0.9375rem;
          color: #cbd5e1;
          line-height: 1.75;
          flex: 1;
          font-style: italic;
        }

        .testimonial-author {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .testimonial-avatar {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.875rem;
          font-weight: 800;
          flex-shrink: 0;
        }

        .testimonial-name {
          font-weight: 700;
          font-size: 0.9375rem;
          color: #fff;
        }

        .testimonial-role {
          font-size: 0.8125rem;
          color: #64748b;
        }

        /* -- CTA Banner -- */
        .cta-banner {
          position: relative;
          overflow: hidden;
          padding: 100px 0;
          background: rgba(22,33,62,0.3);
          border-top: 1px solid rgba(108,63,255,0.15);
          border-bottom: 1px solid rgba(108,63,255,0.15);
        }

        .cta-banner__bg {
          position: absolute;
          inset: 0;
          z-index: 0;
        }

        .cta-banner__inner {
          position: relative;
          z-index: 1;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
        }

        .cta-banner__title {
          font-size: clamp(1.8rem, 3.5vw, 2.8rem);
          font-weight: 900;
          letter-spacing: -0.03em;
          line-height: 1.15;
        }

        .cta-banner__sub {
          color: #94a3b8;
          font-size: 1.0625rem;
          max-width: 500px;
        }

        .cta-banner__actions {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
          justify-content: center;
          margin-top: 8px;
        }

        /* -- Responsive -- */
        @media (max-width: 1024px) {
          .hero__inner { grid-template-columns: 1fr; }
          .hero-diagram { max-width: 100%; }
          .features-grid { grid-template-columns: 1fr; }
          .platform-section { grid-template-columns: 1fr; gap: 48px; }
          .pricing-grid { grid-template-columns: 1fr; }
          .pricing-card--popular { transform: scale(1); }
          .testimonials-grid { grid-template-columns: 1fr; }
          .stats-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 640px) {
          .hero__cta { flex-direction: column; }
          .stats-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </>
  )
}
