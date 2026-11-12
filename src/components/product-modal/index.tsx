import "./style.scss";

import { useEffect, useRef, useState } from "react";
import type { Product } from "../../types/product";
import { formatPrice } from "../../utils/formatPrice";
import minus from "../../assets/svg/minus.svg";
import plus from "../../assets/svg/plus.svg";
import line from "../../assets/svg/Line 14.svg";

interface ProductModalProps {
  product: Product;
  onClose: () => void;
}

export function ProductModal({ product, onClose }: ProductModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    dialogRef.current?.showModal();
  }, []);

  const decrease = () => setQuantity((q) => Math.max(1, q - 1));
  const increase = () => setQuantity((q) => q + 1);

  return (
    <dialog
      ref={dialogRef}
      className="modal"
      aria-labelledby="modal-title"
      onClose={onClose} 
      onClick={(e) => e.target === dialogRef.current && onClose()} 
    >
      <div className="modal__content">
        <button
          type="button"
          className="modal__close"
          onClick={onClose}
          aria-label="Fechar"
        >
          <img src={line} alt="" />
          <img src={line} alt="" className="modal__close-mirror" />
        </button>

        <img
          className="modal__photo"
          src={product.photo}
          alt={product.productName}
        />

        <div className="modal__info">
          <h2 id="modal-title" className="modal__title">
            {product.productName}
          </h2>
          <p className="modal__price">{formatPrice(product.price)}</p>

          <p className="modal__description">
            Many desktop publishing packages and web page editors now many
            desktop publishing
          </p>
          <a href="#" className="modal__details">
            Veja mais detalhes do produto &gt;
          </a>

          <div className="modal__actions">
            <div className="modal__counter">
              <button
                type="button"
                onClick={decrease}
                aria-label="Diminuir quantidade"
                disabled={quantity === 1}
              >
                <img src={minus} alt="" />
              </button>
              <span aria-live="polite">
                {String(quantity).padStart(2, "0")}
              </span>
              <button
                type="button"
                onClick={increase}
                aria-label="Aumentar quantidade"
              >
                <img src={plus} alt="" />
              </button>
            </div>

            <button type="button" className="modal__buy">
              Comprar
            </button>
          </div>
        </div>
      </div>
    </dialog>
  );
}
