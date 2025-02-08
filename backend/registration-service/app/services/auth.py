from app.database import users_collection
from app.models import UserLogin
from app.utils import logger, verify_password
from fastapi import HTTPException
import jwt
import os
from dotenv import load_dotenv

load_dotenv()

# JWT Configuration
SECRET_KEY = os.getenv("SECRET_KEY", "your_secret_key")
ALGORITHM = "HS256"

def create_jwt_token(data: dict):
    """Generate JWT token."""
    try:
        return jwt.encode(data, SECRET_KEY, algorithm=ALGORITHM)
    except Exception as e:
        logger.error(f"❌ JWT Token Generation Failed: {str(e)}")
        raise HTTPException(status_code=500, detail="Token generation failed")

def authenticate_user(user_data: UserLogin):
    """Authenticate user and return JWT token if valid."""
    try:
        user = users_collection.find_one({"email": user_data.email})
        if not user or not verify_password(user_data.password, user["password"]):
            logger.warning(f"⚠ Invalid login attempt for email: {user_data.email}")
            raise HTTPException(status_code=401, detail="Invalid email or password")

        token = create_jwt_token({"sub": user_data.email})
        if not token:
            logger.error("❌ Token generation failed")
            raise HTTPException(status_code=500, detail="Token generation failed")
        
        logger.info(f"✅ User logged in successfully: {user_data.email}")
        return {"access_token": token, "token_type": "bearer"}
    except Exception as e:
        logger.error(f"❌ Authentication Failed: {str(e)}")
        raise HTTPException(status_code=500, detail="Authentication failed")
