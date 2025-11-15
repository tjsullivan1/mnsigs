from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from typing import List
import uvicorn

from config import settings
from models import (
    Product, 
    CreateOrderRequest, 
    CreateOrderResponse,
    CaptureOrderRequest, 
    CaptureOrderResponse
)
from products import get_all_products
from paypal_service import paypal_service

# Create FastAPI app
app = FastAPI(
    title="MN Sigs PayPal Storefront API",
    description="Backend API for MN Sigs e-commerce storefront with PayPal integration",
    version="1.0.0"
)

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.CORS_ORIGINS,
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT", "DELETE"],
    allow_headers=["*"],
)

# Health check endpoint
@app.get("/")
async def root():
    return {
        "message": "MN Sigs PayPal Storefront API",
        "status": "healthy",
        "version": "1.0.0"
    }

@app.get("/health")
async def health_check():
    return {"status": "healthy"}

# Products endpoint
@app.get("/products", response_model=List[Product])
async def get_products():
    """Get all available products"""
    try:
        products = get_all_products()
        return products
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to fetch products: {str(e)}")

# PayPal create order endpoint  
@app.post("/api/create-order", response_model=CreateOrderResponse)
async def create_paypal_order(request: CreateOrderRequest):
    """Create a PayPal order for checkout"""
    try:
        if not request.items:
            raise HTTPException(status_code=400, detail="No items in cart")
        
        order_response = await paypal_service.create_order(request.items)
        return order_response
        
    except ValueError as e:
        raise HTTPException(status_code=400, detail=str(e))
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to create order: {str(e)}")

# PayPal capture order endpoint
@app.post("/api/capture-order", response_model=CaptureOrderResponse)
async def capture_paypal_order(request: CaptureOrderRequest):
    """Capture a PayPal order after user approval"""
    try:
        if not request.orderID:
            raise HTTPException(status_code=400, detail="Order ID is required")
            
        capture_response = await paypal_service.capture_order(request.orderID)
        
        # Return appropriate HTTP status based on capture result
        if capture_response.status == "error":
            return JSONResponse(
                status_code=400,
                content=capture_response.dict()
            )
        
        return capture_response
        
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to capture order: {str(e)}")

# Configuration endpoint (for debugging)
@app.get("/api/config")
async def get_config():
    """Get API configuration info (for debugging)"""
    return {
        "paypal_mode": settings.PAYPAL_MODE,
        "paypal_configured": bool(settings.PAYPAL_CLIENT_ID and settings.PAYPAL_CLIENT_SECRET),
        "cors_origins": settings.CORS_ORIGINS,
        "debug": settings.DEBUG
    }

if __name__ == "__main__":
    uvicorn.run(
        "main:app",
        host=settings.API_HOST,
        port=settings.API_PORT,
        reload=settings.DEBUG
    )