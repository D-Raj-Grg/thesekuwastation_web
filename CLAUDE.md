# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Critical: non-standard Next.js

Per AGENTS.md, this is **Next.js 16.2.9** with breaking changes vs. older versions. APIs,
conventions, and file structure may differ from training data. **Read the relevant guide in
`node_modules/next/dist/docs/` before writing Next.js code** (`01-app`, `02-pages`,
`03-architecture`, `index.md`). Heed deprecation notices.

## Project

Marketing/web frontend for **The Sekuwa Station**, a Nepali sekuwa (grilled meat) restaurant
(Hetauda, Nepal). React 19 + App Router.

## Commands

```bash
pnpm dev      # dev server -> http://localhost:3000
pnpm build    # production build
pnpm start    # serve production build
pnpm lint     # eslint (flat config, next core-web-vitals + typescript)
```

Both `pnpm-lock.yaml` and `package-lock.json` exist — **prefer pnpm** (lockfile is current).
No test runner is configured.

## Architecture

**Styling — Tailwind v4, CSS-first.** There is no `tailwind.config.*`. All theme config lives in
`src/app/globals.css` via `@theme inline { ... }`, importing `tailwindcss`, `tw-animate-css`, and
`shadcn/tailwind.css`. Design tokens are CSS variables (`--background`, `--primary`, etc.) mapped to
`--color-*` theme keys; dark mode via the `.dark` class (`@custom-variant dark`). PostCSS uses
`@tailwindcss/postcss`.

**UI components — shadcn + magicui.** `components.json` drives the shadcn CLI: style `radix-nova`,
base color `taupe`, RSC on, lucide icons. The `@magicui` registry (`https://magicui.design/r/{name}`)
is wired in, so most of `src/components/ui/*` are animated magicui primitives (marquee, bento-grid,
particles, border-beam, blur-fade, morphing-text, dock, confetti, dotted-map, etc.), not plain
shadcn. Add components with the shadcn CLI rather than hand-writing them. Animation library is
`motion` (v12, the `motion/react` package — not `framer-motion`).

**Path alias.** `@/*` -> `src/*`. Aliases (from components.json): `@/components`, `@/components/ui`,
`@/lib`, `@/lib/utils`, `@/hooks`.

**`cn()` helper.** `src/lib/utils.ts` — `twMerge(clsx(...))`. Use for all conditional class merging.

**Fonts.** Loaded in `src/app/layout.tsx` via `next/font/google`: Figtree (`--font-sans`, also the
heading font), Geist (`--font-geist-sans`), Geist Mono (`--font-geist-mono`). The `<html>` element
wires the variables; body is a `min-h-full flex flex-col` column.
