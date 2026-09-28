import type { Category } from './types';

/** Order + `area` drive the asymmetric bento grid in CategoryBento.css. */
export const categories: Category[] = [
  {
    id: 'earrings',
    name: 'Earrings',
    href: '#earrings',
    area: 'earrings',
    image: {
      src: 'categories/earrings',
      alt: 'Gold drop earrings with a single diamond, photographed against warm linen',
      motif: 'earring',
      tone: 'clay',
    },
  },
  {
    id: 'rings',
    name: 'Rings',
    href: '#rings',
    area: 'rings',
    image: {
      src: 'categories/rings',
      alt: 'Solitaire gold ring resting on a sculpted stone plinth',
      motif: 'ring',
      tone: 'stone',
    },
  },
  {
    id: 'pendants',
    name: 'Pendants',
    href: '#pendants',
    area: 'pendants',
    image: {
      src: 'categories/pendants',
      alt: 'Delicate gold pendant on a fine chain, worn at the collarbone',
      motif: 'pendant',
      tone: 'blush',
    },
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    href: '#necklaces',
    area: 'necklaces',
    image: {
      src: 'categories/necklaces',
      alt: 'Layered gold necklaces draped over an ivory silk blouse',
      motif: 'necklace',
      tone: 'mocha',
    },
  },
  {
    id: 'mangalsutra',
    name: 'Mangalsutra',
    href: '#mangalsutra',
    area: 'mangalsutra',
    image: {
      src: 'categories/mangalsutra',
      alt: 'Modern mangalsutra with black beads and a minimal gold pendant',
      motif: 'mangalsutra',
      tone: 'dusk',
    },
  },
  {
    id: 'bracelets',
    name: 'Bracelets',
    href: '#bracelets',
    area: 'bracelets',
    image: {
      src: 'categories/bracelets',
      alt: 'Slim gold link bracelet on a wrist in soft daylight',
      motif: 'bracelet',
      tone: 'sage',
    },
  },
  {
    id: 'bangles',
    name: 'Bangles',
    href: '#bangles',
    area: 'bangles',
    image: {
      src: 'categories/bangles',
      alt: 'Stack of textured gold bangles catching the light',
      motif: 'bangle',
      tone: 'clay',
    },
  },
  {
    id: 'chains',
    name: 'Chains',
    href: '#chains',
    area: 'chains',
    image: {
      src: 'categories/chains',
      alt: 'Coiled gold chain on a travertine surface',
      motif: 'chain',
      tone: 'stone',
    },
  },
];

/** Plain list for menus and footers. */
export const categoryNames = categories.map((c) => ({ name: c.name, href: c.href }));
