/** Line-drawn motif shown inside a placeholder when a photo is not yet available. */
export type Motif =
  | 'ring'
  | 'earring'
  | 'pendant'
  | 'mangalsutra'
  | 'necklace'
  | 'bracelet'
  | 'bangle'
  | 'chain'
  | 'spark'
  | 'fold'
  | 'hands';

/** Placeholder background tone — muted, photographic colours. */
export type Tone = 'ivory' | 'sand' | 'blush' | 'sage' | 'stone' | 'clay' | 'mocha' | 'dusk';

/** Image reference: `src` is an asset key resolved via lib/assets. */
export interface ImageRef {
  src: string;
  alt: string;
  motif: Motif;
  tone: Tone;
}

export type CategoryName =
  | 'Earrings'
  | 'Rings'
  | 'Pendants'
  | 'Mangalsutra'
  | 'Necklaces'
  | 'Bracelets'
  | 'Bangles'
  | 'Chains';

export interface Category {
  id: string;
  name: CategoryName;
  href: string;
  image: ImageRef;
  /** Grid area name used by the bento layout. */
  area: string;
}

export interface Product {
  id: string;
  name: string;
  category: CategoryName;
  price: number;
  metal: string;
  image: ImageRef;
  hoverImage: ImageRef;
  badge?: string;
  href: string;
}

export interface Collection {
  id: string;
  index: string;
  title: string;
  description: string;
  href: string;
  image: ImageRef;
}

export type GalleryTab = 'wedding' | 'diamond' | 'gold' | 'everyday';

export interface GalleryItem {
  id: string;
  caption: string;
  image: ImageRef;
}

export interface SocialPost {
  id: string;
  href: string;
  image: ImageRef;
  /** Relative height used for the masonry rhythm. */
  shape: 'portrait' | 'square' | 'tall';
}
