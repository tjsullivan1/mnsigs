

import React from 'react';
import { CartProvider } from './context/CartContext';
import { ProductList } from './components/ProductList';
import { CartSummary } from './components/CartSummary';
import { PayPalCheckoutButton } from './components/PayPalCheckoutButton';
import './styles/global.css';

function App() {
  return (
    <CartProvider>
      <div className="app">
        <header className="app__header">
          <h1 className="app__title">MN Sigs Store</h1>
          <p className="app__subtitle">Your favorite products, delivered with PayPal</p>
        </header>

        <main className="app__main">
          <div className="app__content">
            <div className="app__products">
              <ProductList />
            </div>
            
            <aside className="app__sidebar">
              <div className="app__cart">
                <CartSummary />
                <div className="app__checkout">
                  <PayPalCheckoutButton />
                </div>
              </div>
            </aside>
          </div>
        </main>

        <footer className="app__footer">
          <p>&copy; 2025 MN Sigs Store. Powered by PayPal.</p>
        </footer>
      </div>
    </CartProvider>
  );
}

export default App;