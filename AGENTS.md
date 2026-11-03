# Project rules

- Pages are server-rendered TanStack Start routes in `src/routes/`; set each page's title, description, canonical and social image in its route `head()` via `seoHead()` from `src/lib/seo.ts`, because link-preview crawlers only read server-rendered tags.
- Browser-only libraries (e.g. the MapLibre map) must load client-side only (lazy import after mount), because route modules also run on the server.
- Theme colors, fonts and utilities live in `src/styles.css` (Tailwind v4 `@theme`); there is no tailwind config file.
