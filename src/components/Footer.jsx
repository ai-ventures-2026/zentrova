import { Link } from 'react-router-dom'

const ZentrovaLogo = () => (
  <svg width="32" height="32" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect width="36" height="36" rx="10" fill="#6c3fff" />
    <path d="M9 10h18l-11 8 11 8H9" stroke="#1affb2" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    <circle cx="27" cy="18" r="2.5" fill="#1affb2" />
  </svg>
)

const footerLinks = {
  Product: [
    { label: 'Analytics Suite',    to: '/services' },
    { label: 'AI Automation',      to: '/services' },
    { label: 'Data Integration',   to: '/services' },
    { label: 'Developer API',      to: '/services' },
    { label: 'Pricing',            to: '/#pricing'  },
  ],
  Company: [
    { label: 'About Us',           to: '/about'    },
    { label: 'Leadership',         to: '/about'    },
    { label: 'Careers',            to: '/contact'  },
    { label: 'Press',              to: '/contact'  },
    { label: 'Blog',               to: '/contact'  },
  ],
  Support: [
    { label: 'Documentation',      to: '/contact'  },
    { label: 'API Reference',      to: '/contact'  },
    { label: 'System Status',      to: '/contact'  },
    { label: 'Security',           to: '/services' },
    { label: 'Enterprise',         to: '/contact'  },
  ],
}

const socialLinks = [
  {
    label: 'Twitter / X',
    href: '#',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: '#',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
  {
    label: 'GitHub',
    href: '#',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
      </svg>
    ),
  },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top container">
        {/* Brand column */}
        <div className="footer__brand">
          <Link to="/" className="footer__logo" aria-label="Zentrova">
            <ZentrovaLogo />
            <span>Zentrova</span>
          </Link>
          <p className="footer__tagline">
            The operating system for modern business. Power your enterprise with real-time intelligence and AI-driven automation.
          </p>
          <div className="footer__socials">
            {socialLinks.map(({ label, href, icon }) => (
              <a key={label} href={href} className="footer__social-link" aria-label={label}>
                {icon}
              </a>
            ))}
          </div>
          <div className="footer__status">
            <span className="status-dot" />
            <span>All systems operational</span>
          </div>
        </div>

        {/* Link columns */}
        {Object.entries(footerLinks).map(([section, links]) => (
          <div key={section} className="footer__col">
            <h3 className="footer__col-title">{section}</h3>
            <ul className="footer__links">
              {links.map(({ label, to }) => (
                <li key={label}>
                  <Link to={to} className="footer__link">{label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <hr className="divider" />

      <div className="footer__bottom container">
        <p className="footer__copy">
          &copy; {new Date().getFullYear()} Zentrova, Inc. All rights reserved.
        </p>
        <div className="footer__legal">
          <Link to="/contact" className="footer__link">Privacy Policy</Link>
          <Link to="/contact" className="footer__link">Terms of Service</Link>
          <Link to="/contact" className="footer__link">Cookie Settings</Link>
        </div>
      </div>

      <style>{`
        .footer {
          background: #080c12;
          border-top: 1px solid rgba(108, 63, 255, 0.15);
          padding-top: 72px;
        }

        .footer__top {
          display: grid;
          grid-template-columns: 1.8fr repeat(3, 1fr);
          gap: 48px;
          padding-bottom: 64px;
        }

        .footer__logo {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          font-size: 1.2rem;
          font-weight: 800;
          letter-spacing: -0.03em;
          background: linear-gradient(135deg, #fff 30%, #8b5cf6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 16px;
        }

        .footer__logo svg {
          flex-shrink: 0;
        }

        .footer__tagline {
          color: #475569;
          font-size: 0.9rem;
          line-height: 1.7;
          margin-bottom: 24px;
          max-width: 280px;
        }

        .footer__socials {
          display: flex;
          gap: 12px;
          margin-bottom: 20px;
        }

        .footer__social-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          border-radius: 8px;
          background: rgba(108, 63, 255, 0.1);
          border: 1px solid rgba(108, 63, 255, 0.2);
          color: #94a3b8;
          transition: all 0.2s ease;
        }

        .footer__social-link:hover {
          background: rgba(108, 63, 255, 0.2);
          border-color: rgba(108, 63, 255, 0.5);
          color: #fff;
          transform: translateY(-2px);
        }

        .footer__status {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.8125rem;
          color: #4ade80;
        }

        .status-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #4ade80;
          box-shadow: 0 0 8px rgba(74, 222, 128, 0.6);
          animation: pulse-dot 2s ease-in-out infinite;
        }

        @keyframes pulse-dot {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }

        .footer__col-title {
          font-size: 0.8125rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #fff;
          margin-bottom: 20px;
        }

        .footer__links {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .footer__link {
          font-size: 0.9rem;
          color: #475569;
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .footer__link:hover {
          color: #8b5cf6;
        }

        .footer__bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 24px 24px;
        }

        .footer__copy {
          font-size: 0.875rem;
          color: #334155;
        }

        .footer__legal {
          display: flex;
          gap: 24px;
        }

        @media (max-width: 1024px) {
          .footer__top {
            grid-template-columns: 1fr 1fr;
          }
          .footer__brand {
            grid-column: 1 / -1;
          }
        }

        @media (max-width: 640px) {
          .footer__top {
            grid-template-columns: 1fr;
            gap: 32px;
          }
          .footer__brand {
            grid-column: auto;
          }
          .footer__bottom {
            flex-direction: column;
            gap: 16px;
            text-align: center;
          }
          .footer__legal {
            flex-wrap: wrap;
            justify-content: center;
            gap: 16px;
          }
        }
      `}</style>
    </footer>
  )
}
