/**
 * Brand configuration — single source of truth for identity and contact details.
 *
 * Contact values below are PLACEHOLDERS. Replace them with real business
 * details before going live.
 */
export interface BrandConfig {
  brandName: string;
  tagline: string;
  email: string;
  phone: string;
  instagram: string;
  facebook: string;
  pinterest: string;
  youtube: string;
  address: string;
  announcement: string;
  year: number;
}

export const brand: BrandConfig = {
  brandName: 'Khansa',
  tagline: 'Modern Indian fine jewellery, made to be lived in.',
  email: 'hello@example.com', // placeholder
  phone: '+91 00000 00000', // placeholder
  instagram: 'https://instagram.com/', // placeholder — add your handle
  facebook: 'https://facebook.com/', // placeholder
  pinterest: 'https://pinterest.com/', // placeholder
  youtube: 'https://youtube.com/', // placeholder
  address: 'Studio address, City, State — PIN', // placeholder
  announcement: 'Complimentary Shipping on Orders Above ₹25,000',
  year: 2026,
};
