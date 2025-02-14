from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes import register, auth
import uvicorn

# Create FastAPI app
app = FastAPI(title="Registration & Authentication API", version="1.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routers
app.include_router(register.router, prefix="/register")
app.include_router(auth.router, prefix="/auth")

# Health check endpoint
@app.get("/")
def health_check():
    return {"status": "✅ API is running"}

# Run the app when executed directly
if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
