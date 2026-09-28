import type { ReactNode } from 'react';
import Reveal from '../Reveal/Reveal';
import './SectionHeading.css';

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: 'left' | 'center';
  id?: string;
  action?: ReactNode;
}

export default function SectionHeading({ eyebrow, title, subtitle, align = 'center', id, action }: SectionHeadingProps) {
  return (
    <Reveal className={`section-heading section-heading--${align}`}>
      <div className="section-heading__text">
        {eyebrow && <p className="eyebrow section-heading__eyebrow">{eyebrow}</p>}
        <h2 id={id} className="section-heading__title">
          {title}
        </h2>
        {subtitle && <p className="section-heading__subtitle">{subtitle}</p>}
      </div>
      {action && <div className="section-heading__action">{action}</div>}
    </Reveal>
  );
}
