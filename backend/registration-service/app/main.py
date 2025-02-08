from fastapi import FastAPI
from app.routes import register, auth
import uvicorn

# Create FastAPI app
app = FastAPI(title="Registration & Authentication API", version="1.0")

# Include routers
app.include_router(register.router, prefix="/api/register")
app.include_router(auth.router, prefix="/api/auth")

# Health check endpoint
@app.get("/")
def health_check():
    return {"status": "✅ API is running"}

# Run the app when executed directly
if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
