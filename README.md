# Registration System

This repository contains the **Registration System**, which consists of multiple microservices:
- **API Gateway** (`traefik`)
- **Registration Service** (FastAPI)
- **AI Service** (Node.js)
- **Frontend Web** (React)
- **Frontend Mobile** (React Native)
- **Database**: MongoDB Cosmos (Azure)

## **🚀 Getting Started**

### **1️⃣ Prerequisites**
- **Docker** installed ([Download Docker](https://www.docker.com/get-started))
- **Node.js & npm** installed ([Download Node.js](https://nodejs.org/)) *(For frontend-mobile only)*
- **Expo CLI** installed globally *(For frontend-mobile only)*
  ```sh
  npm install -g expo-cli
  ```

## **🛠 Running the Entire System (Except Mobile) with Docker**
The backend services and frontend-web are managed using Docker Compose.

### **1️⃣ Clone the Repository**
  ```sh
git clone https://github.com/idoziv15/registration-system.git
cd registration-system
  ```

### **2️⃣ Create Environment Files**
Ensure that the following .env files exist:

Backend AI Service (backend/AI-service/.env)
```
OPENAI_API_KEY=your-openai-api-key
PORT=5000
```

Backend Registration Service (backend/registration-service/.env)
```
MONGO_URI=mongodb://registration-system-db:your-mongo-credentials@registration-system-db.mongo.cosmos.azure.com:10255/?ssl=true&replicaSet=globaldb&retrywrites=false&maxIdleTimeMS=120000&appName=@registration-system-db@
AI_SERVICE_URL=http://ai-service:5000
```

Frontend Web (frontend-web/.env)
```
API_URL=http://localhost
```

### **3️⃣ Start All Services (Except Mobile)**
Run the following command from the root directory:
```
docker-compose up --build
```

Once everything is running, you can access:

- Frontend Web (React App): http://localhost:3000/login
- Traefik Dashboard: http://localhost:8080
- Keep in mind, if any of the default ports are taken, you need to change the corresponding service port, both on its .env and on docker-compose file.

### **4️⃣ Stopping Services**
To stop all containers, run:
```
docker-compose down
```

## **📱 Running frontend-mobile Manually**
Since frontend-mobile is not included in docker-compose, you need to run it manually.

## **1️⃣ Install Dependencies**
```
cd frontend-mobile
npm install
```

## **2️⃣ Start Expo Development Server**
```
npx expo start --tunnel
```

- Use the QR code to run the app on Expo Go (Android/iOS).
- For Android Emulator, run:
```
adb reverse tcp:8081 tcp:8081
```

- For iOS Simulator, run:
```
npx expo start --ios
```

## **3️⃣ Stopping frontend-mobile**
Press Ctrl + C to stop the process.


## **📌 API Endpoints Overview**
### **1️⃣ Registration Service (FastAPI)**
Method	Endpoint	Description
POST	/register	Register a new user
POST	/auth	Authenticate user

### **2️⃣ AI Service (Node.js)**

Method	Endpoint	Description
GET	/ai	AI-based functionality

## **⚙️ Troubleshooting**
### **1️⃣ docker-compose up Hangs or Fails?**
Try restarting Docker and clearing unused containers:
```
docker-compose down
docker system prune -a
```

## **2️⃣ MongoDB Connection Issues**
Ensure that your Azure Cosmos DB credentials in .env are correct.

## **🚀 Summary**
✅ Run all services (except mobile) with docker-compose

✅ Test the app at http://localhost:3000/login

✅ Run frontend-mobile manually with Expo

Enjoy building! 🚀🔥
