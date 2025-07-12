FROM node:18-alpine

WORKDIR /app

# Copy everything
COPY . .

# Install dependencies with timeout and retries
RUN npm config set fetch-retry-maxtimeout 60000 && \
    npm config set fetch-retry-mintimeout 10000 && \
    npm install --production

# Expose port
EXPOSE 9000

# Start the application
CMD ["npm", "start"]