# GitHub Copilot Spec: Minimal React PayPal Storefront (Frontend Only)

You are GitHub Copilot. Use this spec to generate a minimal React-based storefront UI that integrates with a backend PayPal Orders API (not implemented here, just called via HTTP).

The focus:
- Simple product list
- Client-side cart
- Single "Pay with PayPal" button
- Integration with PayPal JS SDK using a backend endpoint for order creation/capture
- Clear extension points for proper Docker support (multi-stage build + env vars)

---

## 1. Tech Stack

- React + TypeScript (use Vite for bootstrapping)
- Styling: simple CSS modules or basic CSS (no UI framework needed)
- State management: React context + hooks (no Redux)
- HTTP client: `fetch` (no axios required)
- Configuration via environment variables (for backend URL and PayPal client ID)

Environment variables (Vite-style):
- `VITE_API_BASE_URL` – base URL for backend (e.g., `https://api.example.com`)
- `VITE_PAYPAL_CLIENT_ID` – PayPal client ID (frontend-visible)

---

## 2. Project Structure

Create this folder structure:

- `src/`
  - `main.tsx` – React entry point
  - `App.tsx` – Layout and routing container
  - `components/`
    - `ProductList.tsx`
    - `ProductCard.tsx`
    - `CartSummary.tsx`
    - `PayPalCheckoutButton.tsx`
  - `context/`
    - `CartContext.tsx`
  - `types/`
    - `product.ts`
    - `cart.ts`
  - `api/`
    - `products.ts`
    - `checkout.ts`
  - `config.ts`
  - `styles/` (optional)
    - `global.css`

---

## 3. Data Types

In `src/types/product.ts`:

```ts
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number; // in major units (e.g. 19.99)
  currency: string; // e.g. "USD"
  imageUrl?: string;
}
In src/types/cart.ts:

import type { Product } from "./product";

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface CartState {
  items: CartItem[];
}

export type CartAction =
  | { type: "ADD_ITEM"; product: Product }
  | { type: "REMOVE_ITEM"; productId: string }
  | { type: "CLEAR_CART" }
  | { type: "SET_QUANTITY"; productId: string; quantity: number };

4. Cart Context

In src/context/CartContext.tsx:

Implement a CartProvider using useReducer<CartState, CartAction>.

Expose a useCart() hook that provides:

items: CartItem[]

totalAmount: number (sum of price * quantity)

currency: string (assume from first item or default to "USD")

addItem(product: Product)

removeItem(productId: string)

setQuantity(productId: string, quantity: number)

clearCart()

5. Config

In src/config.ts:

export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? "http://localhost:8000";
export const PAYPAL_CLIENT_ID = import.meta.env.VITE_PAYPAL_CLIENT_ID ?? "";
export const DEFAULT_CURRENCY = "USD";

6. API Layer
src/api/products.ts

Implement fetchProducts(): Promise<Product[]>

Use fetch(\${API_BASE_URL}/products`)`

Handle JSON parsing and basic error handling.

src/api/checkout.ts

Assume backend exposes:

POST /api/create-order

Request body: { items: { productId: string; quantity: number }[] }

Response: { orderID: string }

POST /api/capture-order

Request body: { orderID: string }

Response: { status: "success" | "error"; message?: string }

Implement:

import type { CartItem } from "../types/cart";

export interface CreateOrderResponse {
  orderID: string;
}

export interface CaptureOrderResponse {
  status: "success" | "error";
  message?: string;
}

export async function createOrder(items: CartItem[]): Promise<CreateOrderResponse> {
  // build payload from cart items
}

export async function captureOrder(orderID: string): Promise<CaptureOrderResponse> {
  // call backend
}

7. Components
App.tsx

Wrap the app with CartProvider.

Layout:

Header with app title.

Main area with:

Left: ProductList

Right: CartSummary + PayPalCheckoutButton

ProductList.tsx

Fetch products on mount (useEffect + fetchProducts).

Show loading and error states.

Render a list of ProductCard.

ProductCard.tsx

Props:

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}


Show product name, description, price, and "Add to cart" button.

CartSummary.tsx

Use useCart() to get items and total.

Show:

List of items with name and quantity.

Total amount and currency.

Optional: ability to adjust quantity or remove items.

PayPalCheckoutButton.tsx

Responsibilities:

Load PayPal JS SDK script dynamically using PAYPAL_CLIENT_ID and currency.

Render a container <div id="paypal-button-container" />.

On initial render or when cart changes:

If cart is empty, either disable or hide the button.

Use PayPal JS SDK to render smart buttons:

createOrder callback:

Calls createOrder API with current cart items.

Returns the orderID value to PayPal.

onApprove callback:

Calls captureOrder(orderID).

On success, clear the cart and show a simple success message.

Handle errors gracefully with an alert or inline message.

Include basic loading state while the PayPal script is loading.

Note: If PayPal JS SDK is not available or PAYPAL_CLIENT_ID is empty, show a warning message.

8. PayPal Script Loader

Create a small helper in PayPalCheckoutButton.tsx or a separate file:

function loadPayPalScript(clientId: string, currency: string): Promise<typeof window.paypal> {
  // If already loaded, resolve immediately.
  // Otherwise, create <script src="https://www.paypal.com/sdk/js?client-id=...&currency=...">
}


Use this helper in a useEffect inside PayPalCheckoutButton.

9. Styling Expectations

Use a simple responsive layout:

Two-column on desktop (products / cart).

Stacked layout on mobile.

Minimal styling: some padding, borders, etc.

You can define basic styles in src/styles/global.css and import in main.tsx.

10. Docker Support (Frontend)

Do not implement Docker in this spec, but add comments and placeholders that make it easy to add later.

Add comments in relevant places and create a placeholder file to guide Dockerization:

Create DOCKER_NOTES.md in repo root with:

Plan to use a multi-stage Dockerfile:

Stage 1: Node image to build the React app (npm install, npm run build).

Stage 2: Nginx (or other static server) to serve compiled assets from dist/.

Mention environment variables:

At build time, VITE_API_BASE_URL and VITE_PAYPAL_CLIENT_ID will be set.

Example outline (comments only, not full Dockerfile):

# Stage 1: build
# FROM node:20-alpine AS build
# WORKDIR /app
# COPY package*.json ./
# RUN npm install
# COPY . .
# RUN npm run build

# Stage 2: serve
# FROM nginx:alpine
# COPY --from=build /app/dist /usr/share/nginx/html
# EXPOSE 80
# CMD ["nginx", "-g", "daemon off;"]


Add comments in config.ts explaining that VITE_API_BASE_URL and VITE_PAYPAL_CLIENT_ID should be provided via Docker/environment when building the image.

Optionally, create a docker-compose.example.yml with comments only:

# version: "3.8"
# services:
#   frontend:
#     build:
#       context: .
#       dockerfile: Dockerfile
#     ports:
#       - "3000:80"
#     environment:
#       - VITE_API_BASE_URL=http://backend:8000
#       - VITE_PAYPAL_CLIENT_ID=REPLACE_WITH_SANDBOX_CLIENT_ID
#   backend:
#     # Placeholder for backend service
#     image: my-backend-image
#     ports:
#       - "8000:8000"

11. Developer Experience

Add npm scripts in package.json:

"dev": "vite"

"build": "vite build"

"preview": "vite preview"

Ensure TypeScript is properly configured (tsconfig.json).

Add basic ESLint configuration if not provided by Vite template.

12. Non-Goals for This Frontend Spec

No user authentication.

No coupons, discounts, or advanced pricing.

No real backend logic: assume /products, /api/create-order, and /api/capture-order exist and are correct.

No inventory management.

This spec should be enough for you (GitHub Copilot) to scaffold the React app, components, context, basic styling, and helpful Docker notes.


If you’d like, I can next turn this spec into a starter repo layout (with actual `main.tsx`, `CartContext.tsx`, etc.) that Copilot can then extend.
::contentReference[oaicite:0]{index=0}