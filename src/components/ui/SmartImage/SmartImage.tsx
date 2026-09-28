import { memo, useState } from 'react';
import type { ImageRef } from '../../../data/types';
import { resolveImage } from '../../../lib/assets';
import { motifs } from './motifs';
import './SmartImage.css';

interface SmartImageProps {
  image: ImageRef;
  className?: string;
  /** Below-the-fold images should stay lazy (default). */
  loading?: 'lazy' | 'eager';
  sizes?: string;
  priority?: boolean;
}

/**
 * Renders a real photo when it exists in src/assets/images, otherwise a
 * designed placeholder (tone + line motif). Also falls back on load errors.
 */
function SmartImage({ image, className = '', loading = 'lazy', sizes, priority = false }: SmartImageProps) {
  const url = resolveImage(image.src);
  const [failed, setFailed] = useState(false);
  const showPhoto = Boolean(url) && !failed;
  const Motif = motifs[image.motif];

  return (
    <div className={`smart-image ${className}`} data-tone={image.tone}>
      {showPhoto ? (
        <img
          src={url}
          alt={image.alt}
          loading={priority ? 'eager' : loading}
          decoding="async"
          sizes={sizes}
          fetchPriority={priority ? 'high' : 'auto'}
          onError={() => setFailed(true)}
          className="smart-image__img"
        />
      ) : (
        <div className="smart-image__placeholder" role="img" aria-label={image.alt}>
          <svg
            className="smart-image__motif"
            viewBox="0 0 120 120"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <Motif />
          </svg>
        </div>
      )}
    </div>
  );
}

export default memo(SmartImage);
