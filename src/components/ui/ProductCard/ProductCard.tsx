import { memo } from 'react';
import { Heart } from 'lucide-react';
import type { Product } from '../../../data/types';
import { formatPrice } from '../../../lib/format';
import { useShop } from '../../../context/ShopContext';
import SmartImage from '../SmartImage/SmartImage';
import './ProductCard.css';

interface ProductCardProps {
  product: Product;
}

function ProductCard({ product }: ProductCardProps) {
  const { isWishlisted, toggleWishlist } = useShop();
  const saved = isWishlisted(product.id);

  return (
    <article className="product-card">
      <div className="product-card__media">
        <SmartImage
          image={product.image}
          className="product-card__img product-card__img--front"
          sizes="(min-width: 1024px) 25vw, 50vw"
        />
        <SmartImage
          image={product.hoverImage}
          className="product-card__img product-card__img--hover"
          sizes="(min-width: 1024px) 25vw, 50vw"
        />
        {product.badge && <span className="product-card__badge">{product.badge}</span>}
        <button
          type="button"
          className={`product-card__wish ${saved ? 'is-active' : ''}`}
          aria-pressed={saved}
          aria-label={saved ? `Remove ${product.name} from wishlist` : `Add ${product.name} to wishlist`}
          onClick={() => toggleWishlist(product.id)}
        >
          <Heart size={17} strokeWidth={1.25} fill={saved ? 'currentColor' : 'none'} aria-hidden="true" />
        </button>
      </div>

      <div className="product-card__info">
        <p className="product-card__category">{product.category}</p>
        <h3 className="product-card__name">
          <a href={product.href} className="product-card__link">
            {product.name}
          </a>
        </h3>
        <p className="product-card__metal">{product.metal}</p>
        <p className="product-card__price">{formatPrice(product.price)}</p>
      </div>
    </article>
  );
}

export default memo(ProductCard);
