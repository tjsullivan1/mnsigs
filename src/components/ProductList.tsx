import React, { useState, useEffect } from 'react';
import { ProductCard } from './ProductCard';
import { fetchProducts } from '../api/products';
import { useCart } from '../context/CartContext';
import type { Product } from '../types/product';

export function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const { addItem } = useCart();

  useEffect(() => {
    const loadProducts = async () => {
      try {
        setLoading(true);
        setError(null);
        const fetchedProducts = await fetchProducts();
        setProducts(fetchedProducts);
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Failed to load products';
        setError(errorMessage);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  const handleAddToCart = (product: Product) => {
    addItem(product);
  };

  if (loading) {
    return (
      <div className="product-list">
        <div className="product-list__loading">Loading products...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="product-list">
        <div className="product-list__error">
          <p>Error: {error}</p>
          <button 
            onClick={() => window.location.reload()}
            className="product-list__retry-button"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="product-list">
        <div className="product-list__empty">No products available</div>
      </div>
    );
  }

  return (
    <div className="product-list">
      <h2 className="product-list__title">Products</h2>
      <div className="product-list__grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
}