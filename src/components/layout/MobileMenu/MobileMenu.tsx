import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, X } from 'lucide-react';
import { brand } from '../../../config/brand';
import { primaryNav } from '../../../data/navigation';
import './MobileMenu.css';

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

const EASE = [0.22, 1, 0.36, 1] as const;

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  const [expanded, setExpanded] = useState<string | null>('Jewellery');
  const closeRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  // Body scroll lock, Escape to close, focus management + simple focus trap.
  useEffect(() => {
    if (!open) return;
    const previouslyFocused = document.activeElement as HTMLElement | null;
    const { overflow } = document.body.style;
    document.body.style.overflow = 'hidden';
    const t = window.setTimeout(() => closeRef.current?.focus(), 50);

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'Tab' && panelRef.current) {
        const nodes = panelRef.current.querySelectorAll<HTMLElement>('a[href], button:not([disabled])');
        if (!nodes.length) return;
        const first = nodes[0];
        const last = nodes[nodes.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener('keydown', onKey);

    return () => {
      window.clearTimeout(t);
      document.body.style.overflow = overflow;
      window.removeEventListener('keydown', onKey);
      previouslyFocused?.focus?.();
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <div className="mobile-menu" id="mobile-menu">
          <motion.div
            className="mobile-menu__backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: EASE }}
            onClick={onClose}
            aria-hidden="true"
          />
          <motion.div
            ref={panelRef}
            className="mobile-menu__panel"
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ duration: 0.65, ease: EASE }}
          >
            <div className="mobile-menu__top">
              <span className="mobile-menu__logo">{brand.brandName}</span>
              <button ref={closeRef} type="button" className="mobile-menu__close" aria-label="Close menu" onClick={onClose}>
                <X size={22} strokeWidth={1.1} aria-hidden="true" />
              </button>
            </div>

            <nav aria-label="Mobile" className="mobile-menu__nav">
              <ul className="mobile-menu__list">
                {primaryNav.map((item, i) => {
                  const isOpen = expanded === item.label;
                  return (
                    <motion.li
                      key={item.label}
                      className="mobile-menu__item"
                      initial={{ opacity: 0, y: 14 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, ease: EASE, delay: 0.15 + i * 0.06 }}
                    >
                      {item.children ? (
                        <>
                          <button
                            type="button"
                            className="mobile-menu__link"
                            aria-expanded={isOpen}
                            onClick={() => setExpanded(isOpen ? null : item.label)}
                          >
                            {item.label}
                            <ChevronDown
                              size={18}
                              strokeWidth={1.1}
                              className={`mobile-menu__chevron ${isOpen ? 'is-open' : ''}`}
                              aria-hidden="true"
                            />
                          </button>
                          <AnimatePresence initial={false}>
                            {isOpen && (
                              <motion.ul
                                className="mobile-menu__sub"
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.5, ease: EASE }}
                              >
                                {item.children.map((c) => (
                                  <li key={c.name}>
                                    <a href={c.href} className="mobile-menu__sublink" onClick={onClose}>
                                      {c.name}
                                    </a>
                                  </li>
                                ))}
                              </motion.ul>
                            )}
                          </AnimatePresence>
                        </>
                      ) : (
                        <a href={item.href} className="mobile-menu__link" onClick={onClose}>
                          {item.label}
                        </a>
                      )}
                    </motion.li>
                  );
                })}
              </ul>
            </nav>

            <div className="mobile-menu__footer">
              <a href="#wishlist" onClick={onClose}>
                Wishlist
              </a>
              <a href="#contact" onClick={onClose}>
                Contact
              </a>
              <a href="#stores" onClick={onClose}>
                Book an Appointment
              </a>
              <p className="mobile-menu__note">{brand.announcement}</p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
