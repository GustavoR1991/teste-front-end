import type { Product } from "../../types/product";
import { formatPrice } from "../../utils/formatPrice";
import "./style.scss";

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
}

export function ProductCard({ product, onSelect }: ProductCardProps) {
  const { productName, descriptionShort, photo, price } = product;

  return (
    <article className="product-card" onClick={() => onSelect(product)}>
      <img
        className="product-card__foto"
        src={photo}
        alt={productName}
        loading="lazy"
      />

      <h3 className="product-card__descricao">{descriptionShort}</h3>

      <div className="product-card__precos">
        <s className="product-card__preco-antigo">{formatPrice(price * 1.1)}</s>
        <strong className="product-card__preco">{formatPrice(price)}</strong>
      </div>

      <p className="product-card__parcelas">
        ou 2x de {formatPrice(price / 2)} sem juros
      </p>
      <p className="product-card__frete">Frete grátis</p>

      <button
        type="button"
        className="product-card__comprar"
        onClick={(e) => {
          e.stopPropagation();
          onSelect(product);
        }}
      >
        Comprar
      </button>
    </article>
  );
}
