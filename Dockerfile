# Dockerfile für Next.js 15 App mit Standalone-Mode

# Stage 1: Dependencies
FROM node:18-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Kopiere package files
COPY package.json package-lock.json* ./
RUN npm ci --legacy-peer-deps

# Stage 2: Builder
FROM node:18-alpine AS builder
WORKDIR /app

# Kopiere dependencies von deps stage
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Build mit standalone output
ENV NEXT_TELEMETRY_DISABLED 1
RUN npm run build

# Stage 3: Runner
FROM node:18-alpine AS runner
WORKDIR /app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

# Erstelle nextjs User (Security)
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Kopiere standalone build
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

# Setze richtigen User
USER nextjs

# Expose Port
EXPOSE 3000

ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

# Starte Server
CMD ["node", "server.js"]
