# Use the official Node.js image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files first (for caching dependencies)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the Next.js app
RUN npm run build

# Expose port
EXPOSE 5173

# Start the app in production mode
CMD ["npm", "run", "dev"]