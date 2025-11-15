# MN Sigs PayPal Storefront

A complete e-commerce solution with React TypeScript frontend and FastAPI Python backend, featuring PayPal integration.

## Features

### Frontend (React + TypeScript)
- ✅ Product catalog display
- ✅ Shopping cart with add/remove/quantity management
- ✅ PayPal checkout integration
- ✅ Responsive design (mobile-first)
- ✅ TypeScript for type safety
- ✅ Environment variable configuration

### Backend (FastAPI + Python)
- ✅ RESTful API with FastAPI
- ✅ Secure PayPal Orders API integration
- ✅ Product catalog management
- ✅ CORS configured for frontend
- ✅ Async/await for performance

### DevOps
- ✅ Complete Docker setup (frontend + backend)
- ✅ Docker Compose orchestration
- ✅ Health checks and monitoring
- ✅ Production-ready configuration

## Quick Start

### Prerequisites

- Node.js 18+ and npm
- Python 3.11+ (for backend)
- PayPal Developer Account
- Docker (optional, for containerized setup)

### Complete Stack Development

1. **Set up environment variables:**
   ```bash
   cp .env.example .env
   # Edit .env with your PayPal credentials from https://developer.paypal.com/
   ```

2. **Option A: Run with Docker (Recommended):**
   ```bash
   docker-compose up -d
   # Frontend: http://localhost:3000
   # Backend API: http://localhost:8000
   ```

3. **Option B: Run separately:**

   **Backend:**
   ```bash
   cd backend
   python -m venv venv
   source venv/bin/activate  # Windows: venv\Scripts\activate
   pip install -r requirements.txt
   cp .env.example .env  # Configure PayPal credentials
   python main.py
   ```

   **Frontend:**
   ```bash
   npm install
   cp .env.example .env.local  # Configure API URL and PayPal client ID
   npm run dev
   ```

4. **Access the application:**
   - Development: `http://localhost:5173` (frontend) + `http://localhost:8000` (backend)
   - Docker: `http://localhost:3000` (complete stack)

### Build for Production

```bash
# Frontend
npm run build
npm run preview

# Complete stack with Docker
docker-compose up -d
```

## Environment Variables

### Required PayPal Configuration

| Variable | Description | Example |
|----------|-------------|---------|
| `PAYPAL_CLIENT_ID` | PayPal client ID (both frontend & backend) | `AXxXxXxX...` |
| `PAYPAL_CLIENT_SECRET` | PayPal client secret (backend only) | `EXxXxXxX...` |
| `PAYPAL_MODE` | PayPal environment | `sandbox` or `live` |

### Optional Configuration

| Variable | Description | Default |
|----------|-------------|---------|
| `VITE_API_BASE_URL` | Backend API URL | `http://localhost:8000` |
| `API_HOST` | Backend server host | `0.0.0.0` |
| `API_PORT` | Backend server port | `8000` |

## API Endpoints

The backend provides these endpoints:

- `GET /products` - Get all products
- `POST /api/create-order` - Create PayPal order
- `POST /api/capture-order` - Capture PayPal payment
- `GET /health` - Health check

See `backend/README.md` for detailed API documentation.

## Project Structure

```
mnsigs/
├── src/                    # React frontend
│   ├── components/         # React components
│   ├── context/           # React context
│   ├── types/             # TypeScript types
│   ├── api/               # API client
│   └── styles/            # CSS styles
├── backend/               # FastAPI backend
│   ├── main.py           # FastAPI app
│   ├── models.py         # Pydantic models
│   ├── products.py       # Product data
│   ├── paypal_service.py # PayPal integration
│   └── config.py         # Configuration
├── docker-compose.yml    # Complete stack
├── Dockerfile           # Frontend container
└── README.md           # This file
```

## Sample Products

The backend includes 6 sample products:

- MN Sigs Navy T-Shirt ($25.00)
- MN Sigs Gray T-Shirt ($25.00)
- MN Sigs Black Hoodie ($45.00)
- MN Sigs Red Cap ($18.00)
- MN Sigs Sticker Pack ($8.00)
- MN Sigs Coffee Mug ($15.00)

## PayPal Integration Flow

1. Frontend loads products from backend API
2. User adds items to cart (managed by React context)
3. User clicks PayPal checkout button
4. Frontend calls backend to create PayPal order
5. PayPal SDK shows payment interface
6. User completes payment with PayPal
7. Frontend calls backend to capture payment
8. Backend confirms payment with PayPal
9. User sees success message and cart is cleared

## Docker Deployment

### Development
```bash
docker-compose up -d
```

### Production
```bash
# Set production environment variables
export PAYPAL_MODE=live
export PAYPAL_CLIENT_ID=your-production-client-id
export PAYPAL_CLIENT_SECRET=your-production-client-secret

# Deploy
docker-compose -f docker-compose.yml up -d
```

## Development Notes

- **Frontend**: Built with React 18 + TypeScript + Vite
- **Backend**: Built with FastAPI + Python 3.11
- **PayPal**: Uses PayPal Orders API v2 for secure payments
- **State Management**: React Context + useReducer (no Redux)
- **Styling**: Pure CSS with responsive design
- **Type Safety**: Full TypeScript coverage

## Troubleshooting

**PayPal not loading?**
- Check PayPal credentials are correct
- Verify client ID matches between frontend and backend
- Check browser console for PayPal SDK errors
- Ensure backend is running and accessible

**API errors?**
- Verify backend is running on port 8000
- Check CORS configuration for your frontend domain
- Ensure PayPal credentials are set in backend
- Check backend logs for detailed error messages

**Docker issues?**
- Ensure ports 3000 and 8000 are available
- Check Docker logs: `docker-compose logs`
- Verify .env file is properly configured
- Try rebuilding: `docker-compose build --no-cache`

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly (frontend + backend + PayPal integration)
5. Submit a pull request

## License

See LICENSE file for details.