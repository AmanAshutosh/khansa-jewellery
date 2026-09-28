import { signaturePieces } from '../../../data/products';
import SectionHeading from '../../ui/SectionHeading/SectionHeading';
import ProductCard from '../../ui/ProductCard/ProductCard';
import Button from '../../ui/Button/Button';
import Reveal from '../../ui/Reveal/Reveal';
import './SignaturePieces.css';

export default function SignaturePieces() {
  return (
    <section className="signature section-y" id="collections" aria-labelledby="signature-title">
      <div className="container-lux">
        <SectionHeading
          id="signature-title"
          align="left"
          title="Signature Pieces"
          subtitle="The pieces everyone remembers."
          action={
            <Button href="#shop-all" variant="link" arrow>
              View all
            </Button>
          }
        />
        <ul className="signature__grid">
          {signaturePieces.map((p, i) => (
            <Reveal as="li" key={p.id} delay={i * 0.1} className="signature__item">
              <ProductCard product={p} />
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
