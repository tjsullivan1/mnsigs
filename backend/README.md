# MN Sigs Backend API

FastAPI backend for the MN Sigs PayPal storefront with product catalog and secure PayPal integration.

## Features

- ✅ RESTful API with FastAPI
- ✅ PayPal Orders API integration (create & capture)
- ✅ Product catalog management
- ✅ CORS configured for frontend
- ✅ Environment-based configuration
- ✅ Docker containerization
- ✅ Health checks and monitoring
- ✅ Async/await for performance

## Quick Start

### Prerequisites

- Python 3.11+
- PayPal Developer Account
- PayPal Client ID and Secret

### Local Development

1. **Navigate to backend directory:**
   ```bash
   cd backend
   ```

2. **Create virtual environment:**
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. **Install dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

4. **Set up environment:**
   ```bash
   cp .env.example .env
   # Edit .env with your PayPal credentials
   ```

5. **Run the server:**
   ```bash
   python main.py
   # Or: uvicorn main:app --reload
   ```

6. **Test the API:**
   ```bash
   curl http://localhost:8000/products
   ```

### Docker Development

```bash
# Build and run backend only
docker build -t mnsigs-backend .
docker run -p 8000:8000 --env-file .env mnsigs-backend

# Or run full stack
cd ..
docker-compose up -d
```

## API Endpoints

### Health & Info

- `GET /` - API information
- `GET /health` - Health check
- `GET /api/config` - Configuration info (debug)

### Products

- `GET /products` - Get all products

**Response:**
```json
[
  {
    "id": "mnsigs-tshirt-navy",
    "name": "MN Sigs Navy T-Shirt",
    "description": "Classic navy blue t-shirt with MN Sigs logo",
    "price": 25.00,
    "currency": "USD",
    "imageUrl": "https://example.com/image.jpg"
  }
]
```

### PayPal Checkout

- `POST /api/create-order` - Create PayPal order
- `POST /api/capture-order` - Capture PayPal payment

**Create Order Request:**
```json
{
  "items": [
    {
      "productId": "mnsigs-tshirt-navy",
      "quantity": 2
    }
  ]
}
```

**Create Order Response:**
```json
{
  "orderID": "paypal-order-id-123"
}
```

**Capture Order Request:**
```json
{
  "orderID": "paypal-order-id-123"
}
```

**Capture Order Response:**
```json
{
  "status": "success",
  "message": "Payment completed successfully"
}
```

## Environment Variables

| Variable | Description | Default | Required |
|----------|-------------|---------|----------|
| `PAYPAL_CLIENT_ID` | PayPal client ID | - | ✅ |
| `PAYPAL_CLIENT_SECRET` | PayPal client secret | - | ✅ |
| `PAYPAL_MODE` | PayPal environment | `sandbox` | No |
| `API_HOST` | Server host | `0.0.0.0` | No |
| `API_PORT` | Server port | `8000` | No |
| `DEBUG` | Debug mode | `false` | No |

### PayPal Configuration

1. **Get PayPal Credentials:**
   - Go to [PayPal Developer Dashboard](https://developer.paypal.com/)
   - Create a new app
   - Copy Client ID and Secret

2. **Set Environment Mode:**
   - `sandbox` - For development/testing
   - `live` - For production

## Project Structure

```
backend/
├── main.py              # FastAPI application entry point
├── config.py            # Environment configuration
├── models.py            # Pydantic data models
├── products.py          # Product catalog and data
├── paypal_service.py    # PayPal API integration
├── requirements.txt     # Python dependencies
├── Dockerfile           # Docker container config
├── .env.example         # Environment template
└── README.md           # This file
```

## Sample Products

The API includes 6 sample products:

- MN Sigs Navy T-Shirt ($25.00)
- MN Sigs Gray T-Shirt ($25.00)  
- MN Sigs Black Hoodie ($45.00)
- MN Sigs Red Cap ($18.00)
- MN Sigs Sticker Pack ($8.00)
- MN Sigs Coffee Mug ($15.00)

## PayPal Integration Flow

1. **Frontend** adds items to cart
2. **Frontend** calls `POST /api/create-order` with cart items
3. **Backend** calculates total and creates PayPal order
4. **Backend** returns PayPal order ID to frontend
5. **Frontend** shows PayPal payment buttons
6. **User** approves payment with PayPal
7. **Frontend** calls `POST /api/capture-order` with order ID
8. **Backend** captures payment via PayPal API
9. **Backend** returns success/failure to frontend

## Security Features

- PayPal credentials stored server-side only
- CORS configured for frontend domains
- Input validation with Pydantic models
- Error handling and logging
- Non-root Docker user

## Development

### Adding New Products

Edit `products.py` and add to `SAMPLE_PRODUCTS` list:

```python
Product(
    id="new-product-id",
    name="New Product Name", 
    description="Product description",
    price=29.99,
    currency="USD",
    imageUrl="https://example.com/image.jpg"
)
```

### Testing PayPal Integration

1. Use PayPal sandbox credentials
2. Test with sandbox buyer accounts
3. Monitor transactions in PayPal Developer Dashboard

### Production Deployment

1. **Set production PayPal credentials**
2. **Configure CORS for production domain**
3. **Set `PAYPAL_MODE=live`**
4. **Use HTTPS in production**
5. **Monitor health checks**

## Troubleshooting

**PayPal errors?**
- Verify Client ID and Secret are correct
- Check PayPal mode (sandbox vs live)
- Ensure sufficient account permissions
- Check PayPal Developer Dashboard logs

**CORS errors?**
- Verify frontend URL in `CORS_ORIGINS`
- Check browser developer console
- Ensure proper HTTP methods allowed

**Docker issues?**
- Check container logs: `docker logs <container-name>`
- Verify environment variables are set
- Ensure ports are not already in use

## License

See LICENSE file in project root.