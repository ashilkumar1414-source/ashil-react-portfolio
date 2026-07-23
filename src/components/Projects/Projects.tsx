import { useMemo, useState } from 'react';
import { PROJECT_FILTERS, PROJECTS } from '../../data/portfolio';
import type { ProjectFilter, ProjectItem } from '../../data/types';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { Button } from '../ui/Button/Button';
import { SectionHeader } from '../ui/SectionHeader/SectionHeader';
import { ProjectVisual } from './ProjectVisual';
import './Projects.scss';

function ProjectCard({ project }: { project: ProjectItem }) {
  return (
    <article className="project-card">
      <div className="project-card__visual">
        <ProjectVisual type={project.visual} />
      </div>
      <div className="project-card__body">
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <p className="project-card__contribution">
          <strong>Contribution:</strong> {project.contribution}
        </p>
        <ul className="project-card__tech">
          {project.technologies.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
        <div className="project-card__actions">
          {project.githubUrl ? (
            <Button variant="outline" size="sm" href={project.githubUrl} external>
              GitHub
            </Button>
          ) : (
            <Button variant="outline" size="sm" disabled title="Link coming soon">
              GitHub
            </Button>
          )}
          {project.liveUrl ? (
            <Button variant="secondary" size="sm" href={project.liveUrl} external>
              Live Demo
            </Button>
          ) : (
            <Button variant="secondary" size="sm" disabled title="Demo coming soon">
              Live Demo
            </Button>
          )}
        </div>
      </div>
    </article>
  );
}

export function Projects() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>();
  const [filter, setFilter] = useState<ProjectFilter>('All');

  const filtered = useMemo(
    () => PROJECTS.filter((p) => p.filters.includes(filter)),
    [filter],
  );

  return (
    <section id="projects" className="projects" aria-labelledby="projects-title" ref={ref}>
      <div className={`container reveal ${isVisible ? 'is-visible' : ''}`}>
        <SectionHeader
          eyebrow="Projects"
          titleId="projects-title"
          title="Featured work"
          lead="Selected product experiences across React, AI platforms, SaaS, and dashboards."
        />

        <div className="projects__filters" role="tablist" aria-label="Project filters">
          {PROJECT_FILTERS.map((item) => (
            <button
              key={item}
              type="button"
              role="tab"
              aria-selected={filter === item}
              className={`projects__filter ${filter === item ? 'is-active' : ''}`}
              onClick={() => setFilter(item)}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="projects__grid">
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
