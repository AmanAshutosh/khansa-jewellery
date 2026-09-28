import { motion } from 'framer-motion';
import Button from '../../ui/Button/Button';
import SmartImage from '../../ui/SmartImage/SmartImage';
import { resolveImage, resolveVideo } from '../../../lib/assets';
import { useMediaQuery } from '../../../hooks/useMediaQuery';
import type { ImageRef } from '../../../data/types';
import './Hero.css';

const EASE = [0.22, 1, 0.36, 1] as const;

const poster: ImageRef = {
  src: 'hero/hero-poster',
  alt: 'Close-up of gold jewellery catching soft, warm light',
  motif: 'ring',
  tone: 'mocha',
};

const video = resolveVideo('hero-jewellery');
const posterUrl = resolveImage(poster.src);

const rise = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1.1, ease: EASE, delay },
});

export default function Hero() {
  // Mobile + reduced-motion users get the lightweight poster instead of the video.
  const wideScreen = useMediaQuery('(min-width: 768px)');
  const reduceMotion = useMediaQuery('(prefers-reduced-motion: reduce)');
  const saveData = useMediaQuery('(prefers-reduced-data: reduce)');
  const hasVideo = Boolean(video.mp4 || video.webm);
  const playVideo = hasVideo && wideScreen && !reduceMotion && !saveData;

  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__media">
        {playVideo ? (
          <video
            className="hero__video"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={posterUrl}
            aria-hidden="true"
          >
            {video.webm && <source src={video.webm} type="video/webm" />}
            {video.mp4 && <source src={video.mp4} type="video/mp4" />}
          </video>
        ) : (
          <SmartImage image={poster} className="hero__poster" priority sizes="100vw" />
        )}
        <div className="hero__scrim" aria-hidden="true" />
      </div>

      <div className="hero__content container-lux">
        <div className="hero__copy">
          <motion.p className="hero__eyebrow" {...rise(0.25)}>
            The New Edit
          </motion.p>
          <motion.h1 id="hero-title" className="hero__title" {...rise(0.4)}>
            Jewellery that becomes <br className="hero__br" />
            <em>part of your story.</em>
          </motion.h1>
          <motion.div {...rise(0.6)}>
            <Button href="#collections" variant="light" arrow className="hero__cta">
              Discover the Collection
            </Button>
          </motion.div>
        </div>

        <motion.div
          className="hero__scroll"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.1 }}
          aria-hidden="true"
        >
          <span>Scroll</span>
          <span className="hero__scroll-line" />
        </motion.div>
      </div>
    </section>
  );
}
