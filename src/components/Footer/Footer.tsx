import { CONTACT_INFO, PROFILE, SOCIAL_LINKS } from '../../data/portfolio';
import { scrollToId } from '../../hooks/helpers';
import { SocialLinks } from '../ui/SocialLinks/SocialLinks';
import './Footer.scss';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <p className="footer__name">{PROFILE.name}</p>
          <p className="footer__role">{PROFILE.role}</p>
        </div>

        <SocialLinks
          links={[
            ...SOCIAL_LINKS,
            { label: 'Email', url: `mailto:${CONTACT_INFO.email}`, icon: 'email' },
          ]}
        />

        <p className="footer__copy">© {year} {PROFILE.name}. All rights reserved.</p>

        <button
          type="button"
          className="footer__top"
          onClick={() => scrollToId('home')}
          aria-label="Back to top"
        >
          ↑ Back to top
        </button>
      </div>
    </footer>
  );
}
