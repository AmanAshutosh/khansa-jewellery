import { memo } from 'react';
import { ArrowRight } from 'lucide-react';
import { categories } from '../../../data/categories';
import type { Category } from '../../../data/types';
import SectionHeading from '../../ui/SectionHeading/SectionHeading';
import SmartImage from '../../ui/SmartImage/SmartImage';
import Reveal from '../../ui/Reveal/Reveal';
import './CategoryBento.css';

const BentoCard = memo(function BentoCard({ category, index }: { category: Category; index: number }) {
  return (
    <Reveal as="li" className={`bento__cell bento__cell--${category.area}`} delay={(index % 4) * 0.08}>
      <a href={category.href} className="bento__card">
        <SmartImage
          image={category.image}
          className="bento__img"
          sizes={index === 0 ? '(min-width: 1024px) 42vw, 100vw' : '(min-width: 1024px) 25vw, 50vw'}
        />
        <span className="bento__shade" aria-hidden="true" />
        <span className="bento__label">
          <span className="bento__name">{category.name}</span>
          <span className="bento__explore">
            Explore <ArrowRight className="bento__arrow" size={14} strokeWidth={1.25} aria-hidden="true" />
          </span>
        </span>
      </a>
    </Reveal>
  );
});

export default function CategoryBento() {
  return (
    <section className="bento section-y" id="jewellery" aria-labelledby="bento-title">
      <div className="container-lux">
        <SectionHeading id="bento-title" eyebrow="The Jewellery" title="Shop by Category" />
        <ul className="bento__grid">
          {categories.map((c, i) => (
            <BentoCard key={c.id} category={c} index={i} />
          ))}
        </ul>
      </div>
    </section>
  );
}
