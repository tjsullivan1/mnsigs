import os
from dotenv import load_dotenv
from typing import List

# Load environment variables
load_dotenv()

class Settings:
    # PayPal Configuration
    PAYPAL_CLIENT_ID: str = os.getenv("PAYPAL_CLIENT_ID", "")
    PAYPAL_CLIENT_SECRET: str = os.getenv("PAYPAL_CLIENT_SECRET", "")
    PAYPAL_MODE: str = os.getenv("PAYPAL_MODE", "sandbox")  # sandbox or live
    
    # API Configuration  
    API_HOST: str = os.getenv("API_HOST", "0.0.0.0")
    API_PORT: int = int(os.getenv("API_PORT", "8000"))
    
    # CORS Configuration
    CORS_ORIGINS: List[str] = [
        "http://localhost:5173",  # Vite dev server
        "http://localhost:3000",  # Alternative frontend port
        "http://frontend:80",     # Docker frontend service
    ]
    
    # Development
    DEBUG: bool = os.getenv("DEBUG", "false").lower() == "true"
    
    @property
    def paypal_base_url(self) -> str:
        if self.PAYPAL_MODE == "live":
            return "https://api-m.paypal.com"
        return "https://api-m.sandbox.paypal.com"

settings = Settings()