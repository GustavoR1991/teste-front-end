import { useState } from "react";
import { useProducts } from "../../hooks/useProducts";
import { Categories } from "../categories";
import "./style.scss";
import type { Product } from "../../types/product";
import { ProductShelf } from "../product-shelf";
import { Partners } from "../partners";
import { Brands } from "../brands";
import { ProductModal } from "../product-modal";

export function Home() {
  const { products, loading, error } = useProducts();
  const [selected, setSelected] = useState<Product | null>(null);
  const temProdutos = !loading && !error;
  return (
    <main className="home">
      <section className="banner">
        <div className="banner__conteudo">
          <h1 className="banner__titulo">
            Venha conhecer nossas
            <br /> promoções
          </h1>
          <p className="banner__subtitulo">
            <strong>50% Off</strong> nos produtos
          </p>
          <a href="#vitrine" className="banner__button">
            Ver produto
          </a>
        </div>
      </section>
      <Categories />

      {loading && (
        <p className="home__status" role="status">
          Carregando produtos...
        </p>
      )}
      {error && (
        <p className="home__status" role="alert">
          Não foi possível carregar os produtos.
        </p>
      )}

      {temProdutos && (
        <ProductShelf
          id="vitrine"
          titulo="Produtos relacionados"
          products={products}
          onSelect={setSelected}
          mostrarAbas
        />
      )}
      <Partners />
      {temProdutos && (
        <ProductShelf
          id="vitrine"
          titulo="Produtos relacionados"
          products={products}
          onSelect={setSelected}
        />
      )}
      <Partners />
      <Brands />
      {temProdutos && (
        <ProductShelf
          id="vitrine"
          titulo="Produtos relacionados"
          products={products}
          onSelect={setSelected}
        />
      )}
      {selected && (
        <ProductModal
          key={selected.productName}
          product={selected}
          onClose={() => setSelected(null)}
        />
      )}
    </main>
  );
}
