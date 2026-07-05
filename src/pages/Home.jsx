import { Link } from 'react-router-dom'
import styles from './Home.module.css'

const policies = [
  {
    to: '/terms',
    icon: '📜',
    title: 'Terms & Conditions',
    desc: 'Rules governing use of the Wellona app, wallet, calls, and Provider payouts.',
    accent: '#A43DFF',
    gradient: 'linear-gradient(135deg, rgba(164,61,255,0.15), rgba(164,61,255,0.03))',
    border: 'rgba(164,61,255,0.3)',
  },
  {
    to: '/privacy',
    icon: '🔒',
    title: 'Privacy Policy',
    desc: 'How we collect, use, store, and protect your personal data. India only.',
    accent: '#2F8FFF',
    gradient: 'linear-gradient(135deg, rgba(47,143,255,0.15), rgba(47,143,255,0.03))',
    border: 'rgba(47,143,255,0.3)',
  },
  {
    to: '/refund',
    icon: '💳',
    title: 'Refund Policy',
    desc: 'When wallet top-up refunds are available and how to request one.',
    accent: '#FF2BD6',
    gradient: 'linear-gradient(135deg, rgba(255,43,214,0.15), rgba(255,43,214,0.03))',
    border: 'rgba(255,43,214,0.3)',
  },
  {
    to: '/child-safety',
    icon: '🛡️',
    title: 'Child Safety Standards',
    desc: 'Our zero-tolerance policy on CSAE and how we protect minors.',
    accent: '#00D26A',
    gradient: 'linear-gradient(135deg, rgba(0,210,106,0.15), rgba(0,210,106,0.03))',
    border: 'rgba(0,210,106,0.3)',
  },
]

export default function Home() {
  return (
    <div className={styles.page}>
      {/* Orb background */}
      <div className={styles.orb1} aria-hidden />
      <div className={styles.orb2} aria-hidden />

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.badge}>Legal Information</div>
        <h1 className={styles.heroTitle}>
          Wellona
          <span className={styles.heroGradient}> Policies</span>
        </h1>
        <p className={styles.heroSub}>
          Transparent, clear, and written specifically for how the Wellona app works.
          Select a document below to read it in full.
        </p>
        <div className={styles.heroMeta}>
          <span className={styles.metaPill}>🇮🇳 India Only</span>
          <span className={styles.metaPill}>📅 Effective July 2025</span>
          <span className={styles.metaPill}>⚖️ Indian Law</span>
        </div>
      </section>

      {/* Policy cards */}
      <section className={styles.cards}>
        {policies.map(p => (
          <Link key={p.to} to={p.to} className={styles.card} style={{ background: p.gradient, borderColor: p.border }}>
            <div className={styles.cardIcon}>{p.icon}</div>
            <div className={styles.cardBody}>
              <h2 className={styles.cardTitle} style={{ color: p.accent }}>{p.title}</h2>
              <p className={styles.cardDesc}>{p.desc}</p>
            </div>
            <span className={styles.cardArrow} style={{ color: p.accent }}>→</span>
          </Link>
        ))}
      </section>

      {/* Contact strip */}
      <section className={styles.contact}>
        <div className={styles.contactInner}>
          <a href="mailto:ayaazatom@gmail.com" className={styles.contactEmail}>
            ayaazatom@gmail.com
          </a>
        </div>
      </section>
    </div>
  )
}