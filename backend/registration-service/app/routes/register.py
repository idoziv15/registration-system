from fastapi import APIRouter, HTTPException
from app.models import UserCreate, UserResponse
from app.services.registration import register_user
from app.database import users_collection
from app.utils import logger

router = APIRouter()


router = APIRouter()

@router.post("/", response_model=UserResponse)
def register(user: UserCreate):
    try:
        # Check if email is already registered
        existing_user = users_collection.find_one({"email": user.email})
        if existing_user:
            logger.warning(f"⚠ Email already registered: {user.email}")
            raise HTTPException(status_code=400, detail="Email already registered")

        # Register user
        new_user = register_user(user)
        if "error" in new_user:
            raise HTTPException(status_code=500, detail=new_user["error"])

        logger.info(f"✅ User registered successfully: {user.email}")
        return new_user
    except Exception as e:
        logger.error(f"❌ Registration API Failed: {str(e)}")
        raise HTTPException(status_code=500, detail="Internal Server Error")