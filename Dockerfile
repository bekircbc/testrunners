# Stage 1: Build the application
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Stage 2: Run the application
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV production

ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

# 1. Copy public directory assets to /app/public
COPY --from=builder /app/public ./public

# 2. Copy standalone output directly into the WORKDIR (/app)
# Next.js standalone expects files to be served from the application root
COPY --from=builder /app/.next/standalone ./

# 3. Copy static CSS/JS assets into the path expected by standalone output
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000

# Execute server.js directly from the application root
CMD ["node", "server.js"]
