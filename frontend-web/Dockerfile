# Use official Node.js image
FROM node:18

# Set working directory
WORKDIR /app

# Copy only package.json first (to cache dependencies)
COPY package.json ./

# Install dependencies inside the Docker container
RUN npm install

# Copy all project files after installing dependencies
COPY . ./

# Expose port 3000 for the React app
EXPOSE 3000

# Start the React development server
CMD ["npm", "start"]
