import { useState } from 'react';
import './Header.css';

/** Elementor template #13 "Header" — absolute, z-index 2, boxed 1720, padding 32/20.
 *  Columns: logo 20% · nav 60% · button 20% (flex-end).
 *
 *  Menu structure is WordPress "Main Menu" (5 top-level items), not the demo's
 *  "Mega Menu" (Demo / Portfolio / RTL / Shop), which exists to showcase the
 *  theme's 92 demos rather than to serve a real site.
 */
const NAV = [
  { label: 'Home',     href: '/' },
  { label: 'About',    href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Work',     href: '/work' },
  { label: 'Company',  href: '#', children: [
      { label: 'Team',   href: '/team' },
      { label: 'Career', href: '/career' },
      { label: 'FAQ',    href: '/faq' },
  ] },
  { label: 'Blog',     href: '/blog' },
  { label: 'Contact',  href: '/contact' },
  { label: 'Search',   href: '/search' },
];

/**
 * `variant="inner"` = template #7259 "Header Inner Pages":
 *   in-flow rather than absolute (inner pages have a light ground, so the
 *   header does not overlay a hero), padding 29 instead of 32,
 *   columns 15/70/15 instead of 20/60/20, button "Lets Talk".
 * `variant="dark"` = template #6033 "Header Dark Page":
 *   bg #121212 with white nav/logo, columns 20/60/20, padding 32 — used above
 *   dark heroes (Portfolio Details) so header and hero read as one surface.
 * Template #8558 "Header inner" is byte-for-byte the same layout as #13,
 * so it needs no variant of its own.
 */
export default function Header({ variant = 'overlay' }) {
  const [open, setOpen] = useState(false);

  return (
    <header className={`header header--${variant}`}>
      <div className="header__inner">
        <div className="header__logo-col">
          <a className="header__logo" href="/" aria-label="Arolax home">
            <img src={variant === 'dark' ? '/assets/Logo_white.png' : '/assets/logo.png'} alt="Arolax" />
          </a>
        </div>

        <div className={`header__nav-col${open ? ' is-open' : ''}`}>
          <nav>
            <ul className="nav">
              {NAV.map((item) => (
                <li key={item.label} className={`nav__item${item.children ? ' nav__item--has-children' : ''}`}>
                  <a className="nav__link" href={item.href}>{item.label}</a>
                  {item.children && (
                    <ul className="nav__sub">
                      {item.children.map((c) => (
                        <li key={c.label}><a href={c.href}>{c.label}</a></li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="header__action-col">
          {/* "Purchase Now" in the demo — a ThemeForest marketing button, not site nav. */}
          <a className="btn btn--primary" href="/contact">
            {variant === 'inner' ? 'Lets Talk' : 'Get in touch'}
          </a>
          <button
            className="header__burger"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}
