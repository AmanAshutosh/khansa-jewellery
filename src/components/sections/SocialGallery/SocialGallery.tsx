import { brand } from '../../../config/brand';
import { socialPosts } from '../../../data/gallery';
import SectionHeading from '../../ui/SectionHeading/SectionHeading';
import SmartImage from '../../ui/SmartImage/SmartImage';
import Button from '../../ui/Button/Button';
import Reveal from '../../ui/Reveal/Reveal';
import { InstagramIcon } from '../../ui/Icons/SocialIcons';
import './SocialGallery.css';

export default function SocialGallery() {
  return (
    <section className="social section-y" id="journal" aria-labelledby="social-title">
      <div className="container-lux">
        <SectionHeading
          id="social-title"
          eyebrow="On Instagram"
          title="Follow the Shine"
          subtitle="Worn, loved and shared by you."
        />

        <ul className="social__grid">
          {socialPosts.map((post, i) => (
            <Reveal as="li" key={post.id} className={`social__item social__item--${post.shape}`} delay={(i % 3) * 0.1}>
              <a
                href={post.href === '#' ? brand.instagram : post.href}
                target="_blank"
                rel="noopener noreferrer"
                className="social__link"
                aria-label={`View post on Instagram: ${post.image.alt}`}
              >
                <SmartImage image={post.image} className="social__img" sizes="(min-width: 1024px) 30vw, 50vw" />
                <span className="social__overlay" aria-hidden="true">
                  <InstagramIcon size={22} />
                  <span className="social__view">View Post →</span>
                </span>
                <span className="social__badge" aria-hidden="true">
                  <InstagramIcon size={14} />
                </span>
              </a>
            </Reveal>
          ))}
        </ul>

        <div className="social__cta">
          <Button href={brand.instagram} variant="outline" target="_blank" rel="noopener noreferrer">
            Follow us on Instagram
          </Button>
        </div>
      </div>
    </section>
  );
}
