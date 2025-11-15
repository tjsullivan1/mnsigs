import { API_BASE_URL } from '../config';
import type { CartItem } from '../types/cart';

// Response interfaces for backend API
export interface CreateOrderResponse {
  orderID: string;
}

export interface CaptureOrderResponse {
  status: "success" | "error";
  message?: string;
}

/**
 * Create a PayPal order via backend API
 * @param items - Cart items to include in the order
 * @returns Promise<CreateOrderResponse> - Contains the PayPal order ID
 */
export async function createOrder(items: CartItem[]): Promise<CreateOrderResponse> {
  try {
    // Build payload from cart items
    const payload = {
      items: items.map(item => ({
        productId: item.product.id,
        quantity: item.quantity,
      })),
    };

    const response = await fetch(`${API_BASE_URL}/api/create-order`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`Failed to create order: ${response.status} ${response.statusText}`);
    }

    const orderData: CreateOrderResponse = await response.json();
    return orderData;
  } catch (error) {
    console.error('Error creating order:', error);
    throw new Error('Failed to create order. Please try again.');
  }
}

/**
 * Capture a PayPal order via backend API
 * @param orderID - The PayPal order ID to capture
 * @returns Promise<CaptureOrderResponse> - Status of the capture operation
 */
export async function captureOrder(orderID: string): Promise<CaptureOrderResponse> {
  try {
    const payload = { orderID };

    const response = await fetch(`${API_BASE_URL}/api/capture-order`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`Failed to capture order: ${response.status} ${response.statusText}`);
    }

    const captureData: CaptureOrderResponse = await response.json();
    return captureData;
  } catch (error) {
    console.error('Error capturing order:', error);
    throw new Error('Failed to process payment. Please try again.');
  }
}