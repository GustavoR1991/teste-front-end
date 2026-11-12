import { useEffect, useState } from "react";
import type { Product, ProductsResponse } from "../types/product";

const PRODUCTS_URL =
  "/api/teste-front-end/junior/tecnologia/lista-produtos/produtos.json";

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(PRODUCTS_URL)
      .then((res) => {
        if (!res.ok) throw new Error();
        return res.json() as Promise<ProductsResponse>;
      })
      .then((data) => setProducts(data.products))
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  return { products, loading, error };
}
