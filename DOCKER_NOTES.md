# Docker Support for MN Sigs React PayPal Storefront

This document outlines the Docker containerization strategy for the React frontend application.

## Overview

The React app will be containerized using a multi-stage Docker build process:
1. **Build Stage**: Use Node.js to build the React application
2. **Serve Stage**: Use Nginx to serve the static files

## Multi-Stage Dockerfile Strategy

```dockerfile
# Stage 1: Build the React application
FROM node:20-alpine AS build

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy source code
COPY . .

# Build arguments for environment variables
ARG VITE_API_BASE_URL
ARG VITE_PAYPAL_CLIENT_ID

# Set environment variables for build
ENV VITE_API_BASE_URL=$VITE_API_BASE_URL
ENV VITE_PAYPAL_CLIENT_ID=$VITE_PAYPAL_CLIENT_ID

# Build the application
RUN npm run build

# Stage 2: Serve with Nginx
FROM nginx:alpine

# Copy built assets from build stage
COPY --from=build /app/dist /usr/share/nginx/html

# Copy custom nginx configuration if needed
# COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
```

## Environment Variables

The following environment variables must be provided at **build time**:

### VITE_API_BASE_URL
- **Purpose**: Backend API server URL
- **Example**: `http://backend:8000` (for Docker Compose) or `https://api.mystore.com` (for production)
- **Default**: `http://localhost:8000`

### VITE_PAYPAL_CLIENT_ID
- **Purpose**: PayPal client ID for payment processing
- **Example**: `AXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXx` (sandbox)
- **Default**: Empty string (will show configuration error)
- **Note**: Use sandbox client ID for development, production client ID for live deployment

## Build Commands

### Local Development Build
```bash
# Build with local backend
docker build \
  --build-arg VITE_API_BASE_URL=http://localhost:8000 \
  --build-arg VITE_PAYPAL_CLIENT_ID=your-sandbox-client-id \
  -t mnsigs-frontend:dev .
```

### Production Build
```bash
# Build for production
docker build \
  --build-arg VITE_API_BASE_URL=https://api.mystore.com \
  --build-arg VITE_PAYPAL_CLIENT_ID=your-production-client-id \
  -t mnsigs-frontend:prod .
```

### Run Container
```bash
# Run the container
docker run -p 3000:80 mnsigs-frontend:dev
```

## Docker Compose Integration

The frontend service integrates with a backend service in a Docker Compose setup. The backend provides the PayPal order management API endpoints.

## Important Notes

1. **Build-time Variables**: Vite environment variables are embedded at build time, not runtime
2. **Security**: Never commit real PayPal client IDs to version control
3. **CORS**: Ensure backend API allows requests from the frontend domain
4. **Nginx Configuration**: May need custom nginx.conf for SPA routing if adding client-side routing later
5. **SSL**: In production, consider using HTTPS with proper certificates

## Extension Points

- **Custom Nginx Config**: Add nginx.conf for advanced routing or headers
- **Health Checks**: Add health check endpoints
- **Multi-environment Builds**: Create separate Dockerfiles for dev/staging/prod
- **Build Optimization**: Add build caching and optimization for faster builds
- **Security**: Add security headers and CSP policies in Nginx configuration