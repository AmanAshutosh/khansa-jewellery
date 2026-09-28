import type { Product } from './types';

export const products: Product[] = [
  {
    id: 'ring-001',
    name: 'Celeste Gold Ring',
    category: 'Rings',
    price: 24999,
    metal: '18K Yellow Gold · Diamond',
    href: '#ring-001',
    badge: 'New',
    image: {
      src: 'products/ring-001',
      alt: 'Celeste Gold Ring — a slim 18K gold band set with a single round diamond',
      motif: 'ring',
      tone: 'ivory',
    },
    hoverImage: {
      src: 'products/ring-001-worn',
      alt: 'Celeste Gold Ring worn on the index finger',
      motif: 'hands',
      tone: 'blush',
    },
  },
  {
    id: 'earring-014',
    name: 'Noor Drop Earrings',
    category: 'Earrings',
    price: 38499,
    metal: '18K Yellow Gold · Pearl',
    href: '#earring-014',
    image: {
      src: 'products/earring-014',
      alt: 'Noor Drop Earrings — gold teardrops finished with freshwater pearls',
      motif: 'earring',
      tone: 'ivory',
    },
    hoverImage: {
      src: 'products/earring-014-worn',
      alt: 'Noor Drop Earrings worn with hair tucked behind the ear',
      motif: 'earring',
      tone: 'clay',
    },
  },
  {
    id: 'pendant-007',
    name: 'Origami Fold Pendant',
    category: 'Pendants',
    price: 21999,
    metal: '14K Rose Gold',
    href: '#pendant-007',
    badge: 'Bestseller',
    image: {
      src: 'products/pendant-007',
      alt: 'Origami Fold Pendant — a faceted rose-gold pendant inspired by folded paper',
      motif: 'fold',
      tone: 'ivory',
    },
    hoverImage: {
      src: 'products/pendant-007-worn',
      alt: 'Origami Fold Pendant worn on a fine chain at the neckline',
      motif: 'pendant',
      tone: 'sand',
    },
  },
  {
    id: 'bangle-003',
    name: 'Rekha Textured Bangle',
    category: 'Bangles',
    price: 64999,
    metal: '22K Yellow Gold',
    href: '#bangle-003',
    image: {
      src: 'products/bangle-003',
      alt: 'Rekha Textured Bangle — hand-engraved lines on a 22K gold bangle',
      motif: 'bangle',
      tone: 'ivory',
    },
    hoverImage: {
      src: 'products/bangle-003-worn',
      alt: 'Rekha Textured Bangle stacked on the wrist',
      motif: 'bangle',
      tone: 'stone',
    },
  },
];

export const signaturePieces = products;
