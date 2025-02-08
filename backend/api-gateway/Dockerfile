# Use official Nginx image
FROM nginx:latest

# Copy NGINX configuration
COPY nginx.conf /etc/nginx/nginx.conf

# Expose API Gateway port
EXPOSE 80

# Start NGINX
CMD ["nginx", "-g", "daemon off;"]
