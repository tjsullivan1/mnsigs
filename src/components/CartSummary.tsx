

import React from 'react';
import { useCart } from '../context/CartContext';

export function CartSummary() {
  const { items, totalAmount, currency, setQuantity, removeItem } = useCart();

  const formatPrice = (price: number, currency: string) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency,
    }).format(price);
  };

  const handleQuantityChange = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(productId);
    } else {
      setQuantity(productId, quantity);
    }
  };

  if (items.length === 0) {
    return (
      <div className="cart-summary">
        <h2 className="cart-summary__title">Cart</h2>
        <div className="cart-summary__empty">Your cart is empty</div>
      </div>
    );
  }

  return (
    <div className="cart-summary">
      <h2 className="cart-summary__title">Cart</h2>
      <div className="cart-summary__items">
        {items.map((item) => (
          <div key={item.product.id} className="cart-item">
            <div className="cart-item__details">
              <h3 className="cart-item__name">{item.product.name}</h3>
              <p className="cart-item__price">
                {formatPrice(item.product.price, item.product.currency)}
              </p>
            </div>
            <div className="cart-item__controls">
              <div className="cart-item__quantity">
                <button
                  onClick={() => handleQuantityChange(item.product.id, item.quantity - 1)}
                  className="cart-item__quantity-button"
                >
                  -
                </button>
                <span className="cart-item__quantity-value">{item.quantity}</span>
                <button
                  onClick={() => handleQuantityChange(item.product.id, item.quantity + 1)}
                  className="cart-item__quantity-button"
                >
                  +
                </button>
              </div>
              <button
                onClick={() => removeItem(item.product.id)}
                className="cart-item__remove-button"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-summary__total">
        <strong>Total: {formatPrice(totalAmount, currency)}</strong>
      </div>
    </div>
  );
}