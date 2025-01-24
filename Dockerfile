# Use an official Node.js runtime as a parent image
FROM node:18 AS build-stage

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app files
COPY . .

# Build the app for production
RUN npm run build

# Use an official Nginx image to serve the app
FROM nginx:alpine AS production-stage

# Copy the built app from the build stage
COPY --from=build-stage /app/dist /usr/share/nginx/html

# Expose the port the app will run on
EXPOSE 80

# Run Nginx
CMD ["nginx", "-g", "daemon off;"]
