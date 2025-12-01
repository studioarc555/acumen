# --- STAGE 1: BUILD THE APPLICATION (Builder) ---
FROM node:20-alpine AS builder

# Set the working directory for the application
WORKDIR /app

# Install utility packages often needed by Next.js dependencies (e.g., glibc compatibility)
RUN apk add --no-cache openssl libc6-compat

# Copy package files. This layer is highly cached.
COPY package.json ./
COPY package-lock.json ./

# Install all dependencies (including devDependencies for the build step)
RUN npm install

# Copy the TypeScript configuration file (CRITICAL FIX for standalone output)
COPY next.config.ts ./

# Copy the rest of the application source code
COPY . .

# Environment variables for Next.js build optimization
ENV NEXT_TELEMETRY_DISABLED=1

# Run the production build command. This generates the optimized '.next' folder,
# including the required 'standalone' directory due to next.config.ts.
RUN npm run build

# --- STAGE 2: RUN THE APPLICATION (Runner) ---
# Use the Node Slim image for a smaller, more secure final image
FROM node:20-slim AS runner

# Set the working directory
WORKDIR /app

# Set the port that the application will listen on
ENV PORT=3000

# Copy the standalone build files from the builder stage
# This step should now succeed because the 'standalone' directory exists.
COPY --from=builder /app/.next/standalone ./

# Copy the static files (chunks, etc.)
COPY --from=builder /app/.next/static ./.next/static

# Copy the public assets (images, logos, favicon, etc.)
COPY --from=builder /app/public ./public

# Expose the application port
EXPOSE 3000

# Start the Next.js production server
CMD ["node", "server.js"]