from fastapi import APIRouter
from app.models import UserLogin
from app.services.auth import authenticate_user

router = APIRouter()

@router.post("/login")
def login(user: UserLogin):
    return authenticate_user(user)
