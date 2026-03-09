import { Link } from 'react-router-dom'

const IconCheck = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
)

const IconArrow = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"/>
    <polyline points="12 5 19 12 12 19"/>
  </svg>
)

/* SVG icon set */
const icons = {
  analytics: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
    </svg>
  ),
  automation: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3"/>
      <path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"/>
      <path d="M15.54 8.46a5 5 0 0 1 0 7.07M8.46 8.46a5 5 0 0 0 0 7.07"/>
    </svg>
  ),
  integration: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
    </svg>
  ),
  security: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      <polyline points="9 12 11 14 15 10"/>
    </svg>
  ),
  api: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6"/>
      <polyline points="8 6 2 12 8 18"/>
    </svg>
  ),
  support: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
    </svg>
  ),
}

const services = [
  {
    id: 'analytics',
    icon: icons.analytics,
    badge: 'Core',
    badgeColor: 'cyan',
    name: 'Analytics Suite',
    tagline: 'Real-time intelligence at any scale',
    desc: 'Stream, process, and visualize billions of events per day with sub-50ms dashboard refresh. Our distributed query engine handles petabyte-scale datasets without precomputation or caching hacks.',
    accent: '#1affb2',
    features: [
      'Real-time event streaming at 10M+ events/sec',
      'Sub-second SQL queries on petabyte datasets',
      'Drag-and-drop dashboard builder',
      'Anomaly detection with configurable alerts',
      'Cohort analysis and funnel visualization',
      'Scheduled reports with PDF/CSV export',
      'Embeddable charts via iFrame and SDK',
      'Custom metrics with formula editor',
    ],
    metrics: [
      { value: '<50ms', label: 'Dashboard refresh' },
      { value: '10M+', label: 'Events/sec' },
      { value: 'PB-scale', label: 'Data capacity' },
    ],
  },
  {
    id: 'automation',
    icon: icons.automation,
    badge: 'AI-Powered',
    badgeColor: 'purple',
    name: 'Workflow Automation',
    tagline: 'AI agents that learn and execute',
    desc: 'Deploy intelligent automation pipelines that adapt to your business logic. Combine deterministic rules with ML-driven decision trees, and let our AI engine handle the edge cases humans miss.',
    accent: '#6c3fff',
    features: [
      'Visual workflow builder with 200+ prebuilt actions',
      'AI-powered workflow suggestions based on usage',
      'Conditional branching with ML classifiers',
      'Human-in-the-loop approval gates',
      'Error handling with automatic retry logic',
      'Workflow versioning and rollback',
      'Execution logs with step-level debugging',
      'Custom code blocks (Python, JS, Go)',
    ],
    metrics: [
      { value: '200+', label: 'Prebuilt actions' },
      { value: '99.9%', label: 'Execution success' },
      { value: '<5ms', label: 'Trigger latency' },
    ],
  },
  {
    id: 'integration',
    icon: icons.integration,
    badge: 'Connectors',
    badgeColor: 'cyan',
    name: 'Data Integration',
    tagline: 'Connect every source in minutes',
    desc: 'Native connectors for 150+ data sources with automatic schema detection and CDC support. Sync your warehouse, CRM, databases, and event streams into a unified data model — no code required.',
    accent: '#1affb2',
    features: [
      '150+ prebuilt source connectors',
      'Change Data Capture (CDC) for databases',
      'Automatic schema evolution and mapping',
      'Bi-directional sync with conflict resolution',
      'Custom connector SDK (Python and Node)',
      'Real-time and batch ingestion modes',
      'Data quality monitoring with SLA alerts',
      'PII detection and masking at ingestion',
    ],
    metrics: [
      { value: '150+', label: 'Connectors' },
      { value: 'CDC', label: 'Real-time sync' },
      { value: '<2min', label: 'Setup time' },
    ],
  },
  {
    id: 'security',
    icon: icons.security,
    badge: 'Enterprise',
    badgeColor: 'green',
    name: 'Security & Compliance',
    tagline: 'Enterprise-grade by default',
    desc: 'Security is not an add-on at Zentrova — it is foundational. Every layer of the platform is designed with zero-trust principles, and compliance frameworks are built into the data pipeline itself.',
    accent: '#4ade80',
    features: [
      'SOC 2 Type II and ISO 27001 certified',
      'GDPR, CCPA, HIPAA compliance modules',
      'Zero-trust network architecture',
      'End-to-end encryption (AES-256, TLS 1.3)',
      'Role-based access control (RBAC)',
      'Attribute-based access control (ABAC)',
      'Complete audit log with SIEM export',
      'Automated vulnerability scanning',
    ],
    metrics: [
      { value: 'SOC 2', label: 'Type II certified' },
      { value: 'AES-256', label: 'Encryption' },
      { value: '100%', label: 'Audit coverage' },
    ],
  },
  {
    id: 'api',
    icon: icons.api,
    badge: 'Developer',
    badgeColor: 'purple',
    name: 'Developer API',
    tagline: 'API-first. Always.',
    desc: 'Every Zentrova feature is available via REST and GraphQL. Our SDKs for Python, Node.js, Go, and Java are generated from a single OpenAPI spec, ensuring consistency and type safety across all languages.',
    accent: '#8b5cf6',
    features: [
      'REST and GraphQL APIs with full feature parity',
      'Official SDKs for Python, Node, Go, Java',
      'Interactive API explorer with live execution',
      'Webhook support with retry and signing',
      'Server-sent events for real-time streams',
      'API versioning with 12-month deprecation policy',
      'Rate limiting with burst allowances',
      'Sandbox environment with production data replay',
    ],
    metrics: [
      { value: '99.99%', label: 'API uptime' },
      { value: '<10ms', label: 'P50 latency' },
      { value: '4', label: 'Official SDKs' },
    ],
  },
  {
    id: 'support',
    icon: icons.support,
    badge: 'Enterprise',
    badgeColor: 'green',
    name: 'Enterprise Support',
    tagline: 'Your success is our SLA',
    desc: "Enterprise customers get a dedicated success engineer, 24/7 priority support, and quarterly business reviews. We don't just sell you software — we're accountable for your outcomes.",
    accent: '#4ade80',
    features: [
      'Dedicated Customer Success Manager',
      '24/7 support with 1-hour SLA for critical issues',
      'Quarterly Executive Business Reviews',
      'Architecture review and onboarding workshop',
      'Custom training for engineering teams',
      'Direct Slack channel with Zentrova engineers',
      'Early access to beta features',
      'Custom SLA with contractual commitments',
    ],
    metrics: [
      { value: '<1hr', label: 'Critical SLA' },
      { value: '24/7', label: 'Coverage' },
      { value: 'NPS 72', label: 'Customer score' },
    ],
  },
]

const badgeColors = {
  cyan:   { bg: 'rgba(26,255,178,0.1)',   color: '#1affb2',  border: 'rgba(26,255,178,0.25)'  },
  purple: { bg: 'rgba(108,63,255,0.12)',  color: '#8b5cf6',  border: 'rgba(108,63,255,0.3)'   },
  green:  { bg: 'rgba(74,222,128,0.1)',   color: '#4ade80',  border: 'rgba(74,222,128,0.25)'  },
}

export default function Services() {
  return (
    <>
      {/* ===== PAGE HERO ===== */}
      <section className="page-hero">
        <div className="svc-hero-bg" aria-hidden="true">
          <div className="glow-blob glow-blob-purple" style={{width:500,height:500,top:0,left:-80}}/>
          <div className="glow-blob glow-blob-cyan"   style={{width:400,height:400,bottom:-80,right:-40}}/>
        </div>
        <div className="container" style={{position:'relative',zIndex:1,textAlign:'center'}}>
          <div className="section-label" style={{justifyContent:'center'}}>Platform Services</div>
          <h1 className="section-title" style={{fontSize:'clamp(2.4rem,5vw,3.5rem)',fontWeight:900,marginBottom:20}}>
            Six modules. One <span className="gradient-text">unified platform</span>.
          </h1>
          <p className="section-subtitle">
            Each Zentrova service is production-ready on day one, designed to integrate with the others, and built to scale to your most demanding requirements.
          </p>
        </div>
      </section>

      <hr className="divider" />

      {/* ===== SERVICES ===== */}
      <section className="section">
        <div className="container">
          <div className="services-list">
            {services.map(({ id, icon, badge, badgeColor, name, tagline, desc, accent, features, metrics }, idx) => {
              const { bg, color, border } = badgeColors[badgeColor]
              return (
                <article key={id} className={`service-block${idx % 2 === 1 ? ' service-block--reverse' : ''}`}>
                  <div className="service-body">
                    <div className="service-header">
                      <span className="service-badge" style={{background:bg,color,border:`1px solid ${border}`}}>
                        {badge}
                      </span>
                      <div className="service-icon" style={{'--accent': accent}}>
                        {icon}
                      </div>
                    </div>
                    <h2 className="service-name">{name}</h2>
                    <p className="service-tagline" style={{color: accent}}>{tagline}</p>
                    <p className="service-desc">{desc}</p>
                    <ul className="service-features">
                      {features.map(f => (
                        <li key={f} className="service-feature">
                          <span className="svc-check" style={{'--accent': accent}}><IconCheck /></span>
                          {f}
                        </li>
                      ))}
                    </ul>
                    <Link to="/contact" className="btn btn-primary" style={{marginTop:8}}>
                      Get Started <IconArrow />
                    </Link>
                  </div>

                  <div className="service-metrics-panel" style={{'--accent': accent}}>
                    <div className="smp-header">
                      <div className="smp-icon">{icon}</div>
                      <div>
                        <div className="smp-name">{name}</div>
                        <div className="smp-tag">{tagline}</div>
                      </div>
                    </div>
                    <div className="smp-divider" />
                    <div className="smp-stats">
                      {metrics.map(({ value, label }) => (
                        <div key={label} className="smp-stat">
                          <span className="smp-value">{value}</span>
                          <span className="smp-label">{label}</span>
                        </div>
                      ))}
                    </div>
                    <div className="smp-divider" />
                    <div className="smp-features-preview">
                      {features.slice(0, 4).map(f => (
                        <div key={f} className="smp-preview-item">
                          <span className="smp-check" style={{color: accent}}><IconCheck /></span>
                          <span>{f}</span>
                        </div>
                      ))}
                      <div className="smp-more">+{features.length - 4} more capabilities</div>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* ===== BOTTOM CTA ===== */}
      <section className="section svc-cta">
        <div className="container text-center">
          <div className="section-label" style={{justifyContent:'center'}}>Ready to begin?</div>
          <h2 className="section-title">Start with one module.<br/>Expand as you grow.</h2>
          <p className="section-subtitle">
            Mix and match services. All modules are available on every plan, with usage limits that scale with your tier.
          </p>
          <div style={{display:'flex',gap:16,justifyContent:'center',marginTop:36,flexWrap:'wrap'}}>
            <Link to="/contact" className="btn btn-primary btn-lg">Start Free Trial</Link>
            <Link to="/contact" className="btn btn-outline btn-lg">Talk to an Expert</Link>
          </div>
        </div>
      </section>

      <style>{`
        .svc-hero-bg {
          position: absolute;
          inset: 0;
          z-index: 0;
          overflow: hidden;
        }

        /* -- Services list -- */
        .services-list {
          display: flex;
          flex-direction: column;
          gap: 80px;
        }

        .service-block {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: start;
        }

        .service-block--reverse {
          direction: rtl;
        }

        .service-block--reverse > * {
          direction: ltr;
        }

        .service-header {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 20px;
        }

        .service-badge {
          padding: 5px 14px;
          border-radius: 100px;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .service-icon {
          width: 52px;
          height: 52px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: color-mix(in srgb, var(--accent) 10%, transparent);
          border: 1px solid color-mix(in srgb, var(--accent) 25%, transparent);
          color: var(--accent);
        }

        .service-name {
          font-size: clamp(1.6rem, 3vw, 2.2rem);
          font-weight: 900;
          color: #fff;
          letter-spacing: -0.03em;
          margin-bottom: 6px;
        }

        .service-tagline {
          font-size: 1rem;
          font-weight: 600;
          font-family: var(--font-mono, monospace);
          margin-bottom: 16px;
        }

        .service-desc {
          font-size: 0.9375rem;
          color: #64748b;
          line-height: 1.75;
          margin-bottom: 28px;
        }

        .service-features {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px 20px;
          margin-bottom: 28px;
        }

        .service-feature {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          font-size: 0.875rem;
          color: #94a3b8;
          line-height: 1.5;
        }

        .svc-check {
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: color-mix(in srgb, var(--accent) 12%, transparent);
          border: 1px solid color-mix(in srgb, var(--accent) 28%, transparent);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent);
          flex-shrink: 0;
          margin-top: 1px;
        }

        /* -- Service metrics panel -- */
        .service-metrics-panel {
          background: rgba(22,33,62,0.6);
          border: 1px solid color-mix(in srgb, var(--accent) 20%, rgba(108,63,255,0.15));
          border-radius: 24px;
          padding: 36px;
          backdrop-filter: blur(8px);
          position: sticky;
          top: 100px;
          box-shadow: 0 4px 40px rgba(0,0,0,0.3), 0 0 40px color-mix(in srgb, var(--accent) 8%, transparent);
        }

        .smp-header {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 24px;
        }

        .smp-icon {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background: color-mix(in srgb, var(--accent) 12%, transparent);
          border: 1px solid color-mix(in srgb, var(--accent) 28%, transparent);
          color: var(--accent);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .smp-name {
          font-size: 1.1rem;
          font-weight: 800;
          color: #fff;
        }

        .smp-tag {
          font-size: 0.8rem;
          color: #64748b;
          font-family: var(--font-mono, monospace);
        }

        .smp-divider {
          height: 1px;
          background: rgba(108,63,255,0.15);
          margin: 20px 0;
        }

        .smp-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          text-align: center;
        }

        .smp-value {
          display: block;
          font-size: 1.4rem;
          font-weight: 900;
          color: var(--accent);
          letter-spacing: -0.03em;
          line-height: 1.2;
          margin-bottom: 4px;
        }

        .smp-label {
          display: block;
          font-size: 0.75rem;
          color: #64748b;
          line-height: 1.4;
        }

        .smp-features-preview {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .smp-preview-item {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.875rem;
          color: #94a3b8;
        }

        .smp-check {
          flex-shrink: 0;
        }

        .smp-more {
          font-size: 0.8125rem;
          color: #475569;
          font-style: italic;
          padding-left: 24px;
          margin-top: 4px;
        }

        .svc-cta {
          background: rgba(22,33,62,0.2);
          border-top: 1px solid rgba(108,63,255,0.1);
        }

        @media (max-width: 1024px) {
          .service-block,
          .service-block--reverse {
            grid-template-columns: 1fr;
            direction: ltr;
          }
          .service-metrics-panel {
            position: static;
          }
          .service-features {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  )
}
