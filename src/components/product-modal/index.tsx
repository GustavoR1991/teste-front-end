import "./style.scss";

import { useEffect, useRef, useState } from "react";
import type { Product } from "../../types/product";
import { formatPrice } from "../../utils/formatPrice";
import minus from "../../assets/svg/minus.svg";
import plus from "../../assets/svg/plus.svg";
import linha from "../../assets/svg/Line 14.svg";

interface ProductModalProps {
  product: Product;
  onClose: () => void;
}

export function ProductModal({ product, onClose }: ProductModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [quantidade, setQuantidade] = useState(1);

  useEffect(() => {
    dialogRef.current?.showModal();
  }, []);

  const diminuir = () => setQuantidade((q) => Math.max(1, q - 1));
  const aumentar = () => setQuantidade((q) => q + 1);

  return (
    <dialog
      ref={dialogRef}
      className="modal"
      aria-labelledby="modal-titulo"
      onClose={onClose} 
      onClick={(e) => e.target === dialogRef.current && onClose()} 
    >
      <div className="modal__conteudo">
        <button
          type="button"
          className="modal__fechar"
          onClick={onClose}
          aria-label="Fechar"
        >
          <img src={linha} alt="" />
          <img src={linha} alt="" className="modal__fechar-espelho" />
        </button>

        <img
          className="modal__foto"
          src={product.photo}
          alt={product.productName}
        />

        <div className="modal__info">
          <h2 id="modal-titulo" className="modal__titulo">
            {product.productName}
          </h2>
          <p className="modal__preco">{formatPrice(product.price)}</p>

          <p className="modal__descricao">
            Many desktop publishing packages and web page editors now many
            desktop publishing
          </p>
          <a href="#" className="modal__detalhes">
            Veja mais detalhes do produto &gt;
          </a>

          <div className="modal__acoes">
            <div className="modal__contador">
              <button
                type="button"
                onClick={diminuir}
                aria-label="Diminuir quantidade"
                disabled={quantidade === 1}
              >
                <img src={minus} alt="" />
              </button>
              <span aria-live="polite">
                {String(quantidade).padStart(2, "0")}
              </span>
              <button
                type="button"
                onClick={aumentar}
                aria-label="Aumentar quantidade"
              >
                <img src={plus} alt="" />
              </button>
            </div>

            <button type="button" className="modal__comprar">
              Comprar
            </button>
          </div>
        </div>
      </div>
    </dialog>
  );
}
