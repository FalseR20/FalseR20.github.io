# LLMS.md

Quick project guide for coding LLMs and agentic editors that do not read `AGENTS.md`.

## Project Shape

- Frontend-only Bun + React SPA
- No backend, API routes, router, or global state manager
- Main entry flow:
  1. `src/index.html`
  2. `src/frontend.tsx`
  3. `src/App.tsx`

## Stack

- Bun
- React 19
- TypeScript
- Tailwind CSS v4
- shadcn-style Radix wrappers in `src/components/ui/*`

## Important Files

- `styles/globals.css`: Tailwind v4 entry stylesheet and theme tokens
- `src/index.css`: app-level CSS
- `src/lib/utils.ts`: `cn()` helper
- `build.ts`: static build script
- `src/data/cv.ts`: placeholder content data

## Working Rules

- Keep the repo frontend-only unless the user explicitly asks otherwise
- Reuse existing UI primitives instead of creating duplicate component patterns
- Prefer Tailwind classes first; keep shared tokens in `styles/globals.css`
- Use `@/*` imports for code under `src/*`
- Preserve the current visual direction unless the user asks for a redesign

## Commands

```bash
bun install
bun dev
bun start
bun run format
bun run format:check
bun run lint
bun run lint:fix
bun run typecheck
bun run build
```

## Quality Tooling

- Formatting: Prettier + `prettier-plugin-tailwindcss`
- Linting: ESLint + `eslint-plugin-tailwindcss`
- Tailwind diagnostics: `tailwind-lint`

`bun run lint` runs both ESLint and `tailwind-lint`.

## Tailwind Notes

- Tailwind v4 is configured through `styles/globals.css`, not a `tailwind.config.js` file
- Tailwind-aware tools should target `styles/globals.css`
- Class composition helpers used in the repo include `cn`, `clsx`, and `cva`
