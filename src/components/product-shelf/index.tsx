import { useState } from "react";
import type { Product } from "../../types/product";
import { ProductCard } from "../product-card";
import "./style.scss";

const TABS = [
  "Celular",
  "Acessórios",
  "Tablets",
  "Notebooks",
  "TVs",
  "Ver todos",
];
const PER_PAGE = 4;

interface ProductShelfProps {
  id?: string;
  title: string;
  products: Product[];
  onSelect: (product: Product) => void;
  showTabs?: boolean;
}

export function ProductShelf({
  id,
  title,
  products,
  onSelect,
  showTabs = false,
}: ProductShelfProps) {
  const [activeTab, setActiveTab] = useState(TABS[0]);
  const [page, setPage] = useState(0);

  const totalPages = Math.ceil(products.length / PER_PAGE);
  const visibleProducts = products.slice(
    page * PER_PAGE,
    page * PER_PAGE + PER_PAGE,
  );

  const previous = () => setPage((p) => (p === 0 ? totalPages - 1 : p - 1));
  const next = () => setPage((p) => (p === totalPages - 1 ? 0 : p + 1));

  return (
    <section className="shelf" id={id}>
      <h2 className="shelf__title">{title}</h2>

      {showTabs ? (
        <ul className="shelf__tabs">
          {TABS.map((tab) => (
            <li key={tab}>
              <button
                type="button"
                className={`shelf__tab ${activeTab === tab ? "shelf__tab--active" : ""}`}
                aria-pressed={activeTab === tab}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <a href="#" className="shelf__see-all">
          Ver todos
        </a>
      )}

      <div className="shelf__carousel">
        <button
          type="button"
          className="shelf__arrow shelf__arrow--left"
          onClick={previous}
          aria-label="Produtos anteriores"
        >
          ‹
        </button>

        <ul className="shelf__list">
          {visibleProducts.map((product) => (
            <li key={product.productName}>
              <ProductCard product={product} onSelect={onSelect} />
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="shelf__arrow shelf__arrow--right"
          onClick={next}
          aria-label="Próximos produtos"
        >
          ›
        </button>
      </div>
    </section>
  );
}
