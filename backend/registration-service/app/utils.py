import logging
from passlib.context import CryptContext

def setup_logger():
    """Set up a centralized logger configuration"""
    logging.basicConfig(
        level=logging.INFO,
        format="%(asctime)s - %(levelname)s - %(message)s",
        handlers=[
            logging.FileHandler("app.log"),  # Save logs to a file
            logging.StreamHandler()  # Print logs to console
        ]
    )
    return logging.getLogger(__name__)

# Create a global logger instance
logger = setup_logger()


# Password hashing configuration
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

def hash_password(password: str):
    """Hashes a password using bcrypt."""
    return pwd_context.hash(password)

def verify_password(plain_password: str, hashed_password: str):
    """Verifies a password against a stored hash."""
    return pwd_context.verify(plain_password, hashed_password)