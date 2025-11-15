from typing import List
from models import Product

# Sample product data for the storefront
SAMPLE_PRODUCTS: List[Product] = [
    Product(
        id="mnsigs-meatloaf-ticket",
        name="Meatloaf Meal Ticket",
        description="Meat loaf with mashed potatoes and seasonal vegetables.",
        price=40.00,
        currency="USD", 
        imageUrl=""
    ),
    Product(
        id="mnsigs-loin-ticket",
        name="Pork Loin Meal Ticket",
        description="Pork loin with rice pilaf and seasonal vegetables.",
        price=40.00,
        currency="USD",     
        imageUrl=""
    ),
    Product(
        id="mnsigs-special-ticket",
        name="Special Request Meal Ticket",
        description="If you have a dietary restriction, select this item and we will reach out with options.",
        price=40.00,
        currency="USD", 
        imageUrl=""
    ),
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