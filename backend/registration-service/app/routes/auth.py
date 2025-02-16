from fastapi import APIRouter
from app.models import UserLogin
from app.models import ForgotPasswordRequest
from app.services.auth import authenticate_user
from app.services.auth import process_forgot_password

router = APIRouter()

@router.post("/login")
def login(user: UserLogin):
    return authenticate_user(user)


@router.post("/forgot-password")
def forgot_password(request: ForgotPasswordRequest):
    return process_forgot_password(request.email)