import { useEffect, useState } from 'react';
import { NAV_LINKS, PROFILE } from '../../data/portfolio';
import { useActiveSection } from '../../hooks/useActiveSection';
import { scrollToId } from '../../hooks/helpers';
import { Button } from '../ui/Button/Button';
import { ThemeToggle } from '../ui/ThemeToggle/ThemeToggle';
import './Navbar.scss';

export function Navbar() {
  const { activeId, scrolled } = useActiveSection();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const handleNav = (id: string) => {
    setMenuOpen(false);
    scrollToId(id);
  };

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''} ${menuOpen ? 'navbar--open' : ''}`}>
      <div className="navbar__inner container">
        <a
          href="#home"
          className="navbar__logo"
          onClick={(e) => {
            e.preventDefault();
            handleNav('home');
          }}
        >
          ASHIL KUMAR
        </a>

        <nav className="navbar__nav" aria-label="Primary">
          <ul className="navbar__links">
            {NAV_LINKS.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  className={`navbar__link ${activeId === link.id ? 'is-active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav(link.id);
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="navbar__actions">
          <ThemeToggle />
          <Button
            variant="primary"
            size="sm"
            href={PROFILE.resumePath}
            download={PROFILE.resumeFileName}
            className="navbar__resume"
          >
            Resume
          </Button>
          <button
            type="button"
            className={`navbar__burger ${menuOpen ? 'is-open' : ''}`}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`navbar__mobile ${menuOpen ? 'is-open' : ''}`}
        hidden={!menuOpen}
      >
        <nav aria-label="Mobile">
          <ul>
            {NAV_LINKS.map((link, i) => (
              <li key={link.id} style={{ transitionDelay: `${i * 40}ms` }}>
                <a
                  href={link.href}
                  className={activeId === link.id ? 'is-active' : ''}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav(link.id);
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <Button variant="primary" href={PROFILE.resumePath} download={PROFILE.resumeFileName}>
          Download Resume
        </Button>
      </div>
    </header>
  );
}
