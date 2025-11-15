import httpx
import json
from typing import Dict, Any
from config import settings
from models import CartItem, CreateOrderResponse, CaptureOrderResponse
from products import get_product_by_id

class PayPalService:
    def __init__(self):
        self.base_url = settings.paypal_base_url
        self.client_id = settings.PAYPAL_CLIENT_ID
        self.client_secret = settings.PAYPAL_CLIENT_SECRET
        
    async def get_access_token(self) -> str:
        """Get PayPal access token for API calls"""
        if not self.client_id or not self.client_secret:
            raise ValueError("PayPal credentials not configured")
            
        url = f"{self.base_url}/v1/oauth2/token"
        headers = {
            "Accept": "application/json",
            "Accept-Language": "en_US",
        }
        data = "grant_type=client_credentials"
        
        async with httpx.AsyncClient() as client:
            response = await client.post(
                url,
                headers=headers,
                data=data,
                auth=(self.client_id, self.client_secret)
            )
            
        if response.status_code != 200:
            raise Exception(f"Failed to get PayPal access token: {response.text}")
            
        token_data = response.json()
        return token_data["access_token"]
    
    async def create_order(self, items: list[CartItem]) -> CreateOrderResponse:
        """Create a PayPal order"""
        try:
            access_token = await self.get_access_token()
            
            # Calculate order total and build purchase units
            purchase_units = []
            total_amount = 0.0
            order_items = []
            
            for item in items:
                product = get_product_by_id(item.productId)
                if not product:
                    raise ValueError(f"Product not found: {item.productId}")
                
                item_total = product.price * item.quantity
                total_amount += item_total
                
                order_items.append({
                    "name": product.name,
                    "description": product.description,
                    "quantity": str(item.quantity),
                    "unit_amount": {
                        "currency_code": product.currency,
                        "value": f"{product.price:.2f}"
                    }
                })
            
            purchase_units.append({
                "amount": {
                    "currency_code": "USD",
                    "value": f"{total_amount:.2f}",
                    "breakdown": {
                        "item_total": {
                            "currency_code": "USD", 
                            "value": f"{total_amount:.2f}"
                        }
                    }
                },
                "items": order_items
            })
            
            # Create order payload
            order_payload = {
                "intent": "CAPTURE",
                "purchase_units": purchase_units,
                "application_context": {
                    "return_url": "http://localhost:5173/success",
                    "cancel_url": "http://localhost:5173/cancel"
                }
            }
            
            # Make API call to create order
            url = f"{self.base_url}/v2/checkout/orders"
            headers = {
                "Content-Type": "application/json",
                "Authorization": f"Bearer {access_token}",
            }
            
            async with httpx.AsyncClient() as client:
                response = await client.post(
                    url,
                    headers=headers,
                    json=order_payload
                )
            
            if response.status_code not in [200, 201]:
                raise Exception(f"Failed to create PayPal order: {response.text}")
            
            order_data = response.json()
            return CreateOrderResponse(orderID=order_data["id"])
            
        except Exception as e:
            raise Exception(f"PayPal order creation failed: {str(e)}")
    
    async def capture_order(self, order_id: str) -> CaptureOrderResponse:
        """Capture a PayPal order"""
        try:
            access_token = await self.get_access_token()
            
            url = f"{self.base_url}/v2/checkout/orders/{order_id}/capture"
            headers = {
                "Content-Type": "application/json",
                "Authorization": f"Bearer {access_token}",
            }
            
            async with httpx.AsyncClient() as client:
                response = await client.post(url, headers=headers)
            
            if response.status_code not in [200, 201]:
                return CaptureOrderResponse(
                    status="error",
                    message=f"Failed to capture order: {response.text}"
                )
            
            capture_data = response.json()
            
            # Check capture status
            if capture_data.get("status") == "COMPLETED":
                return CaptureOrderResponse(
                    status="success",
                    message="Payment completed successfully"
                )
            else:
                return CaptureOrderResponse(
                    status="error", 
                    message="Payment capture failed or pending"
                )
                
        except Exception as e:
            return CaptureOrderResponse(
                status="error",
                message=f"Payment processing failed: {str(e)}"
            )

# Global PayPal service instance
paypal_service = PayPalService()