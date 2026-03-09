import { Link } from 'react-router-dom'

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

const leadership = [
  {
    name: 'Aria Solano',
    title: 'Chief Executive Officer',
    bio: 'Former VP of Engineering at Snowflake and founding engineer at Stripe. Led teams of 200+ across distributed systems and data infrastructure. CS from MIT.',
    initials: 'AS',
    color: '#6c3fff',
    linkedIn: '#',
    specialties: ['Distributed Systems', 'Growth Strategy', 'Product Vision'],
  },
  {
    name: 'Marcus Webb',
    title: 'Chief Technology Officer',
    bio: 'Previously Principal Architect at Databricks. Author of three open-source projects with 40k+ GitHub stars. PhD in Computer Science from Stanford.',
    initials: 'MW',
    color: '#1affb2',
    linkedIn: '#',
    specialties: ['AI / ML', 'Platform Architecture', 'Open Source'],
  },
  {
    name: 'Tamara Osei',
    title: 'Chief Product Officer',
    bio: 'Former Head of Product at Segment and Amplitude. Expert in developer-led growth and data platform UX. MBA from Harvard Business School.',
    initials: 'TO',
    color: '#8b5cf6',
    linkedIn: '#',
    specialties: ['Product Strategy', 'Developer Experience', 'GTM'],
  },
]

const values = [
  { label: 'Transparency', desc: 'We share everything — metrics, roadmaps, failures. Honest communication drives better decisions.' },
  { label: 'Craft',        desc: 'We obsess over every detail of the product experience, from documentation to API ergonomics.' },
  { label: 'Velocity',     desc: 'We ship fast and iterate faster. Speed is a competitive advantage and a form of respect for customers.' },
  { label: 'Ownership',    desc: 'Everyone owns outcomes, not tasks. We bias toward action and hold ourselves accountable.' },
]

const milestones = [
  { year: '2019', event: 'Founded in San Francisco. Seed round of $4M led by Benchmark Capital.' },
  { year: '2020', event: 'Launched private beta. 500 design partners onboarded. Series A: $18M.' },
  { year: '2021', event: 'General availability. 1,000 customers in first 90 days. Expanded to EU data centers.' },
  { year: '2022', event: 'Series B: $65M. Launched AI Automation module. Hit 5,000 customers.' },
  { year: '2023', event: 'Series C: $140M at $1.2B valuation. Opened London and Singapore offices.' },
  { year: '2024', event: 'Crossed 10,000 customers. $2B+ transactions processed monthly. SOC 2 Type II certified.' },
  { year: '2025', event: 'Launched Zentrova Platform 3.0 with native LLM orchestration. 150+ integrations.' },
]

const techStack = [
  { category: 'Streaming',    items: ['Apache Kafka', 'Apache Flink', 'Redpanda'] },
  { category: 'Storage',      items: ['ClickHouse', 'Apache Iceberg', 'S3-compatible'] },
  { category: 'AI / ML',      items: ['PyTorch', 'Triton Inference', 'LangChain'] },
  { category: 'API',          items: ['GraphQL', 'gRPC', 'REST', 'WebSockets'] },
  { category: 'Infra',        items: ['Kubernetes', 'Terraform', 'Cilium'] },
  { category: 'Security',     items: ['Vault', 'OPA / Rego', 'SPIFFE/SPIRE'] },
]

export default function About() {
  return (
    <>
      {/* ===== PAGE HERO ===== */}
      <section className="page-hero">
        <div className="about-hero-bg" aria-hidden="true">
          <div className="glow-blob glow-blob-purple" style={{width:500,height:500,top:-80,right:-50}}/>
          <div className="glow-blob glow-blob-cyan"   style={{width:350,height:350,top:120,left:-60}}/>
        </div>
        <div className="container" style={{position:'relative',zIndex:1}}>
          <div className="section-label">Our Story</div>
          <h1 className="section-title" style={{fontSize:'clamp(2.4rem,5vw,3.5rem)',fontWeight:900,marginBottom:20}}>
            We are building the<br/>
            <span className="gradient-text">intelligence layer</span><br/>
            for modern enterprise
          </h1>
          <p className="section-subtitle" style={{fontSize:'1.125rem',maxWidth:620}}>
            Zentrova was founded with a single conviction: that data should be a first-class citizen in every business decision, not an afterthought. We built the platform we wished existed.
          </p>
        </div>
      </section>

      <hr className="divider" />

      {/* ===== VISION ===== */}
      <section className="section">
        <div className="container about-vision">
          <div>
            <div className="section-label">Vision &amp; Mission</div>
            <h2 className="section-title">A world where every business operates with the intelligence of a tech company</h2>
            <p style={{color:'#94a3b8',lineHeight:1.8,marginTop:16,fontSize:'1rem'}}>
              For too long, real-time data intelligence has been the exclusive domain of billion-dollar technology companies with armies of engineers. Zentrova changes that.
            </p>
            <p style={{color:'#94a3b8',lineHeight:1.8,marginTop:12,fontSize:'1rem'}}>
              Our mission is to make enterprise-grade analytics, automation, and AI accessible to every organization — from 10-person startups to Fortune 500 companies — through a unified platform that just works.
            </p>
            <div style={{marginTop:32}}>
              <Link to="/contact" className="btn btn-primary">Join the Platform <IconArrow /></Link>
            </div>
          </div>
          <div className="vision-values">
            {values.map(({ label, desc }) => (
              <div key={label} className="value-card">
                <div className="value-label">
                  <span className="check-dot"><IconCheck /></span>
                  {label}
                </div>
                <p className="value-desc">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* ===== LEADERSHIP ===== */}
      <section className="section">
        <div className="container">
          <div className="text-center" style={{marginBottom:56}}>
            <div className="section-label" style={{justifyContent:'center'}}>Leadership</div>
            <h2 className="section-title">The team building Zentrova</h2>
            <p className="section-subtitle">
              Operators, architects, and product leaders who have built and scaled some of the world's most demanding data platforms.
            </p>
          </div>

          <div className="leadership-grid">
            {leadership.map(({ name, title, bio, initials, color, specialties }) => (
              <div key={name} className="exec-card">
                <div className="exec-avatar" style={{background:`${color}18`,border:`2px solid ${color}40`,color}}>
                  {initials}
                </div>
                <div className="exec-info">
                  <h3 className="exec-name">{name}</h3>
                  <p className="exec-title" style={{color}}>{title}</p>
                  <p className="exec-bio">{bio}</p>
                  <div className="exec-specialties">
                    {specialties.map(s => (
                      <span key={s} className="badge badge-purple">{s}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* ===== TECH STACK ===== */}
      <section className="section">
        <div className="container">
          <div className="text-center" style={{marginBottom:56}}>
            <div className="section-label" style={{justifyContent:'center'}}>Technology</div>
            <h2 className="section-title">Built on open, proven technology</h2>
            <p className="section-subtitle">
              We chose our stack based on one criterion: what is the best tool for the job at hyperscale? No vendor lock-in. No proprietary black boxes.
            </p>
          </div>
          <div className="tech-grid">
            {techStack.map(({ category, items }) => (
              <div key={category} className="tech-category">
                <h4 className="tech-cat-label">{category}</h4>
                <div className="tech-items">
                  {items.map(item => (
                    <span key={item} className="tech-chip">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* ===== MILESTONES ===== */}
      <section className="section">
        <div className="container">
          <div className="text-center" style={{marginBottom:56}}>
            <div className="section-label" style={{justifyContent:'center'}}>Journey</div>
            <h2 className="section-title">Six years of relentless execution</h2>
          </div>
          <div className="timeline">
            {milestones.map(({ year, event }, i) => (
              <div key={year} className="timeline-item">
                <div className="timeline-year">{year}</div>
                <div className="timeline-connector">
                  <div className="timeline-dot" />
                  {i < milestones.length - 1 && <div className="timeline-line" />}
                </div>
                <div className="timeline-event">{event}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== INVESTORS ===== */}
      <section className="section investors-section">
        <div className="container text-center">
          <div className="section-label" style={{justifyContent:'center'}}>Funding</div>
          <h2 className="section-title">Backed by the best</h2>
          <p className="section-subtitle">
            $227M raised from tier-1 investors who believe in long-term platform value over short-term metrics.
          </p>
          <div className="investor-chips">
            {['Benchmark Capital', 'Sequoia Capital', 'Andreessen Horowitz', 'Index Ventures', 'Coatue Management'].map(inv => (
              <div key={inv} className="investor-chip">{inv}</div>
            ))}
          </div>
          <div className="funding-stat">
            <span className="funding-amount">$227M</span>
            <span className="funding-label">Total Raised · Series C</span>
          </div>
        </div>
      </section>

      <style>{`
        .about-hero-bg {
          position: absolute;
          inset: 0;
          z-index: 0;
          overflow: hidden;
        }

        .about-vision {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 72px;
          align-items: start;
        }

        .vision-values {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .value-card {
          background: rgba(22,33,62,0.5);
          border: 1px solid rgba(108,63,255,0.12);
          border-radius: 14px;
          padding: 20px 24px;
          transition: all 0.25s ease;
        }

        .value-card:hover {
          border-color: rgba(108,63,255,0.3);
          background: rgba(22,33,62,0.8);
        }

        .value-label {
          display: flex;
          align-items: center;
          gap: 10px;
          font-weight: 700;
          font-size: 1rem;
          color: #fff;
          margin-bottom: 8px;
        }

        .check-dot {
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

        .value-desc {
          font-size: 0.9rem;
          color: #64748b;
          line-height: 1.65;
          padding-left: 32px;
        }

        /* -- Leadership -- */
        .leadership-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
        }

        .exec-card {
          background: rgba(22,33,62,0.5);
          border: 1px solid rgba(108,63,255,0.12);
          border-radius: 20px;
          padding: 32px;
          display: flex;
          flex-direction: column;
          gap: 20px;
          transition: all 0.25s ease;
        }

        .exec-card:hover {
          border-color: rgba(108,63,255,0.35);
          box-shadow: 0 0 40px rgba(108,63,255,0.12);
          transform: translateY(-4px);
        }

        .exec-avatar {
          width: 72px;
          height: 72px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          font-weight: 900;
          letter-spacing: -0.02em;
        }

        .exec-name {
          font-size: 1.2rem;
          font-weight: 800;
          color: #fff;
          margin-bottom: 4px;
        }

        .exec-title {
          font-size: 0.875rem;
          font-weight: 600;
          margin-bottom: 12px;
          font-family: var(--font-mono, monospace);
        }

        .exec-bio {
          font-size: 0.9rem;
          color: #64748b;
          line-height: 1.7;
          margin-bottom: 16px;
        }

        .exec-specialties {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        /* -- Tech grid -- */
        .tech-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .tech-category {
          background: rgba(22,33,62,0.5);
          border: 1px solid rgba(108,63,255,0.12);
          border-radius: 14px;
          padding: 24px;
        }

        .tech-cat-label {
          font-family: var(--font-mono, monospace);
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #1affb2;
          margin-bottom: 16px;
        }

        .tech-items {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .tech-chip {
          padding: 5px 12px;
          background: rgba(108,63,255,0.1);
          border: 1px solid rgba(108,63,255,0.2);
          border-radius: 6px;
          font-size: 0.8125rem;
          color: #cbd5e1;
          font-weight: 500;
        }

        /* -- Timeline -- */
        .timeline {
          max-width: 800px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        .timeline-item {
          display: grid;
          grid-template-columns: 80px 40px 1fr;
          gap: 0 20px;
          min-height: 72px;
        }

        .timeline-year {
          font-family: var(--font-mono, monospace);
          font-size: 0.875rem;
          font-weight: 700;
          color: #6c3fff;
          padding-top: 6px;
          text-align: right;
        }

        .timeline-connector {
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
        }

        .timeline-dot {
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: #6c3fff;
          border: 2px solid #1affb2;
          box-shadow: 0 0 12px rgba(108,63,255,0.5);
          flex-shrink: 0;
          margin-top: 4px;
        }

        .timeline-line {
          flex: 1;
          width: 2px;
          background: linear-gradient(180deg, rgba(108,63,255,0.4), rgba(26,255,178,0.2));
          margin-top: 6px;
          margin-bottom: 0;
        }

        .timeline-event {
          font-size: 0.9375rem;
          color: #94a3b8;
          line-height: 1.65;
          padding-bottom: 28px;
          padding-top: 2px;
        }

        /* -- Investors -- */
        .investors-section {
          background: rgba(22,33,62,0.2);
          border-top: 1px solid rgba(108,63,255,0.1);
          border-bottom: 1px solid rgba(108,63,255,0.1);
        }

        .investor-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
          justify-content: center;
          margin-top: 40px;
          margin-bottom: 40px;
        }

        .investor-chip {
          padding: 12px 24px;
          background: rgba(22,33,62,0.8);
          border: 1px solid rgba(108,63,255,0.2);
          border-radius: 12px;
          font-size: 0.9375rem;
          font-weight: 600;
          color: #94a3b8;
          transition: all 0.2s ease;
        }

        .investor-chip:hover {
          border-color: rgba(108,63,255,0.5);
          color: #fff;
        }

        .funding-stat {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          margin-top: 8px;
        }

        .funding-amount {
          font-size: 3.5rem;
          font-weight: 900;
          letter-spacing: -0.04em;
          background: linear-gradient(135deg, #8b5cf6, #1affb2);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .funding-label {
          font-size: 0.875rem;
          color: #475569;
          font-family: var(--font-mono, monospace);
          letter-spacing: 0.08em;
        }

        @media (max-width: 1024px) {
          .about-vision { grid-template-columns: 1fr; gap: 48px; }
          .leadership-grid { grid-template-columns: 1fr; }
          .tech-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 640px) {
          .tech-grid { grid-template-columns: 1fr; }
          .timeline-item { grid-template-columns: 60px 30px 1fr; }
        }
      `}</style>
    </>
  )
}
