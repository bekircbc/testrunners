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

# Copy required assets from the builder stage
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./.next/standalone
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000
ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

# Next.js standalone output expects server.js
CMD ["node", ".next/standalone/server.js"]
