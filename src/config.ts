// Configuration using Vite environment variables
// These should be provided at build time via Docker environment or .env files
// VITE_API_BASE_URL should point to the backend API server
// VITE_PAYPAL_CLIENT_ID should contain the PayPal sandbox/production client ID

export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? "http://localhost:8000";
export const PAYPAL_CLIENT_ID = import.meta.env.VITE_PAYPAL_CLIENT_ID ?? "";
export const DEFAULT_CURRENCY = "USD";

// For Docker deployment:
// - Set VITE_API_BASE_URL to the backend service URL (e.g., http://backend:8000)
// - Set VITE_PAYPAL_CLIENT_ID to your PayPal sandbox or production client ID
// - These variables are embedded at build time, so they must be available during docker build