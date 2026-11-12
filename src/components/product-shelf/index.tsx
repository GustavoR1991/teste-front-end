import { useState } from "react";
import type { Product } from "../../types/product";
import { ProductCard } from "../product-card";
import "./style.scss";

const ABAS = [
  "Celular",
  "Acessórios",
  "Tablets",
  "Notebooks",
  "TVs",
  "Ver todos",
];
const POR_PAGINA = 4;

interface ProductShelfProps {
  id?: string;
  titulo: string;
  products: Product[];
  onSelect: (product: Product) => void;
  mostrarAbas?: boolean;
}

export function ProductShelf({
  id,
  titulo,
  products,
  onSelect,
  mostrarAbas = false,
}: ProductShelfProps) {
  const [abaAtiva, setAbaAtiva] = useState(ABAS[0]);
  const [pagina, setPagina] = useState(0);

  const totalPaginas = Math.ceil(products.length / POR_PAGINA);
  const visiveis = products.slice(
    pagina * POR_PAGINA,
    pagina * POR_PAGINA + POR_PAGINA,
  );

  const anterior = () => setPagina((p) => (p === 0 ? totalPaginas - 1 : p - 1));
  const proxima = () => setPagina((p) => (p === totalPaginas - 1 ? 0 : p + 1));

  return (
    <section className="shelf" id={id}>
      <h2 className="shelf__titulo">{titulo}</h2>

      {mostrarAbas ? (
        <ul className="shelf__abas">
          {ABAS.map((aba) => (
            <li key={aba}>
              <button
                type="button"
                className={`shelf__aba ${abaAtiva === aba ? "shelf__aba--ativa" : ""}`}
                aria-pressed={abaAtiva === aba}
                onClick={() => setAbaAtiva(aba)}
              >
                {aba}
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <a href="#" className="shelf__ver-todos">
          Ver todos
        </a>
      )}

      <div className="shelf__carrossel">
        <button
          type="button"
          className="shelf__seta shelf__seta--esquerda"
          onClick={anterior}
          aria-label="Produtos anteriores"
        >
          ‹
        </button>

        <ul className="shelf__lista">
          {visiveis.map((product) => (
            <li key={product.productName}>
              <ProductCard product={product} onSelect={onSelect} />
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="shelf__seta shelf__seta--direita"
          onClick={proxima}
          aria-label="Próximos produtos"
        >
          ›
        </button>
      </div>
    </section>
  );
}
