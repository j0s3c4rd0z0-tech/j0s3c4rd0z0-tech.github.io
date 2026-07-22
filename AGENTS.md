# AI Agent Guide

## Purpose
This repository is a static/progressive portfolio site built with Next.js 12, React 18, Tailwind CSS, and MDX.

## What to know first
- Run locally with:
  - `npm install`
  - `npm run dev`
  - `npm run build`
  - `npm start`
  - `npm run lint`
- `src/pages/` contains the site pages.
- `src/components/` contains reusable page layout components.
- `src/styles/globals.css` defines the global Tailwind-based design system.
- `jsconfig.json` defines `@/*` imports to `./src/*`.
- `next.config.js` enables MDX, image optimization, and redirects `/` to `/home`.

## Codebase conventions
- Keep the dark, technical, premium portfolio aesthetic intact.
- Preserve the existing page structure: `home`, `about`, `projects`, `speaking`, `contact_us`, plus the redirect from `index.jsx`.
- MDX content is supported; do not break `@next/mdx` configuration or remark/rehype plugin behavior.
- `next.config.js` currently ignores ESLint and TypeScript build errors during production builds; prefer fixing code rather than relying on this override.
- There are no API routes or backend services in this repository.

## Important files
- `package.json` — dependencies, scripts, and build commands.
- `next.config.js` — Next.js configuration, MDX support, redirects, and image settings.
- `jsconfig.json` — alias path configuration.
- `README.md` — design tokens, project decisions, and deployment notes.

## When working on Google-related improvements
- This repo does not currently include Google Analytics, Google Tag Manager, or other Google-specific integration files.
- If asked to add Google features, keep them minimal and consistent with the portfolio's performance-first design.
- Avoid adding third-party analytics or scripts unless explicitly requested.

## Style and edits
- Prefer simple page-level edits over adding complex new layout abstractions.
- Maintain the integrity of the existing design tokens and typography choices from `README.md`.
- Do not introduce large new dependencies without clear need.

## Useful references
- `README.md` for portfolio design system and deployment guidance.
- `src/pages/` and `src/components/` for _where_ content and layout are defined.
