from pymongo import MongoClient
import os
from dotenv import load_dotenv
from app.utils import logger

# Load environment variables
load_dotenv()

# MongoDB Connection
try:
    MONGO_URI = os.getenv("MONGO_URI")
    if not MONGO_URI:
        raise ValueError("❌ ERROR: MONGO_URI is missing in environment variables!")
    
    client = MongoClient(MONGO_URI)
    db = client["registration_system"]
    users_collection = db["users"]
    
    # Check if the database is accessible
    client.admin.command("ping")
    logger.info("✅ Connected to MongoDB successfully")

except Exception as e:
    logger.critical(f"❌ MongoDB Connection Failed: {str(e)}")
    raise Exception("Database connection failed. Check MongoDB server.")