# Tootie Treats

A mobile-first React + Vite web experience for custom cake orders. Visitors can explore flavor options, understand the process, view testimonials, and submit detailed order requests with a live preview and instant pricing estimate.

## Getting started

```bash
npm install
npm run dev
```

The app will be available at http://localhost:5173.

## Build for production

```bash
npm run build
```

Preview the built output:

```bash
npm run preview
```

## Deploy to Cloudflare Workers

This project is ready to deploy as a static asset Worker. Install dependencies, build the site, and publish with Wrangler:

```bash
npm install
npm run deploy:cf
```

Wrangler uses the configuration in `wrangler.toml` to build the Vite site and upload the contents of the `dist` directory as Worker assets. You can override the Worker name or other deployment fields with CLI flags or environment variables when needed.

## Keystatic admin access

Protect the Keystatic dashboard with HTTP basic authentication by setting secrets in `.env.local`:

```bash
KEYSTATIC_ADMIN_USERNAME=admin
KEYSTATIC_ADMIN_PASSWORD=change-me
```

`KEYSTATIC_ADMIN_USERNAME` defaults to `admin` when omitted. If `KEYSTATIC_ADMIN_PASSWORD` is not defined, the middleware skips authentication (useful for local prototyping).
