# Multi-stage build for optimal image size
FROM node:18-alpine AS base
WORKDIR /app

# Install dependencies
FROM base AS dependencies
COPY package*.json ./
RUN npm ci --only=production

# Build stage
FROM base AS build
COPY package*.json ./
RUN npm ci

# Production stage
FROM base AS production
COPY --from=dependencies /app/node_modules /app/node_modules
COPY . .

EXPOSE 3000
ENV NODE_ENV=production
ENV PORT=3000

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD node -e "require('http').get('http://localhost:3000/health', (r) => {if (r.statusCode !== 200) throw new Error(r.statusCode)})"

CMD ["npm", "start"]
