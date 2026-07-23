import { WHY_CARDS } from '../../data/portfolio';
import type { WhyCard } from '../../data/types';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { SectionHeader } from '../ui/SectionHeader/SectionHeader';
import './WhyMe.scss';

function WhyIcon({ icon }: { icon: WhyCard['icon'] }) {
  if (icon === 'react') {
    return (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
        <circle cx="12" cy="12" r="2.2" fill="currentColor" stroke="none" />
        <ellipse cx="12" cy="12" rx="9" ry="3.5" />
        <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(-60 12 12)" />
      </svg>
    );
  }
  if (icon === 'pixel') {
    return (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
        <rect x="3" y="3" width="7" height="7" rx="1.5" />
        <rect x="14" y="3" width="7" height="7" rx="1.5" />
        <rect x="3" y="14" width="7" height="7" rx="1.5" />
        <rect x="14" y="14" width="7" height="7" rx="1.5" />
      </svg>
    );
  }
  if (icon === 'ai') {
    return (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
        <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1" />
        <circle cx="12" cy="12" r="3.5" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <path d="M4 19V5a1 1 0 0 1 1-1h6l2 2h6a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1Z" />
      <path d="M8 12h8M8 15h5" />
    </svg>
  );
}

export function WhyMe() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>();

  return (
    <section className="why-me" aria-labelledby="why-me-title" ref={ref}>
      <div className={`container reveal ${isVisible ? 'is-visible' : ''}`}>
        <SectionHeader
          eyebrow="Why Work With Me"
          titleId="why-me-title"
          title="What I bring to your product"
          lead="Modern React craftsmanship with AI product experience and a sharp eye for UI quality."
        />

        <div className="why-me__grid">
          {WHY_CARDS.map((card, i) => (
            <article
              key={card.title}
              className={`why-me__card reveal ${isVisible ? 'is-visible' : ''} reveal-delay-${i + 1}`}
            >
              <div className="why-me__icon">
                <WhyIcon icon={card.icon} />
              </div>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
