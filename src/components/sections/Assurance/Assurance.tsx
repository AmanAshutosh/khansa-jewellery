import { BadgeCheck, FileText, Gem, Leaf, type LucideIcon } from 'lucide-react';
import Reveal from '../../ui/Reveal/Reveal';
import './Assurance.css';

interface Pillar {
  title: string;
  copy: string;
  Icon: LucideIcon;
}

const pillars: Pillar[] = [
  { title: 'Quality', copy: 'Exceptional materials and meticulous craftsmanship.', Icon: Gem },
  { title: 'Responsibility', copy: 'Thoughtful sourcing and responsible production.', Icon: Leaf },
  { title: 'Transparency', copy: 'Clear information about every piece.', Icon: FileText },
  { title: 'Certification', copy: 'Authenticity and quality you can trust.', Icon: BadgeCheck },
];

export default function Assurance() {
  return (
    <section className="assurance section-y" id="our-promise" aria-labelledby="assurance-title">
      <div className="container-lux">
        <Reveal className="assurance__head">
          <p className="eyebrow">Our Promise</p>
          <h2 id="assurance-title" className="assurance__title">
            Crafted by Experts.
            <br />
            <em>Cherished by You.</em>
          </h2>
        </Reveal>

        <ul className="assurance__grid">
          {pillars.map(({ title, copy, Icon }, i) => (
            <Reveal as="li" key={title} className="assurance__pillar" delay={i * 0.1}>
              <Icon className="assurance__icon" size={28} strokeWidth={0.9} aria-hidden="true" />
              <h3 className="assurance__pillar-title">{title}</h3>
              <p className="assurance__copy">{copy}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
