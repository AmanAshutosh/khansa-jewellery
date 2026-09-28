# Khansa —  Jewellery Website (V1)

Modern Indian jewellery house × quiet luxury × editorial e-commerce.

**Stack:** React 19 · Vite 7 · TypeScript · Tailwind CSS 3 · Framer Motion · Lucide React

## Run it

Requires Node 20.19+ (or 22+).

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # type-check + production build
npm run preview    # serve the production build
```

## Adding your photography (no code changes needed)

Every image slot shows a designed placeholder until a real file exists.
Drop files into `src/assets/images/…` using the names below. `.webp` is best,
but `.avif`, `.jpg`, `.jpeg` and `.png` also work. They're picked up
automatically by `src/lib/assets.ts`.

| Folder | File names |
|---|---|
| `hero/` | `hero-poster` (≈2400×1350, also used as the video poster and on mobile) |
| `categories/` | `earrings`, `rings`, `pendants`, `necklaces`, `mangalsutra`, `bracelets`, `bangles`, `chains` |
| `products/` | `ring-001`, `ring-001-worn`, `earring-014`, `earring-014-worn`, `pendant-007`, `pendant-007-worn`, `bangle-003`, `bangle-003-worn` |
| `curated/` | `auspicious`, `gifting`, `origami` |
| `gallery/` | `wedding-1…5`, `diamond-1…5`, `gold-1…5`, `everyday-1…5` |
| `craftsmanship/` | `artisan-hands`, `workbench-detail` |
| `social/` | `post-1` … `post-6` |

**Hero video:** add `src/assets/videos/hero-jewellery.mp4` (and optionally
`hero-jewellery.webm`). Keep it short (8–15s), 1920px wide, H.264, ideally under 6 MB.
It only plays on screens ≥768px and never for users with reduced motion or
data-saver turned on. Everyone else gets the poster.

**Suggested sizes:** products 1200×1500 (4:5), categories 1200×1500,
gallery 1600×2000. Export at ~75–80% quality.

## Where things live

```
src/
├── assets/images/…            your photography (see table above)
├── assets/videos/             hero-jewellery.mp4
├── config/brand.ts            brand name, tagline, contact PLACEHOLDERS
├── data/                      products, categories, collections, gallery, navigation (+ types)
├── lib/assets.ts              image/video resolver (missing files never break the UI)
├── context/ShopContext.tsx    wishlist + bag state
├── hooks/                     useScrolled, useMediaQuery
├── components/
│   ├── layout/                AnnouncementBar, Header (+ mega menu), MobileMenu, SearchOverlay, Footer
│   ├── sections/              Hero, CategoryBento, CuratedMoment, SignaturePieces,
│   │                          JewelleryGallery, Craftsmanship, Assurance, SocialGallery
│   └── ui/                    Button, SectionHeading, ProductCard, SmartImage, Reveal, Icons
├── pages/Home/                Home page composition
└── index.css                  Tailwind + design tokens only
```

Every section has its own `.tsx` + `.css`. `index.css` holds only tokens and
base styles.

## Before going live

- Replace the placeholder contact details and social URLs in `src/config/brand.ts`.
- Point the `href`s in `src/data/*` at real routes once product and category pages exist.
- Add real product data (prices, metals, badges) in `src/data/products.ts`.

## Accessibility & motion

Semantic landmarks, a skip link, visible gold focus rings, keyboard-operable
menus (Esc to close, focus trap in the mobile menu), arrow-key gallery tabs,
44px touch targets, and descriptive alt text on every image. All Framer Motion
animation respects the OS "reduce motion" setting (`MotionConfig reducedMotion="user"`),
and so do CSS transitions.
