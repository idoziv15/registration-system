import httpx
import os
from app.utils import logger
from dotenv import load_dotenv

load_dotenv()

OPENAI_API_URL = os.getenv("OPENAI_API_URL", "http://openai-service:5000/")

async def get_ai_response():
    try:
        async with httpx.AsyncClient() as client:
            response = await client.get(f"{OPENAI_API_URL}/random-text")
            response.raise_for_status()  # Raise exception for HTTP errors
            return response.json()
    except httpx.HTTPError as http_err:
        logger.error(f"❌ OpenAI API Request Failed: {str(http_err)}")
        return {"error": "OpenAI API request failed"}
    except Exception as e:
        logger.error(f"❌ Unexpected Error in OpenAI Service: {str(e)}")
        return {"error": "Internal Server Error"}
