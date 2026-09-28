import { useRef, useState, type KeyboardEvent } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { gallery, galleryTabs } from '../../../data/gallery';
import type { GalleryTab } from '../../../data/types';
import SectionHeading from '../../ui/SectionHeading/SectionHeading';
import SmartImage from '../../ui/SmartImage/SmartImage';
import Reveal from '../../ui/Reveal/Reveal';
import './JewelleryGallery.css';

const EASE = [0.22, 1, 0.36, 1] as const;

export default function JewelleryGallery() {
  const [active, setActive] = useState<GalleryTab>('wedding');
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  // Roving focus between tabs with arrow / Home / End keys.
  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    const i = galleryTabs.findIndex((t) => t.id === active);
    let next = i;
    if (e.key === 'ArrowRight') next = (i + 1) % galleryTabs.length;
    else if (e.key === 'ArrowLeft') next = (i - 1 + galleryTabs.length) % galleryTabs.length;
    else if (e.key === 'Home') next = 0;
    else if (e.key === 'End') next = galleryTabs.length - 1;
    else return;
    e.preventDefault();
    setActive(galleryTabs[next].id);
    tabRefs.current[next]?.focus();
  };

  return (
    <section className="jgallery section-y" id="gallery" aria-labelledby="jgallery-title">
      <div className="container-lux">
        <SectionHeading id="jgallery-title" eyebrow="Lookbook" title="The Jewellery Gallery" />

        <Reveal>
          <div className="jgallery__tabs" role="tablist" aria-label="Gallery themes" onKeyDown={onKeyDown}>
            {galleryTabs.map((t, i) => {
              const selected = t.id === active;
              return (
                <button
                  key={t.id}
                  ref={(el) => {
                    tabRefs.current[i] = el;
                  }}
                  type="button"
                  role="tab"
                  id={`jg-tab-${t.id}`}
                  aria-selected={selected}
                  aria-controls="jg-panel"
                  tabIndex={selected ? 0 : -1}
                  className={`jgallery__tab ${selected ? 'is-active' : ''}`}
                  onClick={() => setActive(t.id)}
                >
                  {t.label}
                  {selected && (
                    <motion.span
                      layoutId="jg-underline"
                      className="jgallery__underline"
                      transition={{ duration: 0.6, ease: EASE }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </Reveal>

        <div id="jg-panel" role="tabpanel" aria-labelledby={`jg-tab-${active}`} className="jgallery__panel">
          <AnimatePresence mode="wait" initial={false}>
            <motion.ul
              key={active}
              className="jgallery__grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.55, ease: EASE }}
            >
              {gallery[active].map((item, i) => (
                <li key={item.id} className={`jgallery__cell jgallery__cell--${i + 1}`}>
                  <figure className="jgallery__figure">
                    <div className="jgallery__media">
                      <SmartImage
                        image={item.image}
                        className="jgallery__img"
                        sizes={i === 0 ? '(min-width: 1024px) 50vw, 100vw' : '(min-width: 1024px) 25vw, 50vw'}
                      />
                    </div>
                    <figcaption className="jgallery__caption">{item.caption}</figcaption>
                  </figure>
                </li>
              ))}
            </motion.ul>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
