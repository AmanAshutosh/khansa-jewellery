import { useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Search, X } from 'lucide-react';
import { categoryNames } from '../../../data/categories';
import './SearchOverlay.css';

interface SearchOverlayProps {
  open: boolean;
  onClose: () => void;
}

const EASE = [0.22, 1, 0.36, 1] as const;

export default function SearchOverlay({ open, onClose }: SearchOverlayProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!open) return;
    const previouslyFocused = document.activeElement as HTMLElement | null;
    const t = window.setTimeout(() => inputRef.current?.focus(), 80);
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => {
      window.clearTimeout(t);
      window.removeEventListener('keydown', onKey);
      previouslyFocused?.focus?.();
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <div className="search-overlay">
          <motion.div
            className="search-overlay__backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: EASE }}
            onClick={onClose}
            aria-hidden="true"
          />
          <motion.div
            className="search-overlay__panel"
            role="dialog"
            aria-modal="true"
            aria-label="Search"
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            <div className="container-lux search-overlay__inner">
              <form
                className="search-overlay__form"
                role="search"
                onSubmit={(e) => {
                  e.preventDefault();
                  onClose();
                }}
              >
                <Search size={20} strokeWidth={1.1} aria-hidden="true" />
                <label htmlFor="site-search" className="visually-hidden">
                  Search jewellery
                </label>
                <input
                  ref={inputRef}
                  id="site-search"
                  type="search"
                  placeholder="Search rings, earrings, gifts…"
                  autoComplete="off"
                  className="search-overlay__input"
                />
                <button type="button" className="search-overlay__close" aria-label="Close search" onClick={onClose}>
                  <X size={20} strokeWidth={1.1} aria-hidden="true" />
                </button>
              </form>
              <div className="search-overlay__suggest">
                <p className="eyebrow">Popular</p>
                <ul>
                  {categoryNames.map((c) => (
                    <li key={c.name}>
                      <a href={c.href} onClick={onClose}>
                        {c.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
