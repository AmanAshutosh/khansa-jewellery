import { categoryNames } from './categories';

export interface NavLink {
  label: string;
  href: string;
  children?: { name: string; href: string }[];
}

export const primaryNav: NavLink[] = [
  { label: 'Jewellery', href: '#jewellery', children: categoryNames },
  {
    label: 'Collections',
    href: '#collections',
    children: [
      { name: 'The New Edit', href: '#new-edit' },
      { name: 'Origami', href: '#origami' },
      { name: 'Bridal', href: '#bridal' },
      { name: 'Everyday Gold', href: '#everyday' },
    ],
  },
  {
    label: 'Occasions',
    href: '#occasions',
    children: [
      { name: 'Auspicious', href: '#auspicious' },
      { name: 'Gifting', href: '#gifting' },
      { name: 'Wedding', href: '#wedding' },
      { name: 'Anniversary', href: '#anniversary' },
    ],
  },
  { label: 'About', href: '#about' },
];

export const footerColumns: { title: string; links: { name: string; href: string }[] }[] = [
  {
    title: 'Jewellery',
    links: ['Rings', 'Earrings', 'Pendants', 'Necklaces', 'Bangles', 'Bracelets', 'Chains', 'Mangalsutra'].map(
      (name) => ({ name, href: `#${name.toLowerCase()}` }),
    ),
  },
  {
    title: 'About',
    links: ['Our Story', 'Craftsmanship', 'Our Promise', 'Journal'].map((name) => ({
      name,
      href: `#${name.toLowerCase().replace(/\s+/g, '-')}`,
    })),
  },
  {
    title: 'Help',
    links: ['Contact', 'Shipping', 'Returns', 'FAQs', 'Care Guide'].map((name) => ({
      name,
      href: `#${name.toLowerCase().replace(/\s+/g, '-')}`,
    })),
  },
];

export const legalLinks = ['Privacy Policy', 'Terms', 'Shipping Policy', 'Refund Policy'].map((name) => ({
  name,
  href: `#${name.toLowerCase().replace(/\s+/g, '-')}`,
}));
