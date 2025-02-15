# Use Node.js base image
FROM node:18-bullseye

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json first for caching
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Ensure Expo is installed in the project
RUN npm install expo

# Copy the rest of the application
COPY . .

# Expose Metro Bundler & Expo Debug ports
EXPOSE 8081 19000 19001 19002

# Start Expo using npx
CMD ["sh", "-c", "npx expo start --tunnel"]