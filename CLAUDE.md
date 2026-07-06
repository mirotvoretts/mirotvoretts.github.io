# Project Rules — Personal Landing (Systems Engineer, C++ / Rust)

These rules override defaults. Follow them exactly.

## Product

A premium, editorial personal website: the "personal library and workshop" of a
systems programmer working in C++ and Rust. Aesthetic: quiet luxury, old money,
Swiss typography, editorial magazine + Apple HIG. It must feel timeless,
restrained and expensive. It is NOT a startup landing page or a flashy portfolio.

## Frontend Stack

- React 18 + TypeScript (strict) + Vite.
- Routing: React Router.
- Animation: GSAP + ScrollTrigger for the cinematic intro and reveals; Lenis for
  smooth scrolling.
- Content: Markdown for blog posts and library items, rendered client-side.
- Fonts: self-hosted Newsreader (serif headings) + Inter (sans body), both OFL.
  Fraunces and Instrument Serif are banned as overused defaults.
- Styling: plain CSS with design tokens as CSS custom properties. CSS Modules per
  component. No CSS framework.
- Deploy: static build to GitHub Pages (`mirotvoretts.github.io`, base `/`) via
  GitHub Actions.

## Architecture — Feature-Sliced Design

Layers, from top to bottom:

```
app  →  pages  →  widgets  →  features  →  entities  →  shared
```

- Imports flow DOWNWARD ONLY. A layer may import from layers below it, never above
  or sideways.
- No cross-imports between slices of the same layer.
- Every slice exposes a public API through its own `index.ts`; import slices only
  through that barrel, never reach into internal files.
- Layer responsibilities:
  - `app` — routing, providers, global styles, bootstrap.
  - `pages` — whole pages composed from widgets.
  - `widgets` — self-contained UI blocks (Header, Hero, sections, Footer, Intro).
  - `features` — user interactions (copy email, reveal-on-scroll).
  - `entities` — business units (Project, Post, LibraryItem, SocialLink): model + card.
  - `shared` — ui-kit, lib helpers, config, styles, assets. Depends on nothing internal.
- Boundaries are enforced by ESLint (`eslint-plugin-boundaries`). A build with an
  upward or sideways import is invalid.

## Code Style

- No comments in code. Code must be self-explanatory through naming.
- TypeScript strict everywhere; no `any` without cause.
- Functional React components only.
- Named exports; each slice re-exports its public API via `index.ts`.
- Prettier formats all code; ESLint must pass with zero errors.

## Design Tokens

Palette (only these; no gradients):

- Warm white `#FAF8F5` (background)
- Charcoal `#222222` (primary text)
- Graphite `#3A3A3A` (secondary text)
- Emerald `#1B4D3E` (single accent)
- Warm-gray border `#E7E2D9`

Design constraints (hard bans): no gradients, no glassmorphism, no neumorphism,
no glowing effects, no oversized icons, no gaming aesthetics, no progress bars for
skills. Large whitespace, perfect alignment, sophisticated proportions, minimal and
restrained animation. Serif headings (Newsreader), sans body (Inter). Honor
`prefers-reduced-motion`.

## Backend Rules (Rust — future, only if needed)

- Any backend is written in Rust.
- `cargo clippy -- -D warnings` and `cargo fmt --check` are a mandatory gate.
- Rust code is considered INVALID until clippy passes with zero warnings and every
  clippy recommendation is resolved.

## Commits

- Conventional-commit style, concise.
- No co-author / attribution lines unless the user explicitly asks.
