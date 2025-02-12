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
    
    client = MongoClient(
        MONGO_URI,
        serverSelectionTimeoutMS=30000,
        socketTimeoutMS=60000,
        connectTimeoutMS=60000,
        tls=True
    )
    
    db = client.get_database("registration_system")
    # Ensure database exists
    if db is None:
        raise Exception("MongoDB database 'registration_system' could not be initialized.")

    users_collection = db.get_collection("users")
    
    # Check if the database is accessible
    client.admin.command("ping")
    logger.info("✅ Connected to MongoDB successfully")

except Exception as e:
    logger.critical(f"❌ MongoDB Connection Failed: {str(e)}")
    raise Exception("Database connection failed. Check MongoDB server.")