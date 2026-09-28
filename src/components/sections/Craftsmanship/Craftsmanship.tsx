import { brand } from '../../../config/brand';
import type { ImageRef } from '../../../data/types';
import SmartImage from '../../ui/SmartImage/SmartImage';
import Button from '../../ui/Button/Button';
import Reveal from '../../ui/Reveal/Reveal';
import './Craftsmanship.css';

const primary: ImageRef = {
  src: 'craftsmanship/artisan-hands',
  alt: 'An artisan’s hands setting a stone into a gold ring at the workbench',
  motif: 'hands',
  tone: 'mocha',
};

const detail: ImageRef = {
  src: 'craftsmanship/workbench-detail',
  alt: 'Close-up of fine jewellery tools and a half-finished gold pendant',
  motif: 'spark',
  tone: 'clay',
};

const steps = [
  { n: '01', label: 'Drawn by hand' },
  { n: '02', label: 'Cast & shaped' },
  { n: '03', label: 'Set & polished' },
];

export default function Craftsmanship() {
  return (
    <section className="craft section-y" id="craftsmanship" aria-labelledby="craft-title">
      <div className="container-lux craft__grid">
        <div className="craft__visual">
          <Reveal className="craft__primary">
            <SmartImage image={primary} className="craft__img" sizes="(min-width: 1024px) 45vw, 100vw" />
          </Reveal>
          <Reveal className="craft__detail" delay={0.2}>
            <SmartImage image={detail} className="craft__img" sizes="(min-width: 1024px) 20vw, 45vw" />
          </Reveal>
        </div>

        <div className="craft__copy">
          <Reveal>
            <p className="eyebrow">Our Craft</p>
            <h2 id="craft-title" className="craft__title">
              From Hands
              <br />
              to Heirloom
            </h2>
          </Reveal>

          <Reveal delay={0.15}>
            <blockquote className="craft__quote">
              <p>
                Jewellery isn’t simply made.
                <br />
                It is shaped, refined and perfected.
              </p>
            </blockquote>
            <p className="craft__text">
              Every {brand.brandName} piece passes through the hands of skilled karigars — from the first pencil line to the final
              polish. It takes patience, and it shows.
            </p>
          </Reveal>

          <Reveal delay={0.25}>
            <ol className="craft__steps">
              {steps.map((s) => (
                <li key={s.n}>
                  <span className="craft__step-n">{s.n}</span>
                  <span className="craft__step-label">{s.label}</span>
                </li>
              ))}
            </ol>
            <Button href="#craftsmen" variant="link" arrow className="craft__cta">
              Meet the Craftsmen
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
