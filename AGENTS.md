# AGENTS.md

## Project Overview

This repository is a frontend-only Bun + React application.

- Runtime: Bun (used to serve the HTML entry in dev/local preview)
- UI: React 19 + TypeScript
- Styling: Tailwind CSS v4 + `tw-animate-css`
- Component primitives: shadcn-style wrappers around Radix UI
- Build output: static files in `dist/`

This project is intentionally client-only. Do not reintroduce Bun API routes or a server entry unless explicitly requested.

## Architecture

The app is a simple SPA with a thin component tree and no backend layer.

Flow:

1. `src/index.html` loads `src/frontend.tsx`
2. `src/frontend.tsx` mounts `<App />` into `#root`
3. `src/App.tsx` composes page-level UI using shared components from `src/components/ui/*`

There is currently:

- No router
- No global state manager
- No backend/API module in this repo
- No data-fetching library

## Key Files

- `package.json`: scripts and dependencies
- `build.ts`: custom Bun build script (`Bun.build`) for static output
- `src/index.html`: HTML shell
- `src/frontend.tsx`: React entry and HMR handling
- `src/App.tsx`: main page component
- `src/components/ui/*`: shared UI primitives (button, input, select, etc.)
- `src/lib/utils.ts`: `cn()` helper (`clsx` + `tailwind-merge`)
- `styles/globals.css`: Tailwind theme tokens / CSS variables
- `src/index.css`: app-specific page styles and animations

## Commands

- `bun install` - install dependencies
- `bun dev` - dev server with HMR (`bun --hot src/index.html`)
- `bun start` - local preview without HMR (`bun src/index.html`)
- `bun run build` - production build to `dist/`

## Conventions

- Use the TS path alias `@/*` for imports from `src/*`
- Reuse `src/components/ui/*` primitives instead of duplicating UI patterns
- Use `cn()` from `src/lib/utils.ts` when composing class names
- Keep app logic in React components/hooks; this repo is frontend-only
- Keep styles in Tailwind classes first, with shared tokens in `styles/globals.css`

## Suggested Growth (if app expands)

If the app grows beyond a single page, prefer a feature-based structure such as:

- `src/components/` (shared)
- `src/features/<feature>/` (feature UI + hooks + local utils)
- `src/lib/` (shared utilities)
- `src/hooks/` (cross-feature hooks)

## Notes for Future Agents

- `src/index.ts` (Bun API demo server) was intentionally removed in the frontend-only conversion
- The build script already supports static builds by scanning `src/**/*.html`
- Verify changes with `bun run build` when Bun is available in the environment
