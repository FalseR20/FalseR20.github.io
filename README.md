# falser.dev

Static resume site built with Bun, React 19, TypeScript, Tailwind CSS v4, and shadcn-style Radix primitives.

## Stack

- Bun for local serving and production builds
- React 19 + TypeScript for the SPA
- Tailwind CSS v4 with a CSS-first config in `styles/globals.css`
- shadcn-style UI wrappers in `src/components/ui/*`
- Prettier + `prettier-plugin-tailwindcss` for formatting
- ESLint + `eslint-plugin-tailwindcss` + `tailwind-lint` for linting

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

### Script Notes

- `bun dev`: starts the Bun HTML dev server with HMR
- `bun start`: starts the local preview without HMR
- `bun run format`: runs Prettier across the repo
- `bun run lint`: runs ESLint first, then `tailwind-lint`
- `bun run lint:fix`: applies ESLint fixes, then Tailwind lint autofixes
- `bun run build`: builds static output into `dist/`

## Quality Checks

The repo currently uses three separate quality layers:

- Formatting: Prettier with [prettier.config.mjs](/home/falser/projects/FalseR20/prettier.config.mjs)
- Code linting: ESLint with [eslint.config.js](/home/falser/projects/FalseR20/eslint.config.js)
- Tailwind diagnostics: `tailwind-lint` using `styles/globals.css` as the Tailwind v4 entry stylesheet

Tailwind class ordering and canonical utility suggestions are handled by two tools:

- Prettier sorts Tailwind classes during formatting
- `tailwind-lint` surfaces IntelliSense-style Tailwind warnings such as canonical class suggestions

## CI / Deployment

GitHub Pages deployment is defined in [.github/workflows/main.yml](/home/falser/projects/FalseR20/.github/workflows/main.yml).

On pushes to `main`, CI does the following with Bun:

1. Installs dependencies with `bun install --frozen-lockfile`
2. Runs `bun run typecheck`
3. Runs `bun run lint`
4. Runs `bun run build`
5. Uploads `dist/` and deploys it to GitHub Pages

The custom domain remains controlled by `CNAME` and points to `falser.dev`.

## Project Structure

- `src/index.html`: HTML shell
- `src/frontend.tsx`: React entrypoint
- `src/App.tsx`: main page composition
- `src/data/resume.ts`: placeholder resume content
- `src/components/ui/*`: shared UI primitives
- `src/index.css`: app-level styles
- `styles/globals.css`: Tailwind tokens and theme variables
- `build.ts`: custom Bun build script

## Notes

- This repository is frontend-only. Do not add Bun API routes or a backend layer unless explicitly requested.
- The app is currently a single-page SPA with no router and no global state manager.
- For editor integration, the workspace includes Tailwind IntelliSense settings in `.vscode/settings.json`.
