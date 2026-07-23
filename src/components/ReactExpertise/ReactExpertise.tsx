import { ARCHITECTURE_STEPS } from '../../data/portfolio';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { SectionHeader } from '../ui/SectionHeader/SectionHeader';
import './ReactExpertise.scss';

export function ReactExpertise() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>();

  return (
    <section className="react-expertise" aria-labelledby="react-expertise-title" ref={ref}>
      <div className={`container reveal ${isVisible ? 'is-visible' : ''}`}>
        <SectionHeader
          eyebrow="React Expertise"
          titleId="react-expertise-title"
          title="How I Build React Applications"
          lead="A clean, scalable flow from component architecture to production deployment."
          align="center"
        />

        <ol className="react-expertise__flow">
          {ARCHITECTURE_STEPS.map((step, index) => (
            <li
              key={step.title}
              className={`react-expertise__step reveal ${isVisible ? 'is-visible' : ''} reveal-delay-${(index % 4) + 1}`}
            >
              <div className="react-expertise__node">
                <span className="react-expertise__index">{String(index + 1).padStart(2, '0')}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
              {index < ARCHITECTURE_STEPS.length - 1 ? (
                <span className="react-expertise__arrow" aria-hidden="true">
                  ↓
                </span>
              ) : null}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
