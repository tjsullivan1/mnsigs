export interface Product {
  id: string;
  name: string;
  description: string;
  price: number; // in major units (e.g. 19.99)
  currency: string; // e.g. "USD"
  imageUrl?: string;
}