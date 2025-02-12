from app.models import UserCreate
from app.database import users_collection
from app.utils import logger, hash_password
from app.services.ai_service import get_ai_response
import asyncio

def register_user(user_data: UserCreate):
    """Register a new user."""
    try:
        user = user_data.dict()
        user["password"] = hash_password(user["password"])

        if users_collection is None:
            logger.error("❌ Cannot register user: Database is unavailable")
            return {"error": "Database is unavailable"}

        result = users_collection.insert_one(user)
        
        logger.info(f"✅ User registered successfully: {user['email']}")

        # Fetch AI-generated text asynchronously
        ai_response = asyncio.run(get_ai_response())

        # Check if AI response contains an error
        if "error" in ai_response:
            logger.warning(f"⚠ AI Service Error: {ai_response['error']}")
            ai_text = "AI service unavailable. Please try again later."
        else:
            ai_text = ai_response.get("response", "No AI-generated text available.")

        return {
            "id": str(result.inserted_id),
            "email": user["email"],
            "username": user["username"],
            "ai_text": ai_text
        }
    except Exception as e:
        logger.error(f"❌ Registration Failed: {str(e)}")
        return {"error": "Registration failed"}
