import { PROFILE, SOCIAL_LINKS } from '../../data/portfolio';
import { scrollToId } from '../../hooks/helpers';
import { Button } from '../ui/Button/Button';
import { SocialLinks } from '../ui/SocialLinks/SocialLinks';
import { ReactVisual } from './ReactVisual';
import './Hero.scss';

export function Hero() {
  return (
    <section id="home" className="hero" aria-labelledby="hero-heading">
      <div className="hero__bg" aria-hidden="true">
        <div className="hero__orb hero__orb--1" />
        <div className="hero__orb hero__orb--2" />
        <div className="hero__grid" />
      </div>

      <div className="container hero__grid-layout">
        <div className="hero__content">
          <p className="hero__eyebrow section-eyebrow">React Frontend Developer · AI Products</p>
          <h1 id="hero-heading" className="hero__title">
            React Developer Building{' '}
            <span className="text-gradient">Modern & AI-Powered</span> Digital Experiences
          </h1>
          <p className="hero__tagline">{PROFILE.tagline}</p>

          <div className="hero__ctas">
            <Button variant="primary" size="lg" onClick={() => scrollToId('projects')}>
              View My Work
            </Button>
            <Button
              variant="outline"
              size="lg"
              href={PROFILE.resumePath}
              download={PROFILE.resumeFileName}
            >
              Download Resume
            </Button>
            <Button variant="ghost" size="lg" onClick={() => scrollToId('contact')}>
              Let's Connect
            </Button>
          </div>

          <div className="hero__social">
            <span className="hero__social-label">Find me on</span>
            <SocialLinks links={SOCIAL_LINKS} />
          </div>
        </div>

        <div className="hero__visual" aria-hidden="true">
          <ReactVisual />
        </div>
      </div>
    </section>
  );
}
