# Registration System

This repository contains the **Registration System**, which consists of multiple microservices:
- **API Gateway** (`traefik`)
- **Registration Service** (FastAPI)
- **AI Service** (Node.js)
- **Frontend Web** (React)
- **Mobile** (React Native)
- **Database**: MongoDB Cosmos (Azure)

## **🚀 Getting Started**

### **1️⃣ Prerequisites**
- **Docker** installed ([Download Docker](https://www.docker.com/get-started))
- **Node.js & npm** installed ([Download Node.js](https://nodejs.org/)) *(For frontend-mobile only)*
- **Expo CLI** installed globally *(For mobile only)*
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

**Make sure to insert YOUR openai api key**
```
OPENAI_API_KEY=your-openai-api-key
PORT=5000
```

Backend Registration Service (backend/registration-service/.env)

**Make sure to insert YOUR MongoDB URI**
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

## **📱 Running mobile Manually**
Since mobile is not included in docker-compose, you need to run it manually with the Makefile.

## **1️⃣ Run the following commands on the mobile folder:**
```
make setup       # Install dependencies & setup the project
make start       # Start Expo
```

## **2️⃣ Expo Development Server is running**
- For web illustration, go to http://localhost:8081
- Use the QR code to run the app on Expo Go (Android/iOS).


## **3️⃣ Stopping mobile**
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

✅ Run mobile manually with Expo

Enjoy building! 🚀🔥

![login page web](./assets/sign-in%20page.jpg)
![sign-up page web](./assets/sign-up%20page.jpg)
![forgot password modal](./assets/forgot_password.jpg)
![successful registeration](./assets//success_registration.png)
![successful login](./assets/successful_login.png)
![login page mobile](./assets/login%20page%20mobile.png)
![register page mobile](./assets/register%20page%20mobile.png)