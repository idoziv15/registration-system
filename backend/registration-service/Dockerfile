# Use Python image
FROM python:3.10

# Set working directory
WORKDIR /app

# # Copy files
# COPY . .

# # Install dependencies
# RUN pip install --no-cache-dir -r requirements.txt

COPY requirements.txt .
RUN pip install --no-cache-dir bcrypt==4.0.1 passlib==1.7.4 pydantic[email] pymongo fastapi uvicorn python-dotenv pyjwt httpx email-validator

COPY . .

# Expose API port
EXPOSE 8000

# Run FastAPI with Uvicorn
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000", "--reload"]