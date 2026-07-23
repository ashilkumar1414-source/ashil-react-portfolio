import { PROCESS_STEPS } from '../../data/portfolio';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { SectionHeader } from '../ui/SectionHeader/SectionHeader';
import './Process.scss';

export function Process() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>();

  return (
    <section className="process" aria-labelledby="process-title" ref={ref}>
      <div className={`container reveal ${isVisible ? 'is-visible' : ''}`}>
        <SectionHeader
          eyebrow="Process"
          titleId="process-title"
          title="How I deliver frontend work"
          lead="A structured path from understanding the problem to shipping production-ready React applications."
        />

        <ol className="process__grid">
          {PROCESS_STEPS.map((step, i) => (
            <li
              key={step.number}
              className={`process__item reveal ${isVisible ? 'is-visible' : ''} reveal-delay-${(i % 4) + 1}`}
            >
              <span className="process__number">{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
