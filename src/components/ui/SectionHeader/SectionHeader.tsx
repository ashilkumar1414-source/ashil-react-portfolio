import './SectionHeader.scss';

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  titleId?: string;
  lead?: string;
  align?: 'left' | 'center';
};

export function SectionHeader({
  eyebrow,
  title,
  titleId,
  lead,
  align = 'left',
}: SectionHeaderProps) {
  return (
    <header className={`section-header section-header--${align}`}>
      <p className="section-eyebrow">{eyebrow}</p>
      <h2 id={titleId} className="section-title">
        {title}
      </h2>
      {lead ? <p className="section-lead">{lead}</p> : null}
    </header>
  );
}
