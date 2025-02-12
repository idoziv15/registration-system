import httpx
import os
from app.utils import logger
from dotenv import load_dotenv

load_dotenv()

OPENAI_API_URL = os.getenv("AI_SERVICE_URL")

async def get_ai_response():
    try:
        async with httpx.AsyncClient() as client:
            response = await client.get(f"{OPENAI_API_URL}/ai/generate-random-text")

            # Raise exception for HTTP errors
            response.raise_for_status()
            return response.json()
    except httpx.HTTPError as http_err:
        logger.error(f"❌ OpenAI API Request Failed: {str(http_err)}")
        return {"error": "OpenAI API request failed"}
    except Exception as e:
        logger.error(f"❌ Unexpected Error in OpenAI Service: {str(e)}")
        return {"error": "Internal Server Error"}
