import type { ProjectItem } from '../../data/types';
import './ProjectVisual.scss';

const LABELS: Record<ProjectItem['visual'], string> = {
  galaxiq: 'GalaxiQ.ai',
  marketing: 'AI Marketing',
  chatbot: 'AI Chat',
  analytics: 'Analytics',
  campaign: 'Campaigns',
  farming: 'Farming AI',
  billing: 'Billing SaaS',
  restro: 'Restro OS',
};

export function ProjectVisual({ type }: { type: ProjectItem['visual'] }) {
  return (
    <div className={`project-visual project-visual--${type}`} aria-hidden="true">
      <div className="project-visual__surface">
        <div className="project-visual__bar">
          <span />
          <span />
          <span />
          <em>{LABELS[type]}</em>
        </div>
        <div className="project-visual__content">
          {type === 'analytics' && (
            <div className="project-visual__charts">
              <i style={{ height: '42%' }} />
              <i style={{ height: '68%' }} />
              <i style={{ height: '55%' }} />
              <i style={{ height: '82%' }} />
              <i style={{ height: '48%' }} />
            </div>
          )}
          {type === 'chatbot' && (
            <div className="project-visual__chat">
              <span className="is-bot" />
              <span className="is-user" />
              <span className="is-bot" />
            </div>
          )}
          {(type === 'galaxiq' || type === 'marketing' || type === 'campaign') && (
            <div className="project-visual__cards">
              <span />
              <span />
              <span />
            </div>
          )}
          {type === 'farming' && (
            <div className="project-visual__farm">
              <span className="leaf" />
              <span className="panel" />
            </div>
          )}
          {type === 'billing' && (
            <div className="project-visual__billing">
              <div className="project-visual__billing-row">
                <span className="sku" />
                <span className="amt" />
              </div>
              <div className="project-visual__billing-row">
                <span className="sku" />
                <span className="amt" />
              </div>
              <div className="project-visual__billing-total" />
            </div>
          )}
          {type === 'restro' && (
            <div className="project-visual__restro">
              <span className="qr" />
              <div className="menu">
                <i />
                <i />
                <i />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
