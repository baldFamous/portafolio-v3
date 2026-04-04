FROM node:18-alpine AS base

# Step 1. Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app

# Install dependencies based on the preferred package manager
COPY package.json package-lock.json* ./
# Omit --frozen-lockfile if you don't have a package-lock.json yet
RUN npm ci

COPY src ./src
COPY public ./public
COPY next.config.mjs .
COPY postcss.config.mjs .
COPY eslint.config.mjs .
COPY jsconfig.json .

# Environment variables must be present at build time
# ENV NEXT_PUBLIC_API_URL=http://api.myapp.com
RUN npm run build

# Step 2. Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

# Don't run production as root
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
USER nextjs

COPY --from=builder /app/public ./public

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Environment variables must be redefined at run time
# ENV NEXT_PUBLIC_API_URL=http://api.myapp.com

EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# server.js is created by next build from the standalone output
CMD ["node", "server.js"]
