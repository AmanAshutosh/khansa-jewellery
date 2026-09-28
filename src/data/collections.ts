import type { Collection } from './types';

export const curatedMoments: Collection[] = [
  {
    id: 'auspicious',
    index: '01',
    title: 'Auspicious',
    description: 'Jewellery for beginnings worth celebrating.',
    href: '#auspicious',
    image: {
      src: 'curated/auspicious',
      alt: 'Hands adorned with gold bangles and a ring, holding marigold petals',
      motif: 'bangle',
      tone: 'clay',
    },
  },
  {
    id: 'gifting',
    index: '02',
    title: 'Gifting',
    description: 'A little gold. A lasting memory.',
    href: '#gifting',
    image: {
      src: 'curated/gifting',
      alt: 'A small ivory jewellery box opened to reveal a gold pendant',
      motif: 'pendant',
      tone: 'sand',
    },
  },
  {
    id: 'origami',
    index: '03',
    title: 'Origami',
    description: 'Sculpted forms inspired by the art of folding.',
    href: '#origami',
    image: {
      src: 'curated/origami',
      alt: 'Faceted gold earrings shaped like folded paper, casting soft shadows',
      motif: 'fold',
      tone: 'stone',
    },
  },
];
