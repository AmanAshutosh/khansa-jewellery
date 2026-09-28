import { ArrowRight } from 'lucide-react';
import { curatedMoments } from '../../../data/collections';
import SectionHeading from '../../ui/SectionHeading/SectionHeading';
import SmartImage from '../../ui/SmartImage/SmartImage';
import Reveal from '../../ui/Reveal/Reveal';
import './CuratedMoment.css';

export default function CuratedMoment() {
  return (
    <section className="curated section-y" id="occasions" aria-labelledby="curated-title">
      <div className="container-lux">
        <SectionHeading id="curated-title" eyebrow="Occasions" title="Curated for the Moment" />
      </div>

      <div className="curated__scroller container-lux" tabIndex={0} aria-label="Curated collections">
        <ul className="curated__list">
          {curatedMoments.map((item, i) => (
            <Reveal as="li" key={item.id} className="curated__item" delay={i * 0.12}>
              <a href={item.href} className="curated__card">
                <div className="curated__media">
                  <SmartImage image={item.image} className="curated__img" sizes="(min-width: 1024px) 30vw, 80vw" />
                </div>
                <div className="curated__body">
                  <span className="curated__index">{item.index}</span>
                  <h3 className="curated__title">{item.title}</h3>
                  <p className="curated__desc">{item.description}</p>
                  <span className="curated__cta">
                    Explore <ArrowRight className="curated__arrow" size={14} strokeWidth={1.25} aria-hidden="true" />
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
