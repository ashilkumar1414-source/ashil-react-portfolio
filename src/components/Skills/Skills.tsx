import { SKILL_CATEGORIES } from '../../data/portfolio';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { SectionHeader } from '../ui/SectionHeader/SectionHeader';
import './Skills.scss';

export function Skills() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>();

  return (
    <section id="skills" className="skills" aria-labelledby="skills-title" ref={ref}>
      <div className={`container reveal ${isVisible ? 'is-visible' : ''}`}>
        <SectionHeader
          eyebrow="Skills"
          titleId="skills-title"
          title="Technologies I work with"
          lead="A modern React-focused stack for building scalable, AI-powered product experiences."
        />

        <div className="skills__grid">
          {SKILL_CATEGORIES.map((category, i) => (
            <article
              key={category.title}
              className={`skills__card reveal ${isVisible ? 'is-visible' : ''} reveal-delay-${(i % 4) + 1}`}
            >
              <h3>{category.title}</h3>
              <ul>
                {category.skills.map((skill) => (
                  <li key={skill.name} className={skill.highlighted ? 'is-highlighted' : ''}>
                    {skill.name}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
