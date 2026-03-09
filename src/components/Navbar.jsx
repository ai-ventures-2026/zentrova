import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

const ZentrovaLogo = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect width="36" height="36" rx="10" fill="#6c3fff" />
    <path d="M9 10h18l-11 8 11 8H9" stroke="#1affb2" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    <circle cx="27" cy="18" r="2.5" fill="#1affb2" />
  </svg>
)

const navLinks = [
  { to: '/',         label: 'Home'     },
  { to: '/services', label: 'Services' },
  { to: '/about',    label: 'About'    },
  { to: '/contact',  label: 'Contact'  },
]

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)
  const location                   = useLocation()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  // Close mobile menu on route change
  useEffect(() => { setMenuOpen(false) }, [location])

  return (
    <header
      className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}
      role="banner"
    >
      <div className="navbar__inner container">
        {/* Logo */}
        <Link to="/" className="navbar__logo" aria-label="Zentrova – Home">
          <ZentrovaLogo />
          <span className="navbar__brand">Zentrova</span>
        </Link>

        {/* Desktop nav */}
        <nav className="navbar__nav" aria-label="Main navigation">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                `navbar__link${isActive ? ' navbar__link--active' : ''}`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        {/* CTA buttons */}
        <div className="navbar__actions">
          <Link to="/contact" className="btn btn-outline btn-sm">Log In</Link>
          <Link to="/contact" className="btn btn-primary btn-sm">Get Started</Link>
        </div>

        {/* Hamburger */}
        <button
          className={`navbar__hamburger${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen(o => !o)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile drawer */}
      <div className={`navbar__drawer${menuOpen ? ' navbar__drawer--open' : ''}`} aria-hidden={!menuOpen}>
        <nav>
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                `navbar__drawer-link${isActive ? ' active' : ''}`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>
        <div className="navbar__drawer-actions">
          <Link to="/contact" className="btn btn-outline">Log In</Link>
          <Link to="/contact" className="btn btn-primary">Get Started</Link>
        </div>
      </div>

      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          transition: background 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
          border-bottom: 1px solid transparent;
        }

        .navbar--scrolled {
          background: rgba(13, 17, 23, 0.88);
          border-bottom-color: rgba(108, 63, 255, 0.2);
          box-shadow: 0 4px 32px rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
        }

        .navbar__inner {
          display: flex;
          align-items: center;
          height: 72px;
          gap: 40px;
        }

        .navbar__logo {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-shrink: 0;
          text-decoration: none;
        }

        .navbar__brand {
          font-size: 1.25rem;
          font-weight: 800;
          letter-spacing: -0.03em;
          background: linear-gradient(135deg, #fff 30%, #8b5cf6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .navbar__nav {
          display: flex;
          align-items: center;
          gap: 4px;
          flex: 1;
        }

        .navbar__link {
          padding: 8px 16px;
          border-radius: 8px;
          font-size: 0.9375rem;
          font-weight: 500;
          color: #94a3b8;
          transition: color 0.2s ease, background 0.2s ease;
          text-decoration: none;
        }

        .navbar__link:hover {
          color: #fff;
          background: rgba(108, 63, 255, 0.1);
        }

        .navbar__link--active {
          color: #fff;
          background: rgba(108, 63, 255, 0.15);
        }

        .navbar__actions {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-shrink: 0;
        }

        .btn-sm {
          padding: 8px 20px;
          font-size: 0.875rem;
          border-radius: 8px;
        }

        /* Hamburger */
        .navbar__hamburger {
          display: none;
          flex-direction: column;
          justify-content: center;
          gap: 5px;
          width: 40px;
          height: 40px;
          background: rgba(108, 63, 255, 0.1);
          border: 1px solid rgba(108, 63, 255, 0.25);
          border-radius: 8px;
          padding: 8px;
          cursor: pointer;
          margin-left: auto;
        }

        .navbar__hamburger span {
          display: block;
          height: 2px;
          background: #fff;
          border-radius: 2px;
          transition: all 0.25s ease;
          transform-origin: center;
        }

        .navbar__hamburger.open span:nth-child(1) {
          transform: translateY(7px) rotate(45deg);
        }
        .navbar__hamburger.open span:nth-child(2) {
          opacity: 0;
        }
        .navbar__hamburger.open span:nth-child(3) {
          transform: translateY(-7px) rotate(-45deg);
        }

        /* Drawer */
        .navbar__drawer {
          display: none;
          flex-direction: column;
          background: rgba(13, 17, 23, 0.98);
          border-top: 1px solid rgba(108, 63, 255, 0.2);
          padding: 24px;
          gap: 8px;
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.35s ease;
        }

        .navbar__drawer--open {
          max-height: 500px;
        }

        .navbar__drawer-link {
          display: block;
          padding: 12px 16px;
          border-radius: 8px;
          font-size: 1rem;
          font-weight: 500;
          color: #94a3b8;
          text-decoration: none;
          transition: color 0.2s, background 0.2s;
        }

        .navbar__drawer-link:hover,
        .navbar__drawer-link.active {
          color: #fff;
          background: rgba(108, 63, 255, 0.12);
        }

        .navbar__drawer-actions {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-top: 16px;
          padding-top: 16px;
          border-top: 1px solid rgba(108, 63, 255, 0.15);
        }

        .navbar__drawer-actions .btn {
          justify-content: center;
          width: 100%;
        }

        @media (max-width: 900px) {
          .navbar__nav,
          .navbar__actions {
            display: none;
          }
          .navbar__hamburger {
            display: flex;
          }
          .navbar__drawer {
            display: flex;
          }
        }
      `}</style>
    </header>
  )
}
