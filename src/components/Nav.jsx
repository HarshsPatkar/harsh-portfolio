import { useState, useEffect } from 'react'
import '../styles/Nav.css'

const NAV_LINKS = [
  { label: 'home',       href: '#home' },
  { label: 'about',      href: '#about' },
  { label: 'experience', href: '#experience' },
  { label: 'projects',   href: '#projects' },
  { label: 'learning',   href: '#learning' },
  { label: 'contact',    href: '#contact' },
]

export default function Nav() {
  const [active, setActive]     = useState('home')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const sections = NAV_LINKS.map(l => l.href.slice(1))
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    sections.forEach(id => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const handleClick = (e, href) => {
    e.preventDefault()
    const id = href.slice(1)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <nav className="nav" role="navigation" aria-label="Main navigation">
      <div className="nav__inner">
        <a
          href="#home"
          className="nav__logo"
          onClick={e => handleClick(e, '#home')}
        >
          harsh.patkar
        </a>

        <ul className="nav__links">
          {NAV_LINKS.map(link => (
            <li key={link.label}>
              <a
                href={link.href}
                className={`nav__link${active === link.href.slice(1) ? ' nav__link--active' : ''}`}
                onClick={e => handleClick(e, link.href)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className={`nav__toggle${menuOpen ? ' nav__toggle--open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div className={`nav__mobile${menuOpen ? ' nav__mobile--open' : ''}`}>
        {NAV_LINKS.map(link => (
          <a
            key={link.label}
            href={link.href}
            className="nav__mobile-link"
            onClick={e => handleClick(e, link.href)}
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  )
}
