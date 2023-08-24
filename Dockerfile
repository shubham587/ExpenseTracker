# Use an official Node.js runtime as the base image
FROM node:14-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of the app's source code to the container
COPY . .

# Build the React app
RUN npm run build

# Expose port 5000
EXPOSE 5000

# Command to run when the container starts
CMD ["npm", "start"]
