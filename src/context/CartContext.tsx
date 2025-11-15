import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import type { CartState, CartAction, CartItem } from '../types/cart';
import type { Product } from '../types/product';
import { DEFAULT_CURRENCY } from '../config';

// Initial state
const initialState: CartState = {
  items: [],
};

// Reducer function
function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existingItemIndex = state.items.findIndex(
        item => item.product.id === action.product.id
      );

      if (existingItemIndex >= 0) {
        // Item exists, increment quantity
        const updatedItems = [...state.items];
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + 1,
        };
        return { ...state, items: updatedItems };
      } else {
        // New item, add to cart
        const newItem: CartItem = {
          product: action.product,
          quantity: 1,
        };
        return { ...state, items: [...state.items, newItem] };
      }
    }

    case 'REMOVE_ITEM': {
      const filteredItems = state.items.filter(
        item => item.product.id !== action.productId
      );
      return { ...state, items: filteredItems };
    }

    case 'SET_QUANTITY': {
      if (action.quantity <= 0) {
        // Remove item if quantity is 0 or negative
        const filteredItems = state.items.filter(
          item => item.product.id !== action.productId
        );
        return { ...state, items: filteredItems };
      }

      const updatedItems = state.items.map(item =>
        item.product.id === action.productId
          ? { ...item, quantity: action.quantity }
          : item
      );
      return { ...state, items: updatedItems };
    }

    case 'CLEAR_CART': {
      return { ...state, items: [] };
    }

    default:
      return state;
  }
}

// Context interface
interface CartContextType {
  items: CartItem[];
  totalAmount: number;
  currency: string;
  addItem: (product: Product) => void;
  removeItem: (productId: string) => void;
  setQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
}

// Create context
const CartContext = createContext<CartContextType | undefined>(undefined);

// Provider component
interface CartProviderProps {
  children: ReactNode;
}

export function CartProvider({ children }: CartProviderProps) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // Calculate total amount
  const totalAmount = state.items.reduce(
    (total: number, item: CartItem) => total + item.product.price * item.quantity,
    0
  );

  // Get currency from first item or default
  const currency = state.items.length > 0 ? state.items[0].product.currency : DEFAULT_CURRENCY;

  // Action creators
  const addItem = (product: Product) => {
    dispatch({ type: 'ADD_ITEM', product });
  };

  const removeItem = (productId: string) => {
    dispatch({ type: 'REMOVE_ITEM', productId });
  };

  const setQuantity = (productId: string, quantity: number) => {
    dispatch({ type: 'SET_QUANTITY', productId, quantity });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const contextValue: CartContextType = {
    items: state.items,
    totalAmount,
    currency,
    addItem,
    removeItem,
    setQuantity,
    clearCart,
  };

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
}

// Hook to use cart context
export function useCart(): CartContextType {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}