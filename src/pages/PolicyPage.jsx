import { useState, useEffect, useRef } from 'react'
import styles from './PolicyPage.module.css'

function WarningBox({ text, type = 'warning' }) {
  return (
    <div className={`${styles.alertBox} ${styles[type]}`}>
      <p>{text}</p>
    </div>
  )
}

function HighlightBox({ text }) {
  return (
    <div className={styles.highlightBox}>
      <p>{text}</p>
    </div>
  )
}

function GreenBox({ text }) {
  return <div className={`${styles.alertBox} ${styles.success}`}><p>{text}</p></div>
}

function RedBox({ text }) {
  return <div className={`${styles.alertBox} ${styles.danger}`}><p>{text}</p></div>
}

function AmberBox({ text }) {
  return <div className={`${styles.alertBox} ${styles.warning}`}><p>{text}</p></div>
}

function ContactBlock({ contact }) {
  return (
    <div className={styles.contactBlock}>
      <p className={styles.contactRole}>{contact.role}</p>
      {contact.company && <p className={styles.contactMeta}>{contact.company}</p>}
      <a href={`mailto:${contact.email}`} className={styles.contactEmail}>{contact.email}</a>
      {contact.response && <p className={styles.contactMeta}>{contact.response}</p>}
    </div>
  )
}

function RefundTable({ rows }) {
  return (
    <div className={styles.tableWrap}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Scenario</th>
            <th>Outcome</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>
              <td className={styles.tableScenario}>{row.scenario}</td>
              <td className={styles.tableOutcome}>{row.outcome}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function Section({ section, accentColor }) {
  return (
    <div id={section.id} className={styles.section}>
      <h2 className={styles.sectionHeading} style={{ borderLeftColor: accentColor }}>
        {section.heading}
      </h2>

      {section.highlight && <HighlightBox text={section.highlight} />}
      {section.warning && <WarningBox text={section.warning} type="warning" />}

      {section.content && (
        section.content.includes('\n\n')
          ? section.content.split('\n\n').map((para, i) => (
              <p key={i} className={styles.bodyText}>{para}</p>
            ))
          : <p className={styles.bodyText}>{section.content}</p>
      )}

      {section.redBox && <RedBox text={section.redBox} />}
      {section.greenBox && <GreenBox text={section.greenBox} />}
      {section.amberBox && <AmberBox text={section.amberBox} />}

      {section.bullets && (
        <ul className={styles.bulletList}>
          {section.bullets.map((b, i) => (
            <li key={i} className={styles.bulletItem}>
              <span className={styles.bulletDot} style={{ background: accentColor }} />
              {b}
            </li>
          ))}
        </ul>
      )}

      {section.subsections && section.subsections.map((sub, i) => (
        <div key={i} className={styles.subsection}>
          <h3 className={styles.subHeading} style={{ color: accentColor }}>{sub.title}</h3>
          <p className={styles.bodyText}>{sub.text}</p>
          {sub.greenBox && <GreenBox text={sub.greenBox} />}
          {sub.amberBox && <AmberBox text={sub.amberBox} />}
        </div>
      ))}

      {section.note && (
        <div className={styles.noteBox} style={{ borderColor: accentColor + '40', background: accentColor + '08' }}>
          <p className={styles.noteText}>{section.note}</p>
        </div>
      )}

      {section.content2 && (
        section.content2.includes('\n\n')
          ? section.content2.split('\n\n').map((para, i) => (
              <p key={i} className={styles.bodyText}>{para}</p>
            ))
          : <p className={styles.bodyText}>{section.content2}</p>
      )}

      {section.email && (
        <a href={`mailto:${section.email}`} className={styles.emailLink} style={{ color: accentColor }}>
          {section.email}
        </a>
      )}

      {section.table && <RefundTable rows={section.table} />}
      {section.contact && <ContactBlock contact={section.contact} />}
    </div>
  )
}

export default function PolicyPage({ data, accentColor }) {
  const [activeId, setActiveId] = useState(data.sections[0]?.id)
  const observerRef = useRef(null)

  useEffect(() => {
    const options = { rootMargin: '-20% 0px -60% 0px', threshold: 0 }
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) setActiveId(entry.target.id)
      })
    }, options)
    data.sections.forEach(s => {
      const el = document.getElementById(s.id)
      if (el) observerRef.current.observe(el)
    })
    return () => observerRef.current?.disconnect()
  }, [data])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className={styles.page}>
      {/* Accent orb */}
      <div
        className={styles.accentOrb}
        style={{ background: `radial-gradient(circle, ${accentColor}22 0%, transparent 70%)` }}
        aria-hidden
      />

      {/* Page header */}
      <div className={styles.pageHeader}>
        <div className={styles.pageHeaderInner}>
          <h1 className={styles.pageTitle}>
            {data.title}
            {data.subtitle && <span className={styles.pageTitleGrad} style={{
              background: `linear-gradient(135deg, ${accentColor}, #A43DFF)`,
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}> {data.subtitle}</span>}
          </h1>
          <p className={styles.pageEffective}>{data.effective}</p>
        </div>
      </div>

      {/* Body: sidebar + content */}
      <div className={styles.body}>
        {/* Sidebar TOC */}
        <aside className={styles.sidebar}>
          <div className={styles.sidebarSticky}>
            <p className={styles.sidebarLabel}>On this page</p>
            <nav>
              {data.sections.map(s => (
                <button
                  key={s.id}
                  className={`${styles.tocItem} ${activeId === s.id ? styles.tocItemActive : ''}`}
                  style={activeId === s.id ? { color: accentColor, borderLeftColor: accentColor } : {}}
                  onClick={() => scrollTo(s.id)}
                >
                  {s.heading}
                </button>
              ))}
            </nav>
          </div>
        </aside>

        {/* Content */}
        <article className={styles.content}>
          {data.sections.map(section => (
            <Section key={section.id} section={section} accentColor={accentColor} />
          ))}

          <div className={styles.lastUpdated}>
            <p>{data.effective}</p>
            <p>Contact: <a href="mailto:ayaazatom@gmail.com" style={{ color: accentColor }}>ayaazatom@gmail.com</a></p>
          </div>
        </article>
      </div>
    </div>
  )
}