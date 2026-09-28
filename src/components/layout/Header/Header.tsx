import { useCallback, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Heart, Menu, Search, ShoppingBag } from 'lucide-react';
import { brand } from '../../../config/brand';
import { primaryNav } from '../../../data/navigation';
import { categories } from '../../../data/categories';
import { useShop } from '../../../context/ShopContext';
import { useScrolled } from '../../../hooks/useScrolled';
import SmartImage from '../../ui/SmartImage/SmartImage';
import MobileMenu from '../MobileMenu/MobileMenu';
import SearchOverlay from '../SearchOverlay/SearchOverlay';
import './Header.css';

const EASE = [0.22, 1, 0.36, 1] as const;

export default function Header() {
  const scrolled = useScrolled(40);
  const { wishlist, bagCount } = useShop();
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState<string | null>(null);
  const closeTimer = useRef<number | undefined>(undefined);

  const closeMenu = useCallback(() => setMenuOpen(false), []);
  const closeSearch = useCallback(() => setSearchOpen(false), []);

  const solid = scrolled || menuOpen || searchOpen || megaOpen !== null;

  const openMega = useCallback((label: string | null) => {
    window.clearTimeout(closeTimer.current);
    setMegaOpen(label);
  }, []);

  const scheduleClose = useCallback(() => {
    window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setMegaOpen(null), 160);
  }, []);

  useEffect(() => {
    if (!megaOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setMegaOpen(null);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [megaOpen]);

  useEffect(() => () => window.clearTimeout(closeTimer.current), []);

  const activeNav = primaryNav.find((n) => n.label === megaOpen);
  const feature = categories[megaOpen === 'Collections' ? 3 : megaOpen === 'Occasions' ? 6 : 0];

  return (
    <>
      <header className={`header ${solid ? 'header--solid' : ''}`} onMouseLeave={scheduleClose}>
        <div className="header__inner container-lux">
          <button
            type="button"
            className="header__icon header__burger"
            aria-label="Open menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen(true)}
          >
            <Menu size={22} strokeWidth={1.1} aria-hidden="true" />
          </button>

          <a href="#" className="header__logo" aria-label={`${brand.brandName} — home`}>
            <span className="header__wordmark">{brand.brandName}</span>
            <span className="header__sub">Fine Jewellery</span>
          </a>

          <nav className="header__nav" aria-label="Primary">
            <ul className="header__nav-list">
              {primaryNav.map((item) => (
                <li
                  key={item.label}
                  className="header__nav-item"
                  onMouseEnter={() => openMega(item.children ? item.label : null)}
                >
                  <a
                    href={item.href}
                    className={`header__nav-link ${megaOpen === item.label ? 'is-active' : ''}`}
                    aria-expanded={item.children ? megaOpen === item.label : undefined}
                    aria-haspopup={item.children ? 'true' : undefined}
                    onFocus={() => openMega(item.children ? item.label : null)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="header__actions">
            <button
              type="button"
              className="header__icon header__icon--search"
              aria-label="Search"
              onClick={() => setSearchOpen(true)}
            >
              <Search size={19} strokeWidth={1.1} aria-hidden="true" />
            </button>
            <a href="#wishlist" className="header__icon" aria-label={`Wishlist, ${wishlist.size} items`}>
              <Heart size={19} strokeWidth={1.1} aria-hidden="true" />
              {wishlist.size > 0 && <span className="header__count">{wishlist.size}</span>}
            </a>
            <a href="#bag" className="header__icon" aria-label={`Shopping bag, ${bagCount} items`}>
              <ShoppingBag size={19} strokeWidth={1.1} aria-hidden="true" />
              {bagCount > 0 && <span className="header__count">{bagCount}</span>}
            </a>
          </div>
        </div>

        <AnimatePresence>
          {activeNav?.children && (
            <motion.div
              key="mega"
              className="mega"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.5, ease: EASE }}
              onMouseEnter={() => openMega(activeNav.label)}
              onBlur={(e) => {
                if (!e.currentTarget.contains(e.relatedTarget as Node)) scheduleClose();
              }}
            >
              <div className="mega__inner container-lux">
                <div className="mega__intro">
                  <p className="eyebrow">{activeNav.label}</p>
                  <p className="mega__lede">
                    {activeNav.label === 'Jewellery'
                      ? 'Everyday forms, finished by hand.'
                      : activeNav.label === 'Collections'
                        ? 'Stories told in gold.'
                        : 'For the days you will remember.'}
                  </p>
                </div>
                <ul className="mega__links">
                  {activeNav.children.map((c) => (
                    <li key={c.name}>
                      <a href={c.href} className="mega__link" onClick={() => setMegaOpen(null)}>
                        {c.name}
                      </a>
                    </li>
                  ))}
                </ul>
                <a href={feature.href} className="mega__feature" onClick={() => setMegaOpen(null)}>
                  <SmartImage image={feature.image} className="mega__feature-img" />
                  <span className="mega__feature-caption">
                    Discover {feature.name} <span aria-hidden="true">→</span>
                  </span>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <MobileMenu open={menuOpen} onClose={closeMenu} />
      <SearchOverlay open={searchOpen} onClose={closeSearch} />
    </>
  );
}
