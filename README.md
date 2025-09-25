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

## Generated social sharing image

The Open Graph preview is authored as `assets/og-image.svg` and rendered to `public/og-image.png` via [`sharp`](https://sharp.pixelplumbing.com/).
The PNG is ignored by git and re-generated automatically when you run `npm install` or `npm run build`.
If you need to refresh it manually during development, execute:

```bash
npm run generate:og
```

## Deploy to Cloudflare Workers

This project is ready to deploy as a static asset Worker. Install dependencies, build the site, and publish with Wrangler:

```bash
npm install
npm run deploy:cf
```

Wrangler uses the configuration in `wrangler.toml` to build the Vite site and upload the contents of the `dist` directory as Worker assets. You can override the Worker name or other deployment fields with CLI flags or environment variables when needed.
