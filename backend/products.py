from typing import List
from models import Product

# Sample product data for the storefront
SAMPLE_PRODUCTS: List[Product] = [
    Product(
        id="mnsigs-tshirt-navy",
        name="MN Sigs Navy T-Shirt",
        description="Classic navy blue t-shirt with MN Sigs logo. 100% cotton, comfortable fit.",
        price=25.00,
        currency="USD",
        imageUrl="https://via.placeholder.com/300x300/1e3a8a/ffffff?text=MN+Sigs+Navy"
    ),
    Product(
        id="mnsigs-tshirt-gray",
        name="MN Sigs Gray T-Shirt", 
        description="Heather gray t-shirt with vintage MN Sigs design. Soft cotton blend.",
        price=25.00,
        currency="USD",
        imageUrl="https://via.placeholder.com/300x300/6b7280/ffffff?text=MN+Sigs+Gray"
    ),
    Product(
        id="mnsigs-hoodie-black",
        name="MN Sigs Black Hoodie",
        description="Premium black hoodie with embroidered logo. Perfect for Minnesota winters.",
        price=45.00,
        currency="USD", 
        imageUrl="https://via.placeholder.com/300x300/000000/ffffff?text=MN+Sigs+Hoodie"
    ),
    Product(
        id="mnsigs-cap-red",
        name="MN Sigs Red Cap",
        description="Adjustable red baseball cap with MN Sigs embroidered logo.",
        price=18.00,
        currency="USD",
        imageUrl="https://via.placeholder.com/300x300/dc2626/ffffff?text=MN+Sigs+Cap"
    ),
    Product(
        id="mnsigs-sticker-pack",
        name="MN Sigs Sticker Pack",
        description="Pack of 5 weather-resistant vinyl stickers featuring various MN Sigs designs.",
        price=8.00,
        currency="USD",
        imageUrl="https://via.placeholder.com/300x300/10b981/ffffff?text=Sticker+Pack"
    ),
    Product(
        id="mnsigs-mug-white",
        name="MN Sigs Coffee Mug",
        description="11oz ceramic coffee mug with MN Sigs logo. Dishwasher and microwave safe.",
        price=15.00,
        currency="USD",
        imageUrl="https://via.placeholder.com/300x300/ffffff/000000?text=Coffee+Mug"
    )
]

def get_all_products() -> List[Product]:
    """Get all available products"""
    return SAMPLE_PRODUCTS

def get_product_by_id(product_id: str) -> Product | None:
    """Get a specific product by ID"""
    for product in SAMPLE_PRODUCTS:
        if product.id == product_id:
            return product
    return None