import type { GalleryItem, GalleryTab, SocialPost } from './types';

export const galleryTabs: { id: GalleryTab; label: string }[] = [
  { id: 'wedding', label: 'Wedding' },
  { id: 'diamond', label: 'Diamond' },
  { id: 'gold', label: 'Gold' },
  { id: 'everyday', label: 'Everyday' },
];

/** Five images per tab — order maps to the editorial grid areas a–e. */
export const gallery: Record<GalleryTab, GalleryItem[]> = {
  wedding: [
    { id: 'w1', caption: 'The Bridal Edit', image: { src: 'gallery/wedding-1', alt: 'Bride in ivory silk wearing a layered gold necklace and jhumkas', motif: 'necklace', tone: 'clay' } },
    { id: 'w2', caption: 'Heirloom Bangles', image: { src: 'gallery/wedding-2', alt: 'Close-up of mehndi-adorned hands wearing gold bangles', motif: 'bangle', tone: 'mocha' } },
    { id: 'w3', caption: 'Modern Mangalsutra', image: { src: 'gallery/wedding-3', alt: 'Minimal mangalsutra worn with a linen saree', motif: 'mangalsutra', tone: 'dusk' } },
    { id: 'w4', caption: 'Jhumka, Reimagined', image: { src: 'gallery/wedding-4', alt: 'Contemporary gold jhumka earrings in profile', motif: 'earring', tone: 'blush' } },
    { id: 'w5', caption: 'The Vow Ring', image: { src: 'gallery/wedding-5', alt: 'Pair of gold bands resting on folded silk', motif: 'ring', tone: 'stone' } },
  ],
  diamond: [
    { id: 'd1', caption: 'Solitaire Light', image: { src: 'gallery/diamond-1', alt: 'Solitaire diamond ring photographed in raking light', motif: 'ring', tone: 'stone' } },
    { id: 'd2', caption: 'Tennis Bracelet', image: { src: 'gallery/diamond-2', alt: 'Diamond line bracelet on a bare wrist', motif: 'bracelet', tone: 'dusk' } },
    { id: 'd3', caption: 'Starlit Studs', image: { src: 'gallery/diamond-3', alt: 'Diamond stud earrings on a sculptural stand', motif: 'spark', tone: 'sand' } },
    { id: 'd4', caption: 'Halo Pendant', image: { src: 'gallery/diamond-4', alt: 'Diamond halo pendant on a fine gold chain', motif: 'pendant', tone: 'sage' } },
    { id: 'd5', caption: 'Eternity Band', image: { src: 'gallery/diamond-5', alt: 'Eternity band set with round diamonds', motif: 'ring', tone: 'blush' } },
  ],
  gold: [
    { id: 'g1', caption: 'Twenty-Two Karat', image: { src: 'gallery/gold-1', alt: 'Stack of 22K gold bangles on travertine', motif: 'bangle', tone: 'clay' } },
    { id: 'g2', caption: 'Fine Chains', image: { src: 'gallery/gold-2', alt: 'Assorted fine gold chains coiled together', motif: 'chain', tone: 'sand' } },
    { id: 'g3', caption: 'Sculpted Hoops', image: { src: 'gallery/gold-3', alt: 'Chunky sculpted gold hoop earrings', motif: 'earring', tone: 'mocha' } },
    { id: 'g4', caption: 'Signet Stories', image: { src: 'gallery/gold-4', alt: 'Engraved gold signet ring', motif: 'ring', tone: 'stone' } },
    { id: 'g5', caption: 'Collar Necklace', image: { src: 'gallery/gold-5', alt: 'Polished gold collar necklace on a bust', motif: 'necklace', tone: 'blush' } },
  ],
  everyday: [
    { id: 'e1', caption: 'Desk to Dinner', image: { src: 'gallery/everyday-1', alt: 'Woman in a linen shirt wearing a delicate pendant and studs', motif: 'pendant', tone: 'sage' } },
    { id: 'e2', caption: 'Stackable Rings', image: { src: 'gallery/everyday-2', alt: 'Slim stackable gold rings on two fingers', motif: 'ring', tone: 'blush' } },
    { id: 'e3', caption: 'Little Hoops', image: { src: 'gallery/everyday-3', alt: 'Small gold huggie hoops', motif: 'earring', tone: 'sand' } },
    { id: 'e4', caption: 'The Daily Chain', image: { src: 'gallery/everyday-4', alt: 'A fine everyday gold chain worn with a white tee', motif: 'chain', tone: 'stone' } },
    { id: 'e5', caption: 'Charm Bracelet', image: { src: 'gallery/everyday-5', alt: 'Slim bracelet with a single gold charm', motif: 'bracelet', tone: 'clay' } },
  ],
};

export const socialPosts: SocialPost[] = [
  { id: 's1', href: '#', shape: 'portrait', image: { src: 'social/post-1', alt: 'Morning light on gold hoop earrings', motif: 'earring', tone: 'clay' } },
  { id: 's2', href: '#', shape: 'square', image: { src: 'social/post-2', alt: 'Stacked rings on a hand holding a coffee cup', motif: 'ring', tone: 'stone' } },
  { id: 's3', href: '#', shape: 'tall', image: { src: 'social/post-3', alt: 'Layered necklaces worn with a cream knit', motif: 'necklace', tone: 'blush' } },
  { id: 's4', href: '#', shape: 'square', image: { src: 'social/post-4', alt: 'Gold bangles against a terracotta wall', motif: 'bangle', tone: 'mocha' } },
  { id: 's5', href: '#', shape: 'tall', image: { src: 'social/post-5', alt: 'Pendant catching sunlight on a balcony', motif: 'pendant', tone: 'sage' } },
  { id: 's6', href: '#', shape: 'portrait', image: { src: 'social/post-6', alt: 'Jewellery tray with chains and studs', motif: 'chain', tone: 'sand' } },
];
