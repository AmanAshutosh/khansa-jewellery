import { useState, type FormEvent } from 'react';
import { ArrowRight } from 'lucide-react';
import { brand } from '../../../config/brand';
import { footerColumns, legalLinks } from '../../../data/navigation';
import { FacebookIcon, InstagramIcon, PinterestIcon, YoutubeIcon } from '../../ui/Icons/SocialIcons';
import './Footer.css';

const socials = [
  { name: 'Instagram', href: brand.instagram, Icon: InstagramIcon },
  { name: 'Facebook', href: brand.facebook, Icon: FacebookIcon },
  { name: 'Pinterest', href: brand.pinterest, Icon: PinterestIcon },
  { name: 'YouTube', href: brand.youtube, Icon: YoutubeIcon },
];

export default function Footer() {
  const [subscribed, setSubscribed] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (e.currentTarget.checkValidity()) setSubscribed(true);
  };

  return (
    <footer className="footer" aria-labelledby="footer-title">
      <div className="container-lux">
        <div className="footer__top">
          <div className="footer__brand">
            <h2 id="footer-title" className="footer__title">
              Letters from {brand.brandName}
            </h2>
            <p className="footer__lede">New collections, private previews and stories from the atelier — a few times a season.</p>

            {subscribed ? (
              <p className="footer__thanks" role="status">
                Thank you. You're on the list.
              </p>
            ) : (
              <form className="footer__form" onSubmit={onSubmit}>
                <label htmlFor="newsletter-email" className="visually-hidden">
                  Email address
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  required
                  placeholder="Your email address"
                  autoComplete="email"
                  className="footer__input"
                />
                <button type="submit" className="footer__submit" aria-label="Subscribe">
                  <ArrowRight size={18} strokeWidth={1.1} aria-hidden="true" />
                </button>
              </form>
            )}

            <address className="footer__contact">
              <a href={`mailto:${brand.email}`}>{brand.email}</a>
              <a href={`tel:${brand.phone.replace(/\s+/g, '')}`}>{brand.phone}</a>
            </address>
          </div>

          <div className="footer__cols">
            {footerColumns.map((col) => (
              <nav key={col.title} className="footer__col" aria-label={col.title}>
                <h3 className="footer__col-title">{col.title}</h3>
                <ul>
                  {col.links.map((l) => (
                    <li key={l.name}>
                      <a href={l.href}>{l.name}</a>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
            <nav className="footer__col" aria-label="Social">
              <h3 className="footer__col-title">Social</h3>
              <ul>
                {socials.map(({ name, href, Icon }) => (
                  <li key={name}>
                    <a href={href} target="_blank" rel="noopener noreferrer" className="footer__social">
                      <Icon size={16} />
                      <span>{name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        <p className="footer__wordmark" aria-hidden="true">
          {brand.brandName}
        </p>

        <div className="footer__bottom">
          <p className="footer__copy">
            © {brand.year} {brand.brandName.toUpperCase()}
          </p>
          <ul className="footer__legal">
            {legalLinks.map((l) => (
              <li key={l.name}>
                <a href={l.href}>{l.name}</a>
              </li>
            ))}
          </ul>
          <p className="footer__credit">Made by Ashutosh · 2026</p>
        </div>
      </div>
    </footer>
  );
}
