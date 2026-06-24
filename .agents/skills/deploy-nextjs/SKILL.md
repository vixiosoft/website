---
name: deploy-nextjs-website
description: Guidelines and procedures for validating, building, and deploying a Next.js web application to Cloud Run, Vercel, or static hosting.
---

# Deploying a Next.js Website Live

This skill guides the agent in making a Next.js project live on various platforms. Always perform the pre-deployment checks to guarantee a successful deployment without build or runtime errors.

---

## 1. Pre-Deployment Validation

Before deploying the site, you must verify the code compiles, typechecks, and has no lint issues. Run the following steps:

1. **Lint Checks**:
   ```bash
   npm run lint
   ```
2. **TypeScript Compilation**:
   ```bash
   npm run typecheck
   ```
3. **Local Production Build**:
   ```bash
   npm run build
   ```
   *This catches build-time errors like missing dependencies, routing discrepancies, or syntax errors before making the site live.*

---

## 2. Deployment Options

### Option A: Vercel (Recommended)

Vercel is the native hosting platform for Next.js and requires minimal configuration.

1. **Deploy to Preview (Staging)**:
   ```bash
   npx vercel
   ```
   Follow the prompts to link your project and deploy.
2. **Deploy to Production (Live)**:
   ```bash
   npx vercel --prod
   ```

---

### Option B: Google Cloud Run (Containerized)

For GCP Cloud Run, use Next.js's native **standalone** output mode to produce small container images.

1. **Configure Next.js for Standalone Output**:
   In [next.config.ts](file:///e:/Web/cynigen/next.config.ts) (or `next.config.js`), set `output: 'standalone'`:
   ```typescript
   import type { NextConfig } from "next"

   const nextConfig: NextConfig = {
     output: 'standalone',
   }

   export default nextConfig
   ```

2. **Add a Dockerfile**:
   Create a standard Next.js multi-stage [Dockerfile](file:///e:/Web/cynigen/Dockerfile):
   ```dockerfile
   FROM node:18-alpine AS base

   # Install dependencies only when needed
   FROM base AS deps
   RUN apk add --no-cache libc6-compat
   WORKDIR /app

   COPY package.json package-lock.json* ./
   RUN npm ci

   # Rebuild the source code only when needed
   FROM base AS builder
   WORKDIR /app
   COPY --from=deps /app/node_modules ./node_modules
   COPY . .

   ENV NEXT_TELEMETRY_DISABLED=1
   RUN npm run build

   # Production image, copy all the files and run next
   FROM base AS runner
   WORKDIR /app

   ENV NODE_ENV=production
   ENV NEXT_TELEMETRY_DISABLED=1

   RUN addgroup --system --gid 1001 nodejs
   RUN adduser --system --uid 1001 nextjs

   COPY --from=builder /app/public ./public

   # Set the correct permission for prerender cache
   RUN mkdir .next
   RUN chown nextjs:nodejs .next

   # Automatically leverage output traces to reduce image size
   COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
   COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

   USER nextjs

   EXPOSE 3000
   ENV PORT=3000
   ENV HOSTNAME="0.0.0.0"

   CMD ["node", "server.js"]
   ```

3. **Deploy using Cloud Run MCP Tool**:
   Call the `cloudrun` server's `deploy_local_folder` tool to build and run the service.

---

### Option C: Static Export (GitHub Pages / Netlify / S3)

If the website is purely static (no server-side dynamic logic or API routes):

1. **Configure next.config.ts**:
   ```typescript
   import type { NextConfig } from "next"

   const nextConfig: NextConfig = {
     output: 'export',
     // Optional: images unoptimized if standard image optimization is not supported by host
     images: {
       unoptimized: true,
     },
   }

   export default nextConfig
   ```
2. **Build and Export**:
   ```bash
   npm run build
   ```
   This generates an `out/` directory containing static HTML, CSS, and JS assets.
3. **Deploy contents of `out/`** to GitHub Pages, Netlify, or AWS S3.

---

## 3. Post-Deployment Verification

After the build succeeds and deployment is complete:
1. Open the live URL provided by the hosting provider.
2. Confirm the main elements load correctly.
3. Check the browser console for any runtime exceptions.
4. Verify smooth scroll (Lenis) and entry animations (Framer Motion) work without stuttering or breaking.
