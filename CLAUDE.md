# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint (flat config, ESLint 9+)
```

No test framework is configured.

## Architecture

**Next.js 16 App Router** website for ESN UWB Pilsen (Erasmus Student Network at University of West Bohemia).

### Route Structure

- `src/app/(site)/` — Public-facing pages with shared Navbar + Footer layout
- `src/app/outstatic/[[...ost]]/` — Git-based CMS admin UI (Outstatic)
- `src/app/api/outstatic/` — CMS API route

### Content Management (Outstatic)

Content lives as Markdown files in `outstatic/content/` with collections: `news`, `board-members`, `guides`, `partners`, `supporters`. The CMS writes directly to the `develop` branch via GitHub OAuth. Requires `.env.local`:

```
OST_GITHUB_ID=
OST_GITHUB_SECRET=
OST_TOKEN_SECRET=
OST_REPO_SLUG=esn-uwb-web
OST_REPO_OWNER=Zephyron-Tech
OST_REPO_BRANCH=develop
```

### Styling

Tailwind CSS v4 via PostCSS. ESN brand colors are defined as CSS custom properties in `src/app/globals.css`. Two font variables: `--font-lato` (Google Fonts, body) and `--font-kelson-sans` (local, brand headings).

### Key Conventions

- **Server Components by default** — use `'use client'` only for interactive components (Navbar state, forms)
- **Path alias:** `@/*` → `src/*`
- `src/lib/placeholder-data.ts` holds shared TypeScript interfaces (`NewsArticle`, `Partner`, `BoardMember`)
- `next.config.mjs` allows remote images from `picsum.photos` and `buddy.zcu.cz` — add domains here if new image sources are needed
- The `overrides` in `package.json` resolve peer dependency conflicts with Outstatic — do not remove them

### Branching

- `develop` — active development, target for PRs and CMS commits
- `main` — production (deployed to Vercel)
