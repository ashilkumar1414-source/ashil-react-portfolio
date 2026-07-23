import { PROFILE, STATS } from '../../data/portfolio';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { SectionHeader } from '../ui/SectionHeader/SectionHeader';
import './About.scss';

export function About() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>();

  return (
    <section id="about" className="about" aria-labelledby="about-title" ref={ref}>
      <div className={`container reveal ${isVisible ? 'is-visible' : ''}`}>
        <SectionHeader
          eyebrow="About"
          titleId="about-title"
          title="Frontend engineer focused on React & AI products"
          lead="Building production-ready interfaces where architecture, performance, and product thinking meet."
        />

        <div className="about__grid">
          <div className="about__copy">
            {PROFILE.about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <ul className="about__highlights">
              <li>React 19 & TypeScript</li>
              <li>Reusable component systems</li>
              <li>API integration & state management</li>
              <li>Responsive, performance-focused UI</li>
            </ul>
          </div>

          <div className="about__stats">
            {STATS.map((stat, i) => (
              <article
                key={stat.label}
                className={`about__stat reveal ${isVisible ? 'is-visible' : ''} reveal-delay-${i + 1}`}
              >
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
