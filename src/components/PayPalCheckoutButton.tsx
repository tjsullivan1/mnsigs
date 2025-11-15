import React, { useEffect, useState, useRef } from 'react';
import { loadScript, type PayPalNamespace } from '@paypal/paypal-js';
import { useCart } from '../context/CartContext';
import { createOrder, captureOrder } from '../api/checkout';
import { PAYPAL_CLIENT_ID } from '../config';

export function PayPalCheckoutButton() {
  const { items, currency, clearCart } = useCart();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const paypalRef = useRef<HTMLDivElement>(null);

  const isCartEmpty = items.length === 0;

  useEffect(() => {
    const initializePayPal = async () => {
      try {
        setIsLoading(true);
        setError(null);

        // Check if PayPal client ID is configured
        if (!PAYPAL_CLIENT_ID) {
          setError('PayPal is not configured. Please set VITE_PAYPAL_CLIENT_ID environment variable.');
          setIsLoading(false);
          return;
        }

        // Load PayPal script
        const paypal = await loadScript({
          clientId: PAYPAL_CLIENT_ID,
          currency: currency,
        }) as PayPalNamespace;

        if (!paypal || !paypalRef.current) {
          throw new Error('PayPal SDK failed to load');
        }

        // Clear any existing PayPal buttons
        paypalRef.current.innerHTML = '';

        if (!isCartEmpty) {
          // Render PayPal buttons
          await paypal.Buttons!({
            createOrder: async () => {
              try {
                setIsProcessing(true);
                const orderResponse = await createOrder(items);
                return orderResponse.orderID;
              } catch (error) {
                console.error('Error creating order:', error);
                setError('Failed to create order. Please try again.');
                throw error;
              } finally {
                setIsProcessing(false);
              }
            },

            onApprove: async (data: any) => {
              try {
                setIsProcessing(true);
                const captureResponse = await captureOrder(data.orderID);
                
                if (captureResponse.status === 'success') {
                  clearCart();
                  setSuccessMessage('Payment completed successfully! Thank you for your purchase.');
                  setError(null);
                } else {
                  setError(captureResponse.message || 'Payment failed. Please try again.');
                }
              } catch (error) {
                console.error('Error capturing order:', error);
                setError('Payment processing failed. Please try again.');
              } finally {
                setIsProcessing(false);
              }
            },

            onError: (error: any) => {
              console.error('PayPal error:', error);
              setError('PayPal encountered an error. Please try again.');
              setIsProcessing(false);
            },

            onCancel: () => {
              setError(null);
              setIsProcessing(false);
            },

            style: {
              layout: 'vertical',
              color: 'gold',
              shape: 'rect',
              label: 'paypal',
            },
          }).render(paypalRef.current);
        }

        setIsLoading(false);
      } catch (error) {
        console.error('PayPal initialization error:', error);
        setError('Failed to initialize PayPal. Please refresh the page and try again.');
        setIsLoading(false);
      }
    };

    initializePayPal();
  }, [items, currency, isCartEmpty, clearCart]);

  // Show success message
  if (successMessage) {
    return (
      <div className="paypal-checkout">
        <div className="paypal-checkout__success">
          <h3>✅ {successMessage}</h3>
          <button 
            onClick={() => setSuccessMessage(null)}
            className="paypal-checkout__continue-button"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  // Show empty cart message
  if (isCartEmpty) {
    return (
      <div className="paypal-checkout">
        <div className="paypal-checkout__empty">
          Add items to your cart to checkout
        </div>
      </div>
    );
  }

  return (
    <div className="paypal-checkout">
      <h3 className="paypal-checkout__title">Checkout</h3>
      
      {isLoading && (
        <div className="paypal-checkout__loading">
          Loading PayPal...
        </div>
      )}

      {error && (
        <div className="paypal-checkout__error">
          <p>{error}</p>
          <button 
            onClick={() => window.location.reload()}
            className="paypal-checkout__retry-button"
          >
            Retry
          </button>
        </div>
      )}

      {isProcessing && (
        <div className="paypal-checkout__processing">
          Processing payment...
        </div>
      )}

      <div 
        ref={paypalRef} 
        className="paypal-checkout__container"
        style={{ display: isLoading || error ? 'none' : 'block' }}
      />
    </div>
  );
}