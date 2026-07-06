import { Outlet, NavLink, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import styles from './Layout.module.css'
import logo from '../assets/logo.png' 

const navLinks = [
  { to: '/', label: 'Home', exact: true },
  { to: '/terms', label: 'Terms & Conditions' },
  { to: '/privacy', label: 'Privacy Policy' },
  { to: '/refund', label: 'Refund Policy' },
  { to: '/child-safety', label: 'Child Safety' },
]

export default function Layout() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setMenuOpen(false)
    window.scrollTo(0, 0)
  }, [location.pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className={styles.root}>
      {/* NAV */}
      <header className={`${styles.header} ${scrolled ? styles.headerScrolled : ''}`}>
        <div className={styles.headerInner}>
          
          {/* LOGO SECTION UPDATED HERE */}
          <NavLink to="/" className={styles.logo}>
            <img src={logo} alt="Wellona Logo" className={styles.logoImg}/>
            <span className={styles.logoText}>Wellona</span>
          </NavLink>

          <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`}>
            {navLinks.map(link => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.exact}
                className={({ isActive }) =>
                  `${styles.navLink} ${isActive ? styles.navLinkActive : ''}`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <button
            className={styles.hamburger}
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span className={`${styles.bar} ${menuOpen ? styles.barOpen1 : ''}`} />
            <span className={`${styles.bar} ${menuOpen ? styles.barOpen2 : ''}`} />
            <span className={`${styles.bar} ${menuOpen ? styles.barOpen3 : ''}`} />
          </button>
        </div>
      </header>

      {/* CONTENT */}
      <main className={styles.main}>
        <Outlet />
      </main>

      {/* FOOTER */}
      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <div className={styles.footerBrand}>
            <span className={styles.footerLogo}>
              {/* Optional: Add it to the footer logo section as well */}
              <img src={logo} alt="Wellona Logo" className={styles.logoImg} />
              <span className={styles.logoText}>Wellona</span>
            </span>
            <p className={styles.footerTagline}>Friends Who Listen</p>
          </div>

          <div className={styles.footerLinks}>
            <p className={styles.footerLinksLabel}>Legal</p>
            {navLinks.filter(l => l.to !== '/').map(link => (
              <NavLink key={link.to} to={link.to} className={styles.footerLink}>
                {link.label}
              </NavLink>
            ))}
          </div>

          <div className={styles.footerContact}>
            <p className={styles.footerLinksLabel}>Contact</p>
            <a href="mailto:ayaazatom@gmail.com" className={styles.footerLink}>
              ayaazatom@gmail.com
            </a>
            <p className={styles.footerMeta}>Response within 24 hours</p>
            <p className={styles.footerMeta}>Grievances resolved within 15 days</p>
          </div>
        </div>
      </footer>
    </div>
  )
}