import { API_BASE_URL } from '../config';
import type { Product } from '../types/product';

/**
 * Fetch products from the backend API
 * @returns Promise<Product[]> - Array of available products
 */
export async function fetchProducts(): Promise<Product[]> {
  try {
    console.log('Testing url', API_BASE_URL);
    const response = await fetch(`${API_BASE_URL}/products`);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch products: ${response.status} ${response.statusText}`);
    }

    const products: Product[] = await response.json();
    return products;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw new Error('Failed to load products. Please try again later.');
  }
}