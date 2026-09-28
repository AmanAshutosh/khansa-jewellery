import type { SVGProps } from 'react';

/** Minimal line social icons (kept local so no brand-icon dependency is needed). */
type IconProps = SVGProps<SVGSVGElement> & { size?: number };

const base = (size: number): SVGProps<SVGSVGElement> => ({
  width: size,
  height: size,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.25,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
});

export const InstagramIcon = ({ size = 20, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.3" cy="6.7" r="0.6" fill="currentColor" />
  </svg>
);

export const FacebookIcon = ({ size = 20, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <path d="M14 8h2.5V4.5H14A3.5 3.5 0 0 0 10.5 8v2.5H8V14h2.5v6.5H14V14h2.5l.5-3.5h-3V8.5A.5.5 0 0 1 14 8Z" />
  </svg>
);

export const PinterestIcon = ({ size = 20, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M11 8.5c2.8-.6 4.8 1 4.3 3.4-.4 2-2 3.1-3.4 2.6-1-.4-1.2-1.5-.9-2.6M11.6 12l-1.8 8" />
  </svg>
);

export const YoutubeIcon = ({ size = 20, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <rect x="2.5" y="5.5" width="19" height="13" rx="4" />
    <path d="m10.5 9.5 4 2.5-4 2.5v-5Z" />
  </svg>
);
