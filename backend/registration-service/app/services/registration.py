from app.models import UserCreate
from app.database import users_collection
from app.utils import logger, hash_password

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
        return {"id": str(result.inserted_id), "email": user["email"], "username": user["username"]}
    except Exception as e:
        logger.error(f"❌ Registration Failed: {str(e)}")
        return {"error": "Registration failed"}
