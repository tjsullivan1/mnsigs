from pydantic import BaseModel
from typing import List, Optional

# Product Models
class Product(BaseModel):
    id: str
    name: str
    description: str
    price: float  # in major units (e.g. 19.99)
    currency: str = "USD"
    imageUrl: Optional[str] = None

class ProductResponse(BaseModel):
    products: List[Product]

# Cart Models  
class CartItem(BaseModel):
    productId: str
    quantity: int

class CreateOrderRequest(BaseModel):
    items: List[CartItem]

class CreateOrderResponse(BaseModel):
    orderID: str

class CaptureOrderRequest(BaseModel):
    orderID: str

class CaptureOrderResponse(BaseModel):
    status: str  # "success" or "error" 
    message: Optional[str] = None