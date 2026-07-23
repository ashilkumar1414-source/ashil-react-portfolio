import { EXPERIENCE } from '../../data/portfolio';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { SectionHeader } from '../ui/SectionHeader/SectionHeader';
import './Experience.scss';

export function Experience() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>();
  const job = EXPERIENCE[0];

  return (
    <section id="experience" className="experience" aria-labelledby="experience-title" ref={ref}>
      <div className={`container reveal ${isVisible ? 'is-visible' : ''}`}>
        <SectionHeader
          eyebrow="Experience"
          titleId="experience-title"
          title="Building AI-powered products in production"
          lead="React frontend development from concept to shipped features."
        />

        <article className="experience__card">
          <div className="experience__timeline" aria-hidden="true">
            <span className="experience__dot" />
            <span className="experience__line" />
          </div>

          <div className="experience__body">
            <div className="experience__meta">
              <p className="experience__company">{job.company}</p>
              <p className="experience__period">{job.period}</p>
            </div>
            <h3 className="experience__role">{job.role}</h3>
            <p className="experience__desc">{job.description}</p>
            <ul className="experience__points">
              {job.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        </article>
      </div>
    </section>
  );
}
