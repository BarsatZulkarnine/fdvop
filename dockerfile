# Base image
FROM node:18 AS build-stage

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy project files
COPY . .

# Build the app for production
RUN npm run build

# Use a lightweight web server for serving the app
FROM nginx:alpine AS production-stage

# Copy build output to nginx html directory
COPY --from=build-stage /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start nginx server
CMD ["nginx", "-g", "daemon off;"]
